/* 
function showTodo(todo: { title: string, text: string }): void {
    console.log(todo.title + ': ' + todo.text)
}

let todo = { title: 'Trash', text: 'Take out trash' };

showTodo(todo);

*/

interface Todo {
    title: string,
    text: string
}

function showTodo(todo: Todo) {
    console.log(todo.title + ': ' + todo.text)
}


let todo = { title: 'Trash', text: 'Take out trash' };

showTodo(todo);

