const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(nameCity.value === '' || nameCountry.value === ''){
    showError('Ambos campos son obligatorios...');
  }

  // console.log(nameCity.value);
  // console.log(nameCountry.value);
})

function showError(message){
  console.log(message);
}