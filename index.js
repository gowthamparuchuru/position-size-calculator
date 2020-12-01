var acc_size=0;
var risk1=0;
var risk2=0;
var loss=0;
var units=0;
var refer="";
// document.addEventListener("keydown",function (event) {
//     refer=event.path[0].value;
//    //  console.log(event)
//     if(event.key=="-" || event.key=="+" || event.key=="e"){
//       event.path[0].value="";
//       event.path[0].value="";
//       // console.log(refer)
//     }
// })
  function acc_size_value() {
  acc_size=parseFloat(document.querySelector(".acc").value);
  refer=acc_size;
}
function risk1_value(){
   if(document.querySelector(".risk1").value > acc_size ){
      document.querySelector(".risk1").value=refer;
   }
   else{
   risk1=parseFloat(document.querySelector(".risk1").value);
   refer=risk1;
   document.querySelector(".risk2").value=(risk1/acc_size)*100;
   }
}
function risk2_value(){
   risk2=parseFloat(document.querySelector(".risk2").value);
   document.querySelector(".risk1").value=(risk2*acc_size)/100;
}
function loss_value(){
   loss=parseFloat(document.querySelector(".loss").value);
   document.querySelector(".units").value=Math.floor(risk1/loss);
}
function units_value(){
   units=parseFloat(document.querySelector(".units").value);
}