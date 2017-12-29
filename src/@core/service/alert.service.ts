import {Injectable} from '@angular/core';

declare interface AlertOptions{
    type:string;
    msg:string;
    timeout?:number;
}

@Injectable()
export class AlertService {

    public alerts = [];
    public loadings = [];
    public timeout:number = 2000;

    constructor() {}

    show(alert: AlertOptions){
        let timeout = alert.timeout || this.timeout;
        this.alerts.push(alert);
        setTimeout(()=>{
            this.alerts.shift();
        }, timeout);
    }
    success(msg:string, timeout?:number){
        this.show({
            type: 'success',
            msg: msg,
            timeout: timeout
        });
    }
    warning(msg:string, timeout?:number){
        this.show({
            type: 'warning',
            msg: msg,
            timeout: timeout
        });
    }
    danger(msg:string, timeout?:number){
        this.show({
            type: 'danger',
            msg: msg,
            timeout: timeout || 3000
        });
    }

    loading(msg:string, key?:string): string{
        key = key || (new Date().getTime() + '' + this.alerts.length);
        this.loadings.push({
            key: key,
            msg: msg || '系统处理中...',
            type: 'warning'
        });
        return key;
    }
    removeLoading(key:string){
        let loadingIndex = this.loadings.findIndex(item =>{
            return item.key == key;
        });
        if(loadingIndex >= 0){
            this.loadings.splice(loadingIndex, 1);
        }
    }

    empty(){
        while(this.alerts.length > 0){
            this.alerts.pop();
        }
    }

}
