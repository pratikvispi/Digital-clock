function currentTime(){
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var suffix = "AM";
    suffix = (hour >= 12)? "PM" : "AM";
    hour = (hour == 0)? 12 : ((hour > 12)? (hour-12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " "+ suffix;
    setTimeout(currentTime , 1000)
}

function updateTime(k){
    if(k < 10){
        return "0"+k;
    }
    else{
        return k;
    }
}

currentTime();