const box = document.querySelector('.blured-box')
const img = document.querySelector('.service-icon')

box.onmouseover = function() {
    box.classList.add('expanded')
    img.classList.add('img-animation')

}

box.onmouseout = function() {
    box.classList.remove('expanded')
    img.classList.remove('img-animation')
}

//------------------------------------------------------------//
const boxTwo = document.querySelector('.blured-box.two')
const imgTwo = document.querySelector('.service-icon.scnd')

boxTwo.onmouseover = function() {
    boxTwo.classList.add('expanded')
    imgTwo.classList.add('img-animation')
}

boxTwo.onmouseout = function() {
    boxTwo.classList.remove('expanded')
    imgTwo.classList.remove('img-animation')
}