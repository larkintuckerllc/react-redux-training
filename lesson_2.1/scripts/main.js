'use strict'
window.console.log('main loaded')
requirejs(['config'], function (config) {
  window.console.log('my code ran')
  var counterEl = document.getElementById('counter')
  var incrementEl = document.getElementById('increment')
  counterEl.innerHTML = config.start.toString()
  incrementEl.addEventListener('click', function () {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML) + config.increment).toString()
  })
})
