(function () {
  'use strict'
  var counterEl = document.getElementById('counter')
  var incrementEl = document.getElementById('increment')
  incrementEl.addEventListener('click', function () {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML) + 1).toString()
  })
  // This is a nonsense line
})()
