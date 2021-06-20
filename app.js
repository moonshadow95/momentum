const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');
  const uesername = loginInput.value;
  greeting.innerHTML = uesername;
  greeting.classList.remove('hidden');
}

loginForm.addEventListener('submit', onLoginSubmit);
