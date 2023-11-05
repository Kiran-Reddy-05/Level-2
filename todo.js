let todoList = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = {
            text: todoText,
            date: new Date(),
        };
        todoList.push(todoItem);
        todoInput.value = "";
        displayTodos();
    }
}

function displayTodos() {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = "";
    
    for (let i = 0; i < todoList.length; i++) {
        const todoItem = todoList[i];
        const listItem = document.createElement("li");
        
        const serialNumber = document.createElement("span");
        serialNumber.className = "serial";
        serialNumber.textContent = i + 1;
        
        const taskText = document.createTextNode(todoItem.text);
        
        const dateTime = document.createElement("span");
        dateTime.className = "date-time";
        dateTime.textContent = todoItem.date.toLocaleString();
        
        listItem.appendChild(serialNumber);
        listItem.appendChild(taskText);
        listItem.appendChild(dateTime);
        
        todoListElement.appendChild(listItem);
    }
}

displayTodos();
