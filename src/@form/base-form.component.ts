import {Input, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, AbstractControl} from "@angular/forms";

import {FormModel} from "./FormModel";
import {FormService} from "./from.service";

export class BaseFormComponent implements OnDestroy{
    /**
     * 组件id，唯一标识
     */
    id;
    /**
     * 表单组件控制器
     */
    formCtrl = new FormControl();
    /**
     * 是否禁用
     */
    @Input() disabled: boolean = false;
    /**
     * 原始数值，初始化组件后，显示的默认值
     */
    @Input() originalValue: any;
    /**
     * 组件model配置
     */
    @Input() model: FormModel;
    /**
     * 组件所属 表单组formGroup
     */
    @Input() formGroup: FormGroup;

    constructor(protected form: FormService) {
    }

    init(){
        this._initFormControl();
        this._initId();
    }
    ngOnDestroy(){
        if(this.model){
            if(this.formGroup){
                this.formGroup.removeControl(this.model.name);
            }else{
                this.form.removeControl(this.model.name);
            }
        }
    }

    private _initId(){
        this.id = this._getControlName(this.formCtrl);
    }
    /**
     * 根据form表单层级关系生成唯一id
     * @param ctrl 控制器
     * @param isParent 是否为父组件/上层组件
     * @returns {string}
     */
    private _getControlName(ctrl: AbstractControl, isParent?:boolean){
        let parent = ctrl.parent, name="";
        if(parent){
            name = this._getControlName(parent, true);
            let controls = parent.controls;
            for(let key in controls){
                if(!controls.hasOwnProperty(key)){
                    continue;
                }
                if(controls[key] == ctrl){
                   name += key;
                   break;
                }
            }
        }
        if(name && isParent){
            name += '-';
        }
        return name;
    }
    private _initFormControl(){
        this._setInitValue();
        if(this.formGroup){
            this.formGroup.addControl(this.model.name, this.formCtrl);
        }else{
            this.form.addControl(this.model.name, this.formCtrl);
        }
    }
    private _setInitValue(){
        let ctrlValue = this.model.value;
        if(this.originalValue){
            ctrlValue = this.originalValue;
        }
        this.formCtrl.setValue(ctrlValue);
    }
}
