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
  for (let i = 0;input.value.includes(swears[i]) === false && i <= swearList;i++) {
    txt.innerHTML = "You said: " + "'" + input.value + "'";
    console.log("msg submitted");
    if (txt.innerHTML.includes(input.value)) {
      console.log("msg success");
    }
  } else {
    txt.innerHTML = "You cannot write swear words"
  }
}
