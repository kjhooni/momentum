const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}
function deleteTodo(event){
    const li = event.target.parentNode;
    li.remove();
}

function paintTodo(toDoValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "X";
    span.innerHTML = toDoValue;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",deleteTodo);    

}

function handleToDoForm(event){
    event.preventDefault();
    const toDoValue = toDoInput.value;
    toDos.push(toDoValue);
    paintTodo(toDoValue);
    saveToDos();
    toDoInput.value="";
}

toDoForm.addEventListener("submit",handleToDoForm);

const savedTodos = localStorage.getItem("todos");
const parsedTodos = JSON.parse(savedTodos);
if(savedTodos !==null){
    toDos = parsedTodos;
    parsedTodos.forEach(item => paintTodo(item));
}
