export class DateUtil{
    /**
     * 获取当月第一天
     */
    static getFirstDayOfMonth(){
        let now = new Date();
        now.setDate(1);
        now.setHours(0, 0, 0);
        return Math.floor(now.getTime()/1000);
    }
    /**
     * 获取当月最后一天
     */
    static getLastDayOfMonth(){
        let now = new Date(),
            nowMonth = now.getMonth();
        now.setMonth(nowMonth + 1);
        now.setDate(0);
        now.setHours(0, 0, 0);
        return Math.floor(now.getTime()/1000);
    }

}