/*检查登录状态*/
var xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function (ev) {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
        var resp = JSON.parse(xhr3.responseText);
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

xhr3.open("post", "http://47.99.87.23/api/user/isSignIn");
//xhr3.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr3.send();