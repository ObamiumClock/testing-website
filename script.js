const txt = document.getElementById("text")
const input = document.getElementById("input")
const bg = document.body.style
bg.backgroundColor = "black"
txt.color = "white"


function onclick() {
  txt.innerHTML = "You said: "+input.value 
  console.log("msg submitted")
  if (txt.innerHTML.includes(input.value)) {
    console.log("msg success")
  }
}
