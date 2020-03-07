/**
 * 数组的对象集合
 */
class ArrUtil<T>{
    oneOf (value:any, validList:any) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    }
    /**
     * 
     * @param arr 去重数组里重复的对象，通过id对比
     */
    repeatArr(objArray:Array<T>):Array<T>{
    let hash:any = {}; 
    //reduce方法有两个参数，第一个参数是一个callback，用于针对数组项的操作；第二个参数则是传入的初始值，这个初始值用于单个数组项的操作。
    objArray = objArray.reduce((item:any, next:any)=> {//这是针对数组项操作的函数，对于每个数组项，reduce方法都会将其调用一次
        //可使用最多四个参数来声明回调函数（第一个参数：通过上一次调用回调函数获得的值;第二个参数：当前数组元素的值；第三个参数：当前数组元素的数字索引；第四个参数：包含该元素的数组对象）
        //这里只使用了两个参数，所以item和next分别代表上一次调用回调函数后的值和objArray项值
        hash[next.id]?'':hash[next.id]=true&&item.push(next);//与func3逻辑相似 
        return item;
    }, []);//初始值是一个空对象，使用reduce方法返回的是空对象通过叠加执行之后的结果
    return objArray;
    }

    /**
     * 通过id删除数组里的某对象
     */
    delArrObj(obj:any,arr:Array<any>):Array<any>{
        let resArr:Array<any>=[]
        arr.forEach(item=>{
           if(item.id!=obj.id){
               resArr.push(item);
           }
        })
        return resArr;
    }
}
export default new ArrUtil();