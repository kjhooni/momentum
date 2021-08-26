const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");
let toDos = [];
function sayHello(a){
    console.log(`${a}`)
}
function deleteToDo(event){
    const li = event.target.parentNode;
    li.remove();
    toDos = toDos.filter((element) => element.id !== parseInt(li.id));
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function paintToDo(toDosObj){
    const li = document.createElement("li");
    li.id = toDosObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerHTML="X";
    span.innerHTML=toDosObj.text;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
    btn.addEventListener("click",deleteToDo);
    localStorage.setItem("todos",JSON.stringify(toDos))
    
}

function handleToDoForm(event){

    event.preventDefault();
    const toDoValue = toDoInput.value;
    const toDosObj = {
        text: toDoValue,
        id: Date.now()
    };
    toDos.push(toDosObj);
    paintToDo(toDosObj);
    toDoInput.value="";
}

if(localStorage.getItem("todos") == null){
    toDoForm.addEventListener("submit",handleToDoForm);     
}else{
    toDoForm.addEventListener("submit",handleToDoForm);
    const savedToDos = localStorage.getItem("todos");
    
    toDos = savedToDos;
    toDos = JSON.parse(toDos);
   
    toDos.forEach(paintToDo);   
}
// toDoForm.addEventListener("submit",handleToDoForm);