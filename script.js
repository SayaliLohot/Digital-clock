
//real time clock

function ClockStart(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, minutes, seconds); 

    if(hours>12){
        hours = hours -12;
    }
    if (hours>=12){
      let ampm = document.getElementById("ampm");
        ampm.innerText="PM";
    }
    else{
        let ampm = document.getElementById("ampm");
        ampm.innerText="AM";
 
    };
 
    let hrs =document.getElementById("hrs");
    hrs.innerText = hours;
    let mins =document.getElementById("mins");
    mins.innerText = minutes;
    let secs = document.getElementById("secs");
    secs.innerText = seconds;
}

setInterval(()=>{
    ClockStart();
},1000);


let date = new Date();
let hours = date.getHours();

//set alarm to party time
let button =document.getElementById("button");
button.addEventListener("mouseover" , function(){
    this.innerText="Party Time";
})
button.addEventListener("mouseout" , function(){
    this.innerText="Set Alarm";
})
let greeting=document.getElementById("greeting")
if(hours>=12 && hours<16){
  greeting.innerHTML="GOOD AFTERNOON!!"
  }
if(hours>=16 && hours<20){
greeting.innerHTML="GOOD EVENING!!"
}
if(hours>=20 && hours<24){
  greeting.innerHTML="GOOD NIGHT!!"
  }
  
button.addEventListener("click",function(){

  let date = new Date();
  let hours = date.getHours();
let wakeUp = document.getElementById("wakeUp");
let lunch = document.getElementById("lunch");
let nap = document.getElementById("nap");
let night = document.getElementById("night");

  if (parseInt(wakeUp.value) === hours) {
    document.getElementById("settime").innerHTML = "GRAB SOME BREAKFAST!";
    document.getElementById("clockimage").src = "./images/Component 30 – 1.svg";
  }
  else if (parseInt(lunch.value) === hours) {
    document.getElementById("settime").innerHTML = "LET'S HAVE SOME LUNCH !";
    document.getElementById("clockimage").src = "./images/Component 31 GÇô 1.jpg";
  }
  else if (parseInt(nap.value) === hours) {
    document.getElementById("settime").innerHTML = "GET SOME TEA..!";
    document.getElementById("clockimage").src = "./images/lunch_image.png";
  }
  else if (parseInt(night.value) === hours) {
    document.getElementById("settime").innerHTML = "GO TO SLEEP";
    document.getElementById("clockimage").src = "./images/Component 32 GÇô 1.jpg";
  }
  let timing = document.getElementsByClassName("timing");
  timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
  timing[1].innerText = lunch.options[lunch.selectedIndex].text;
  timing[2].innerText = nap.options[nap.selectedIndex].text;
  timing[3].innerText = night.options[night.selectedIndex].text;
})
