var todoList = [];

const addTodo = (e) => {
    e.preventDefault();

    const inputText = e.target[0].value

    if (inputText.length < 3) {
        return alert("your inputted text must be at least 3 characters");
    }

    todoList.unshift({ title: inputText.trim() })

    e.target[0].value = "";

    return getTodos()

}

const getTodos = () => {
    const todoArea = document.getElementById("todo-area");

    if (todoList.length === 0) {
        return todoArea.innerHTML = `<div class="no-todo">No Recent Activity</div>`
    }

    const date = new Date()

    todoArea.innerHTML = "";
    todoList.forEach((item, index) => {
        return todoArea.innerHTML += `<div class="each-div">
        <div class="list-title">
        ${item.title}
        <p class="date">${date.toISOString()}</p>
        </div>
        <button onclick="deleteTodo(${index})" class="close-button">&times;</button>
        </div>`

    })

}

const deleteTodo = (id) => {
    todoList.splice(id, 1)

    return getTodos()
}

document.addEventListener("DOMContentLoaded", getTodos)