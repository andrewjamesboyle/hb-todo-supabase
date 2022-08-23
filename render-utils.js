export function renderTodo(todo, handleComplete) {

    const todoListEl = document.createElement('div');
    todoListEl.classList.add('todo');
    const todoListTask = document.createElement('p');
        // create a div and a p tag
        // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
        
        // add the 'todo' css class no matter what
    todoListTask.textContent = `${todo.todo}`;

    todoListEl.addEventListener('click', () => {
        handleComplete(todo);
    });

    if (todo.complete) {
        todoListEl.classList.add('complete');
    } else {
        todoListEl.classList.add('incomplete');
    }

    todoListEl.append(todoListTask);
        
    return todoListEl;

}