import {Injectable, ElementRef} from '@angular/core';
import {FormGroup, AbstractControl, FormArray} from "@angular/forms";

import {AlertService} from "@core/service/alert.service";

declare let $:any;

@Injectable()
export class FormService {
    /**
     * formGroup，一个form实例
     */
    private _formGroup: FormGroup = new FormGroup({});
    /**
     * 提交状态
     * @type {boolean}
     * @private
     */
    private _committing: boolean = false;
    /**
     * _formGroup未使用到的参数， 如id
     * @type {{}}
     * @private
     */
    private _extraParams = {};
    /**
     * formService所在组件的dom
     */
    private _context: any;

    constructor(
        private http,
        // private http: HttpClient,
        private alert: AlertService,
        private el: ElementRef
    ) {
        this._context = el.nativeElement;
    }
    addControl(name: string, formCtrl: AbstractControl) {
        this._formGroup.addControl(name, formCtrl);
    }
    removeControl(name: string){
        this._formGroup.removeControl(name);
    }
    /**
     * 获取表单数据
     * @returns {any}
     */
    getData(): any {
        let data = this._formGroup.value;
        for (let key in this._extraParams) {
            data[key] = this._extraParams[key];
        }
        return data;
    }
    /**
     * 设置表单数据, 并且初始化
     * @param data  表单数据，会根据表单组件设置相应的值
     * @param extraParamsName   表单额外的参数，提交表单会用到，如id
     */
    setData(data, extraParamsName = []): void {
        this._formGroup.patchValue(data);

        let obj = Object.assign({}, data);
        this.setExtraParams(obj, extraParamsName);
    }
    /**
     * 更新表单
     * @param data
     */
    updateData(data): void{
        this._formGroup.patchValue(data);
    }
    /**
     * 表单是否合法有效，提交表单前判断使用
     * @returns {boolean}
     */
    isValid(){
        if(!this._formGroup.valid){
            this.markAsTouched(this._formGroup);
            //遍历查找错误，并提示
            this.showError();
        }
        return this._formGroup.valid;
    }
    /**
     * 表单是否有修改
     * @returns {boolean}
     */
    isDirty(): boolean{
        return this._formGroup.dirty;
    }
    /**
     * 标记表单内所有组件为touched状态
     */
    markAsTouched(formGroup):void{
        let ctrls = formGroup.controls || [];
        for(let key in ctrls){
            let item = ctrls[key];
            if(item instanceof FormGroup || item instanceof FormArray){
                this.markAsTouched(item);
            }else{
                item.markAsTouched();
            }
        }
    }
    /**
     * 参数传递形式改为json
     * @param url
     * @param extraParams  额外参数
     * @param successCallback
     * @param errorCallback
     * @param finallyCallback
     */
    post({url="", extraParams={}, successCallback=null, errorCallback=null, finallyCallback=null} = {}) {
        successCallback = successCallback || this.defaultSuccessCallback;
        if (this.isEndCommit() && this.isValid()) {
            this.beginCommit();
            let params = Object.assign(this.getData(), extraParams);
            this.http.postJson(url, params, successCallback, errorCallback, () => {
                this.endCommit();
                finallyCallback && finallyCallback();
            });
        }
    }
    /**
     * 判断表单是否为 '提交中' 状态
     * @returns {boolean}
     */
    isCommiting(): boolean {
        return this._committing;
    }
    /**
     * 添加额外参数
     * @param key
     * @param value
     */
    appendExtraParams(key, value) {
        this._extraParams[key] = value;
    }
    /**
     * 遍历查找错误，并提示
     */
    showError(): void {
        let errCtrl = this.getKeyByFormGroupError(this._formGroup);
        if(errCtrl){
            let formFieldDom = $(this._context).find('#'+errCtrl);
            formFieldDom.focus();
            // 错误提示
            let errmsg = formFieldDom.closest('.form-group').find('label .text').text();
            if(errmsg.trim() != ''){
                this.alert.warning(errmsg+' 填写内容不正确', 3000);
            }
        }
    }

    private isEndCommit() {
        return !this._committing;
    }
    private beginCommit() {
        this._committing = true;
    }
    private endCommit() {
        this._committing = false;
    }
    private defaultSuccessCallback(): void {
        history.go(-1);
    }
    private setExtraParams(obj, extraParamsName) {
        let params = {};
        for (let name of extraParamsName) {
            params[name] = obj[name];
        }
        this._extraParams = params;
    }
    private buildFormdata(extraParams){
        let formdata = new FormData(), params = this.getData();
        // formdata = HttpHelper.buildFormdata(params, formdata);
        // formdata = HttpHelper.buildFormdata(extraParams, formdata);
        return formdata;
    }

    /**
     * 遍历FormGroup，查找错误的FormControl
     * @param formGroup
     * @returns {any}
     */
    private getKeyByFormGroupError(formGroup){
        let ctrls = formGroup.controls || [];
        for(let key in ctrls){
            let item = ctrls[key], errKey;
            if(item instanceof FormGroup || item instanceof FormArray){
                let formGroupKey = this.getKeyByFormGroupError(item);
                if(formGroupKey){
                    errKey = key + '-' + formGroupKey;
                }
            }else if(item.invalid){
                errKey = key;
            }

            if(errKey){
                return errKey;
            }
        }
        return null;
    }

}
