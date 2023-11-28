var randomNumber1 = Math.floor(Math.random()*6) +1;// generating 1 to 6
// console.log(randomNumber1);


document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png") // generate dice1 to dice6.png for img1

var randomNumber2 = Math.floor(Math.random()*6) +1;// generating 1 to 6

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png")

// var heading = document.querySelector("h1").textContent

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player1 won the match"
}else if(randomNumber2>randomNumber2){
    document.querySelector("h1").textContent = "player2 won the match"
}else{
    document.querySelector("h1").textContent = "Draw the match!"
}