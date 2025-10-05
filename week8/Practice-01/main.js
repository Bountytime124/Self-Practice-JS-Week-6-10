const buttons = document.getElementsByTagName("button")
const box = document.getElementById('box')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        //write code here.......
        console.log(button.textContent);
        if(button.textContent === "เพิ่มเส้นขอบ"){
            box.classList.add("bordered")
        }
        else if (button.textContent === "ลบเส้นขอบ") {
            box.classList.remove("bordered")
        } 
        else {
            box.classList.toggle("bordered")
        }
    })
})

