class SystemUtil{
    isMobile(){
        const ua = navigator.userAgent.toLowerCase();
        const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);
        return isMobile;
    }
    /**
     * 
     * @param a 转义html脚本 < > & " '
     */
    escapeHTML(a:any){
        a = "" + a;  
    return a.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g,"").replace(/'/g, "'");
    }
    
}
export default new SystemUtil();
