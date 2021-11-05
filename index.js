const secondaryHeader = document.querySelector('#secondary-header')
const mainHeader = document.querySelector('#main-header')
const logo = mainHeader.querySelector('.logo')
const body = document.querySelector('#body')

if(body.offsetWidth >= 1024){
    logo.classList.add('d-none')
    logo.classList.remove('opacity-show')
    logo.classList.remove('opacity-zero')
}
window.addEventListener('scroll', function () {
    if (body.offsetWidth >= 1024) {
        if (this.scrollY >= 250) {
            secondaryHeader.classList.add('zero-height')
            logo.classList.add('opacity-show')
            logo.classList.remove('opacity-zero')
            logo.classList.remove('d-none')
        } else if (this.scrollY < 250) {
            logo.classList.add('d-none')
            secondaryHeader.classList.remove('zero-height')
            logo.classList.add('opacity-zero')
            logo.classList.remove('opacity-show')
        }
    } 
})


window.onresize = function(event) {
    console.log('這到底是三小')
    if(window.body.offsetWidth <= 1024){
        logo.classList.add('d-none')
        logo.classList.remove('opacity-show')
        logo.classList.remove('opacity-zero')
    }
}
