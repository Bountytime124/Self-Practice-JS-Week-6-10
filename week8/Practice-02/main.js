const box = document.getElementById("box")
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click"), () => {
    //write code here....
    const color = button.dataset.color
    box.style.background = color
    console.log(`Change to color ${color}`);
  }})