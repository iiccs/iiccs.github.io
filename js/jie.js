var d = new Date();
d.setFullYear(2018);
d.setMonth(12);
d.setDate(30);
d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);
var past = d.getTime();
var t = new Date();
var mon = t.getMonth() + 1;
t.setMonth(mon)
t.setHours(0);
t.setMinutes(0);
t.setSeconds(0);
t.setMilliseconds(0);
var now = t.getTime();
var diff = now - past;
      diff = diff / 60 / 60 / 24;
var remain = diff % 3;
if (remain == 0){
document.getElementById("demo").innerHTML = "东 门";
}else if(remain == 1){
document.getElementById("demo").innerHTML = "冲 脉";
}else if(remain == 2){
document.getElementById("demo").innerHTML = "四 把";
}