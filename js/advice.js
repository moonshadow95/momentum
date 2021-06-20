const advice = document.querySelector('#advice span');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://api.adviceslip.com/advice', requestOptions)
  .then((response) => response.json())
  .then((result) => (advice.innerText = result.slip.advice));
