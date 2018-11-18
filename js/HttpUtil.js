/**
 * POST函数
 * @param url  请求URL
 * @param funcSuccess 处理成功的回调函数
 * @param funcFail 处理失败的回调函数
 */
var postJSON = function (url, funcSuccess, funcFail) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            if (resp.code === 1) {
                funcSuccess();
            } else {
                funcFail();
            }
        }
    };
    xhr.open("post", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
};

var postJSONWithJSONParam = function (url, funcSuccess, funcFail, jsonParam) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            if (resp.code === 1) {
                funcSuccess();
            } else {
                funcFail();
            }
        }
    };
    xhr.open("post", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonParam);
};

var getJSON = function (url, funcSuccess, funcFail) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            if (resp.code === 1) {
                funcSuccess(resp);
            } else {
                funcFail();
            }
        }
    };
    xhr.open("get", url);
    xhr.send();
};


