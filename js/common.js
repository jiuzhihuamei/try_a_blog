// 全局配置
var config = {

    host:"47.99.87.23",
    apiURL:"http://47.99.87.23/api"

};


var checkLogin = function () {
    /*检查登录状态*/
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            var login_status = document.getElementById("login_status");
            if (resp.code === 1) {

                login_status.innerText = "注销";
            }
            else {
                login_status.innerText = "登录";
                login_status.href="login.html";

            }
        }
    };

    xhr.open("get", "/wns/user/checkLogin");
//xhr3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
};