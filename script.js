var button = document.getElementById('change')
var mode = window.localStorage.getItem('value')
var visit = window.localStorage.getItem('times')
if (visit === null) {
  visit = 0
  window.localStorage.setItem('times', visit)
}
var visitInt = parseInt(visit)
visitInt += 1
visit = visitInt
window.localStorage.setItem('times', visit)
document.write(visit)
if (mode === null) {
  mode = 'true'
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'
} else if (mode === 'true') {
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'
} else {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
}

button.addEventListener('click', function () {
  if (mode === 'false') {
    mode = 'true'
    window.localStorage.setItem('value', mode)
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    mode = 'false'
    window.localStorage.setItem('value', mode)
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
})
