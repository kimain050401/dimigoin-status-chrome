fetch('https://api.uptimerobot.com/v2/getMonitors?api_key=ur1706814-e37fcb1e2d00c34453c03b85', {
    method: 'POST'
})
.then((response) => response.json())
.then((data) => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("circlebox").style.display = "block";
    console.log('성공:', data);
    let status = ["paused", "not checked yet", "up", "-", "-", "-", "-", "-", "seems down", "down"];
    let status_color = ["gray", "gray", "green", "-", "-", "-", "-", "-", "red", "red"];
    var countError = 0
    for(var i = 0; i < data.monitors.length; i++){
        document.getElementById("monitor").innerHTML += "<a class='circle' style='color: " + status_color[data.monitors[i].status] + "'>⦁</a>";
        document.getElementById("monitor").innerHTML += "<a class='friendly_name'>" + data.monitors[i].friendly_name + "</a>";
        document.getElementById("monitor").innerHTML += "<br>";
        if(data.monitors[i].status == 8 || data.monitors[i].status == 9){
            countError += 1
        }
    }
    if(countError == 0){
        document.getElementById("circle").style.color = "green";
    } else{
        document.getElementById("circle").style.color = "red";
    }
})
.catch((error) => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("monitor").innerHTML += "<a class='friendly_name'>Error : 알 수 없는 이유로 로드할 수 없습니다.</a>";
});