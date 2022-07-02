
let fullName=prompt("lütfen adınızı giriniz")

const myName=document.querySelector("#myName")
myName.innerHTML=`${myName.innerHTML} <span>${fullName}</span>`


window.onload=showTime
function showTime() {
    const today = new Date();
    let d=today.getDay()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    document.getElementById('text').innerHTML =  h + ":" + m + ":" + s+ " "+gunler[d];
    setTimeout(showTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }