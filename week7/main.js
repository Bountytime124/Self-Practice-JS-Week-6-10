let el = document.getElementById("drink")
const allDrinks = el.children //child element
Array.from(allDrinks).forEach((drink) => console.log(drink))

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)

console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)
 