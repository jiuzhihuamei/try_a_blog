// 全局配置
var config = {

    host: "47.99.87.23",
    apiURL: "http://47.99.87.23/api"

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
                login_status.onclick = function (ev2) { // 绑定注销事件
                    ev2.preventDefault();
                    var xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;
                    xhr.onreadystatechange = function (ev) {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var resp = JSON.parse(xhr.responseText);
                            if (resp.code === 1) {
                                window.location.href = 'index.html';
                            } else {
                                alert("注销失败");
                            }
                        }
                    };
                    xhr.open("post", config.apiURL + "/wns/user/signOut");
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send();
                }
            }
            else {
                login_status.innerText = "登录";
                login_status.href = "login.html";

            }
        }
    };

    xhr.open("get", config.apiURL + "/wns/user/checkLogin");
//xhr3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
};