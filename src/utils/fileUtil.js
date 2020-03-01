class FileUtil{
    downLoadXls(data, filename) {
        //var blob = new Blob([data], {type: 'application/vnd.ms-excel'})接收的是blob，若接收的是文件流，需要转化一下
    if (typeof window.chrome !== 'undefined') {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(data);
        link.download = filename;
        link.click();
    } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE version
        let blob = new Blob([data], { type: 'application/force-download' });
        window.navigator.msSaveBlob(blob, filename);
    } else {
        // Firefox version
        let file = new File([data], filename, { type: 'application/force-download' });
        window.open(URL.createObjectURL(file));
    }
}
}
export default new FileUtil();
