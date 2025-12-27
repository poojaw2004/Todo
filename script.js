let todos = [];

function createTodo(event) {
    event.preventDefault();

    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter the Todo first");
        return;
    }

    todos.push(taskText);
    updateDisplay();
    input.value = "";
}

function updateDisplay() {
    const list = document.getElementById('list');
    list.innerHTML = "";

    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        li.onclick = function () {
            li.classList.toggle("completed");
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function (event) {
            event.stopPropagation();
            todos.splice(index, 1);
            updateDisplay();
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
