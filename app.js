class DigitalClock {
  constructor(element){
    this.element = element;
  }

  start(){
     this.update();

    setInterval(() => {
      this.update();
    }, 500);
 
  }

  update(){
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";


  this.element.querySelector(".clock-time").textContent = timeFormatted;
  this.element.querySelector(".clock-ampm").textContent = amPm;
}

getTimeParts() {
  const now = new Date();


  return {
    hour: now.getHours() % 12 || 12,
    minute: now.getMinutes(),
    isAm: now.getHours() < 12
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();






tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear(),nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nyear<1000) nyear+=1900;
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

