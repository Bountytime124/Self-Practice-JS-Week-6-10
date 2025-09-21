// Functional Progamming
// Use Ai for practice
// Square numbers
// เขียนฟังก์ชันที่รับ array ของตัวเลข แล้วคืนค่า array ของเลขยกกำลังสอง โดยใช้ .map()
function squareNumbers(arr) {
  return arr.map(x => x * x);
}
console.log(squareNumbers([1, 2, 3, 4, 5]));
// Filter even numbers
// เขียนฟังก์ชันที่รับ array ของตัวเลข แล้วคืนค่าเฉพาะเลขคู่ โดยใช้ .filter()
function filterEvenNumbers(arr) {
  return arr.filter(x => x % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Count words
// เขียนฟังก์ชันนับจำนวนคำในประโยค โดยใช้ .split() + .reduce()
// เช่น "I love coding in JS" → { I:1, love:1, coding:1, in:1, JS:1 }
function countWords(sentence) {
  return sentence
    .split(" ") 
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1; 
      return acc;
    }, {});
}
console.log(countWords("I love coding in JS I love JS"));
// Remove duplicates
// เขียนฟังก์ชันที่ลบค่า duplicate ใน array โดยใช้ .filter() + .indexOf()
// เช่น [1,2,2,3,3,4] → [1,2,3,4]
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5]));

