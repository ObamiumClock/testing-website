const txt = document.getElementById("text")
const input = document.getElementById("input")
const title = document.getElementById("title")
const bg = document.body.style
bg.backgroundColor = "black"
txt.style.color = "white"
title.style.color = "white"


function updateTxt() {
  txt.innerHTML = "You said: " + "'" + input.value + "'";
  console.log("msg submitted");
  if (txt.innerHTML.includes(input.value)) {
    console.log("msg success");
  }
}
