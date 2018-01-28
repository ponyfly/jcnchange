/*************************************************************************
 * alert 弹出框改写
 * param  str  传入要弹出的str
 *          pos  弹出的位置   1
 *                            2
 *                            3
 *          不传默认是位置1
 * return false
 *************************************************************************/
window.alert = function (str, pos) {
    if (document.getElementById("Alert") || !str) {
        return false;
    }
    var position = '';
    var pos = pos || 1;
    var Alert_wrap = document.createElement("div");
    Alert_wrap.setAttribute("id", "Alert");
    Alert_wrap.style.textAlign = "center";
    Alert_wrap.style.position = "fixed";
    Alert_wrap.style.zIndex = "999";
    switch (pos) {
        case 1:
            position = '20%';
            break;
        case 2:
            position = '40%';
            break;
        case 3:
            position = "85%";
            break;
        default:
            position = "10%";
            break;
    }
    Alert_wrap.style.top = position;
    Alert_wrap.style.width = "100%";
    document.getElementsByTagName("body")[0].appendChild(Alert_wrap);
    var Alert_in = document.createElement("div");
    Alert_in.style.padding = "4px 14px";
    Alert_in.style.maxWidth = "200px";
    Alert_in.style.zIndex = "99";
    Alert_in.style.fontSize = "12px";
    Alert_in.style.textShadow = "none";
    Alert_in.style.display = "inline-block";
    Alert_in.style.lineHeight = "20px";
    Alert_in.style.backgroundColor = "#000000";
    Alert_in.style.color = "#ffffff";
    Alert_in.style.borderRadius = "6px";
    Alert_in.style.opacity = "0.8";
    Alert_in.style.wordBreak = "break-all";
    Alert_in.textContent = str;
    document.getElementById("Alert").appendChild(Alert_in);
    setTimeout(function () {
        document.getElementsByTagName("body")[0].removeChild(Alert_wrap);
    }, 2000);
    return false;
}