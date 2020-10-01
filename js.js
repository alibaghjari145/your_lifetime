function month() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    if(month>12){
        alert("please enter month<13")
    }
    var res = 12 * year + month;
    document.getElementById("monthsh").innerHTML=res;
}
function week() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    if(month>12){
        alert("please enter month<13")
    }
    var res = 12 * year + month;
    var res2 = res *4;
    document.getElementById("weeksh").innerHTML=res2;
}
function day() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    var day = Number(document.getElementById("day").value);
    if(month>12){
        alert("please enter month<13")
    }
    if(day>30){
        alert("please enter day<30")
    }
    var res = 12 * year + month;
    var res2 = res *30;
    var res3 = res2 + day;
    document.getElementById("daysh").innerHTML=res3;
}
function hour() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    var day = Number(document.getElementById("day").value);
    if(month>12){
        alert("please enter month<13")
    }
    if(day>30){
        alert("please enter day<30")
    }
    var res = 12 * year + month;
    var res2 = res *30;
    var res3 = res2 + day;
    var res4 = res3 + year *6;
    document.getElementById("hoursh").innerHTML=res4;
}
function minute() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    var day = Number(document.getElementById("day").value);
    if(month>12){
        alert("please enter month<13")
    }
    if(day>30){
        alert("please enter day<30")
    }
    var res = 12 * year + month;
    var res2 = res *30;
    var res3 = res2 + day;
    var res4 = res3 + year *6;
    var res5 = res4 * 60;
    document.getElementById("minutesh").innerHTML=res5;
}
function second() {
    var year = Number(document.getElementById("year").value);
    var month = Number(document.getElementById("month").value);
    var day = Number(document.getElementById("day").value);
    if(month>12){
        alert("please enter month<13")
    }
    if(day>30){
        alert("please enter day<30")
    }
    var res = 12 * year + month;
    var res2 = res *30;
    var res3 = res2 + day;
    var res4 = res3 + year *6;
    var res5 = res4 * 3600;
    document.getElementById("secondsh").innerHTML=res5;
}
function share(){
   document.getElementById("sharesh").style.display= "block";
}
function green(){
    document.getElementById("ready").style.display="none";
    document.getElementById("container").style.display="block";
}
function red(){
    document.getElementById("wait").style.display="block";
 
}