const titleToChange = document.getElementById('title-to-change');
const changeTextBtn = document.getElementById('change-text-btn');

const dynamicList = document.getElementById('dynamic-list');
const addItemBtn = document.getElementById('add-item-btn');

const boxToToggle = document.getElementById('box-to-toggle');

const userInput = document.getElementById('user-input');
const outputArea = document.getElementById('output-area');
const submitBtn = document.getElementById('submit-btn');
const deleteBtn = document.getElementById('delete-btn');


// -----------------------------------------------------
// โจทย์ข้อ 1: การเปลี่ยนข้อความ
// -----------------------------------------------------
changeTextBtn.addEventListener('click', () => {
    titleToChange.textContent = "DOM Challenge Completed!";
});


// -----------------------------------------------------
// โจทย์ข้อ 2: การสร้างและเพิ่ม Element
// -----------------------------------------------------
addItemBtn.addEventListener('click', () => {
    // 1. สร้าง Element ใหม่
    const newItem = document.createElement('li');
    
    // 2. กำหนดข้อความ
    newItem.textContent = "New Task Added! " + new Date().toLocaleTimeString(); 
    
    // 3. นำไปเพิ่มใน Element แม่
    dynamicList.appendChild(newItem);
});


// -----------------------------------------------------
// โจทย์ข้อ 3: การจัดการ Class
// -----------------------------------------------------
boxToToggle.addEventListener('click', () => {
    boxToToggle.classList.toggle('highlight');
});


// -----------------------------------------------------
// โจทย์ข้อ 4: การอ่านค่า Input และแสดงผล
// -----------------------------------------------------
submitBtn.addEventListener('click', () => {
    const inputValue = userInput.value;
    
    if (inputValue.trim() === '') {
        alert('Please enter some text!');
        return;
    }
    
    // สร้าง Element ใหม่เพื่อแสดงผล (ดีกว่าการใช้ innerHTML ในการต่อ String)
    const newOutputItem = document.createElement('p');
    newOutputItem.textContent = "User entered: " + inputValue;
    newOutputItem.classList.add('output-item'); // เพิ่ม class เพื่อให้ลบได้ง่ายขึ้นในข้อ 5
    
    outputArea.appendChild(newOutputItem);
    
    // ล้างค่าในช่อง input
    userInput.value = '';
});


// -----------------------------------------------------
// โจทย์ข้อ 5: การลบ Element
// -----------------------------------------------------
deleteBtn.addEventListener('click', () => {
    // หา Element ลูกตัวสุดท้ายที่เป็น p (ซึ่งเราเพิ่ม class 'output-item' ไว้ในข้อ 4)
    const lastItem = outputArea.querySelector('.output-item:last-child');
    
    if (lastItem) {
        // ลบ Element ลูกตัวสุดท้ายออกจาก Element แม่
        outputArea.removeChild(lastItem);
    } else {
        alert('No more dynamic items to delete!');
    }
});
