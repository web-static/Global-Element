function ajx(u, i) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(i).innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", u, true);
    xmlhttp.send();
}
function get_text(u) {
    var xmlhttp = null;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", u, false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}

function login_check() {
    var status = "";
    status = sessionStorage.getItem("status");

    if (status != "ok") {
        var lasturl = window.location.href;
        for()
        window.location.href = ("https://uiap.iisjy.cn/login.html?url="+encodeURIComponent(window.location.href));
    }
}

function logout() {
    sessionStorage.removeItem("status");
    sessionStorage.setItem("lasturl", window.location.href)
    window.location.href = "login.html";
}

function get_Ajax_json_obj(url) {
    var xmlhttp = null;
    var text = null;
    var obj = null;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send(null);
    text = xmlhttp.responseText;
    obj = JSON.parse(text);
    return obj;
}
