import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

// checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

const todo = {
    task: ''
};

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newTask = new FormData(todoForm);

    todo.task = newTask.get('todo');

    console.log(todo.task);

    todoForm.reset();

    displayTodos();
    // on submit, create a todo, reset the form, and display the todos
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

   

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';

    const todoList = renderTodo(todo);
    console.log(todoList);

    todosEl.append(todoList);
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
