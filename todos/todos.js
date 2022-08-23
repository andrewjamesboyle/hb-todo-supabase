import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');
    
    await createTodo(todo);

    todoForm.reset();

    displayTodos();
   
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

   

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';

    const todos = await getTodos();

    for (let todo of todos) {
        const todoList = renderTodo(todo);
        todosEl.append(todoList);
    }
    // display the list of todos, 
          // call render function, pass in state and complete handler function! renderTask(task, handleComplete)

          // append to .todos
}

// add page load function
    // fetch the todos and store in state
    // call displayTodos

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
