var plusready = function () {
    plus.navigator.setStatusBarBackground('#000000');
    var v = plus.webview.currentWebview();
    v.setStyle({
        errorPage: '404.html'
    })
    location.href = 'http://3.h5.smapps.cn/h5/';
}
if (window.plus) {
    plusready();
} else {
    document.addEventListener('plusready', plusready, false);
}