import config from './config';

window.console.log('index loaded');
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
counterEl.innerHTML = config.start.toString();
incrementEl.addEventListener('click', () => {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + config.increment).toString();
});
