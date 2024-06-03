var todoList = [];

const addTodo = (e) => {
    e.preventDefault()

    const inputText = e.target[0].value

    if (inputText.length < 3) {
        return alert("Your inputted text must at least 3 characters");
    }

    todoList.unshift({ title: inputText.trim() })

    // empty the input field
    e.target[0].value = ""

    return getTodos()
}

const getTodos = () => {
    const todoArea = document.getElementById("todo-area");

    if (todoList.length === 0) {
        document.getElementById("clear-button").style.display = "none";
        return todoArea.innerHTML = `<div class="no-todo">No Recent Activity</div>`;
    }

    const date = new Date()

    document.getElementById("clear-button").style.display = "block";
    todoArea.innerHTML = ""
    todoList.forEach((item, key) => {
        return todoArea.innerHTML += `<div class="each-div">
        <div class="list-title">
        ${item.title}
        <p class="date">${date.toISOString()}</p>
        </div><button class="close-button" onclick="deleteTodo(${key})">&times;</button>
    </div>`
    })
}

const deleteTodo = (id) => {
    todoList.splice(id, 1)

    return getTodos()
}

const clearAllTodos = () => {
    todoList = []

    return getTodos()
}

document.addEventListener("DOMContentLoaded", getTodos)