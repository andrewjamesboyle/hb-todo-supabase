export function renderTodo(todo, handleComplete) {

        const todoListEl = document.createElement('div');
        const todoListTask = document.createElement('p');
        // create a div and a p tag
        // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
        
        // add the 'todo' css class no matter what
        todoListTask.textContent = `${todo.todo}`;
        
        todoListEl.append(todoListTask);
        
        return todoListEl;
    
    // put the todo's text into the p tag
    // FOR (LET TASK OF TASKS)
        // CREATEelements
    // append stuff
        // createElement('button')
        // button.textContent = 'complete'
    //  addEventListener CLICK  {
        // call handleComplete function
// }
    // return the div
// }
};