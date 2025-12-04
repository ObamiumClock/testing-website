const txt = document.getElementById("text")
const input = document.getElementById("input")
const title = document.getElementById("title")
const bg = document.body.style
bg.backgroundColor = "black"
txt.style.color = "white"
title.style.color = "white"

const swears = ["fuck","bitch","retard","asshole","nigg","ass","shit","rape","fag","faggot"]

function updateTxt() {
  let containsSwear = false;
  
  for (let i = 0; i < swears.length; i++) {
    if (input.value.includes(swears[i])) {
      containsSwear = true;
      break;
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
