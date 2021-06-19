const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

function onLoginSubmit(event) {
  event.preventDefault();
  const uesername = loginInput.value;
}

loginForm.addEventListener('submit', onLoginSubmit);
