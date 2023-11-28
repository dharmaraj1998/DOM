var selectedButton = document.querySelectorAll(".drum").length;

for (i = 0; i < selectedButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handle);

  function handle(e) {
    var buttonSelected = this.textContent;




    playSound(buttonSelected)
    animation(buttonSelected)
    // console.log(this.textContent);
    
  }
}

document.addEventListener("keypress",(e)=>{
  playSound(e.key)
  animation(e.key)
 

})

function playSound(selected){
  switch (selected) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("./sounds/tom-2.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("./sounds/tom-3.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("./sounds/tom-4.mp3");
      tom1.play();
      break;

    default:
      console.log(buttonSelected);
  }
}

function animation(key){
  var anima = document.querySelector("."+key)
  anima.classList.add("pressed")

  setTimeout(()=>{
    anima.classList.remove("pressed")
  },100)
  

}

// if (buttonSelected === "w") {
//   var audio = new Audio("./sounds/crash.mp3");
//   audio.play();
// } else if (buttonSelected === "a") {
//   var audio = new Audio("./sounds/kick-bass.mp3");
//   audio.play();
// } else if (buttonSelected === "s") {
//   var audio = new Audio("./sounds/snare.mp3");
//   audio.play();
// } else if (buttonSelected === "d") {
//   var audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// } else if (buttonSelected === "j") {
//   var audio = new Audio("./sounds/tom-2.mp3");
//   audio.play();
// } else if (buttonSelected === "k") {
//   var audio = new Audio("./sounds/tom-3.mp3");
//   audio.play();
// } else if (buttonSelected === "l") {
//   var audio = new Audio("./sounds/tom-4.mp3");
//   audio.play();
// }

// document.querySelectorAll(".drum")[0].addEventListener("click",handle)

// var audio = new Audio("./sounds/crash.mp3")
//      audio.play()

// function BellBoy(name,age,city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;

// }
// var bellBoy1 = new BellBoy("raj",2,"kanchipuram")
// var bellBoy2 = new BellBoy("sraj",32,"chennai")

// function myFunction(n){
//     var output;

//     if(n === 1){
//          output = [0]

//     }else if(n === 2){
//          output = [0,1]

//     }else{
//         output = [0,1];
//         for(i =2;i<n;i++){
//              output.push(output[output.length -2] + output[output.length -1])
//         }

//     }
//     return output;

// }

// myFunction(9)
