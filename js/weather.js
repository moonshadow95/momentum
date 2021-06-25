function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const API_KEY = '53bf65d947502bb89f2eee975ed950cb';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather');
      const weatherIcon = document.querySelector('#weather-icon');
      const citySpan = weather.querySelector('span');
      const temp = document.querySelector('#temp span');
      const weatherIcons = {
        01: 'far fa-sun',
        02: 'fas fa-cloud-sun',
        03: 'fas fa-cloud',
        04: 'fas fa-cloud-meatball',
        09: 'fas fa-cloud-sun-rain',
        10: 'fas fa-cloud-showers-heavy',
        11: 'fas fa-poo-storm',
        13: 'far fa-snowflake',
        50: 'fas fa-smog',
      };
      const tempValue = `${data.main.temp.toFixed(1)}˚`;
      weatherIcon.classList.add(
        weatherIcons[parseInt(data.weather[0].icon.substr(0, 2))].split(' ')[0],
        weatherIcons[parseInt(data.weather[0].icon.substr(0, 2))].split(' ')[1]
      );
      citySpan.innerText = data.name;
      temp.innerText = tempValue;
    });
}
function onGeoError() {
  alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
