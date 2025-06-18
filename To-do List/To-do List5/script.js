const addButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.todo-input');
const todoLists = document.querySelector('#todo-ListsId');

const addTodo = () => {
    const taskText = todoInput.value.trim();
    if (taskText == '') {
        alert ("Please input the task");
        return;
    }
    
// สร้าง div สำหรับรายการใหม่
const todoItem = document.createElement('div');
todoItem.classList.add('todo-item');

// สร้างข้อความงาน
const taskSpan = document.createElement('span');
taskSpan.textContent = taskText;

// สร้างปุ่มลบ
const deleteButton = document.createElement('button');
deleteButton.textContent = "delete";
deleteButton.classList.add('delete-btn');

// เมื่อกดปุ่มลบ ให้ลบรายการนี้
deleteButton.addEventListener('click', () => {
    todoLists.removeChild(todoItem);
});

// ใส่ข้อความและปุ่มลบเข้าไปใน div รายการ
todoItem.appendChild(taskSpan);
todoItem.appendChild(deleteButton);

// ใส่รายการใหม่เข้าไปใน todoLists
todoLists.appendChild(todoItem);

// ล้าง textarea หลังเพิ่มรายการ
  todoInput.value = '';
}

addButton.addEventListener('click', addTodo);

