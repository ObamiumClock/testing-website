console.log("Script loaded!");

const txt = document.getElementById("text")
const input = document.getElementById("input")
const title = document.getElementById("title")

const bg = document.body.style
bg.backgroundColor = "black"
txt.style.color = "white"
title.style.color = "white"

const swears = ["fuck","bitch","retard","asshole","nigg","ass","shit","rape","fag","faggot"]
let swearList = swears.length-1

function updateTxt() {
  let containsSwear = false;
  
  // Check if input contains any swear word
  for (let i = 0; i < swears.length; i++) {
    if (input.value.includes(swears[i])) {
      containsSwear = true;
      break; // Stop checking once we find one
    }
  }
  
  if (containsSwear) {
    txt.innerHTML = "You cannot write swear words";
  } else {
    txt.innerHTML = "You said: " + "'" + input.value + "'";
    console.log("msg submitted");
    console.log("msg success");
  }
}
