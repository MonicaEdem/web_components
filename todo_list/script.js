const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo){
    let todoText = input.value
    
    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoLi = document.createElement('li')
        if(todo && todo.completed){
            todoLi.classList.add('completed')
        }

        todoLi.innerText = todoText

        todoLi.addEventListener('click', () => {todoLi.classList.toggle('completed')
            updateLS()
        })

        todoLi.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoLi.remove()
            updateLS()
        })

        ul.appendChild(todoLi)

        input.value = ''

        updateLS()
    }

   
}

function updateLS(){
    todoEl = document.querySelectorAll('li')

    const todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}
