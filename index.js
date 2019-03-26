const dodger = document.getElementById('dodger')

function onKeyDown(event) {
  if (event.keyCode === 37) {
    // how do we actually move this left  
    const currentPosition = parseInt(dodger.style.left)
    if (currentPosition - 5 >= 0) {
    dodger.style.left = currentPosition - 5 + 'px'
    }  
    } else if (event.keyCode === 39) {
    moveDodgerRight()
  }
}

function moveDodgerRight() {
const currentPosition = parseInt(dodger.style.left)
     if (currentPosition + 5 <= 360)
    dodger.style.left = currentPosition + 5 + 'px'
}
// 2 - Add the event listener
document.addEventListener('keydown', onKeyDown)