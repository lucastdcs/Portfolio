const box = document.querySelector('.blured-box')
const img = document.querySelector('.service-icon')
const txt = document.querySelector('.service-text')

box.onmouseover = function() {
    box.classList.add('expanded')
    img.classList.add('img-animation')
    txt.classList.add('visible')

}

box.onmouseout = function() {
    box.classList.remove('expanded')
    img.classList.remove('img-animation')
    txt.classList.remove('visible')
}

//------------------------------------------------------------//
const boxTwo = document.querySelector('.blured-box.two')
const imgTwo = document.querySelector('.service-icon.scnd')
const txtTwo = document.querySelector('.service-text.second')

boxTwo.onmouseover = function() {
    boxTwo.classList.add('expanded')
    imgTwo.classList.add('img-animation')
    txtTwo.classList.add('visible')
}

boxTwo.onmouseout = function() {
    boxTwo.classList.remove('expanded')
    imgTwo.classList.remove('img-animation')
    txtTwo.classList.remove('visible')
}