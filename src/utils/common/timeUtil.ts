
    export default class TimeUtil {
        getTime(time:any) { //通过时间戳获取时间，2019.11.1格式
            let strTime:any=time+''
            if (strTime.length==10) strTime = parseInt(strTime)*1000
            else{
                strTime=parseInt(strTime)
            }
            let date = new Date(strTime)        
            let {year,month,day}={year:date.getFullYear(),month:date.getMonth(),day:date.getDate()}
            let result = year + '.' + (month+1) + '.' + day
            return result;
        }
        
        //获取2019-11-1格式
        getTimeLine(time:any){
            time=time+''
            if (time.length==10) time = parseInt(time)*1000
            else{
                time=parseInt(time)
            }
            let date = new Date(time)        
            let {year,month,day}={year:date.getFullYear(),month:date.getMonth(),day:date.getDate()}
            let result = year + '-' + (month+1) + '-' + day
            return result;
        }
    }
