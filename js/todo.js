const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function paintTodo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  console.log(li);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintTodo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
