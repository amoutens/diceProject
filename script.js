
let firstRandomNumber = Math.floor(Math.random()*(6-1+1)+1);
let secondRandomNumber = Math.floor(Math.random()*(6-1+1)+1);

function changeImage() {
  document.getElementById("img1").setAttribute("src", `images/dice${firstRandomNumber}.png`);
  document.getElementById("img2").setAttribute("src", `images/dice${secondRandomNumber}.png`);
  if(firstRandomNumber > secondRandomNumber) document.getElementById("h1").innerHTML = "Player 1 Wins!";
  else if(firstRandomNumber < secondRandomNumber) document.getElementById("h1").innerHTML = "Player 2 Wins!";
  else document.getElementById("h1").innerHTML = "Draw!";
}
console.log(firstRandomNumber);