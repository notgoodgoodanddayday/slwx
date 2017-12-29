export class FormModel {
    label: string = "";
    name: string = "";
    value?: any = "";
    hint?: string = "";          //提示语
    required?: boolean = false;
    errorMessage?: string = "";  //错误提示
    requiredErrorMessage?: string = "";  //必填错误提示

    constructor(obj:FormModel = null) {
        if(obj){
            for (let key in obj) {
                this[key] = obj[key];
            }
            this.initErrorInfo();
        }
    }

    initErrorInfo?(){
        if(!this.requiredErrorMessage){
            this.requiredErrorMessage = this.label+"不能为空";
        }
        if(this.errorMessage == "" && this.required){
            this.errorMessage = this.requiredErrorMessage;
        }
    }

}
