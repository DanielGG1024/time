const secondaryHeader = document.querySelector('#secondary-header')
const mainHeader = document.querySelector('#main-header')
const logo = mainHeader.querySelector('.logo')
const body = document.querySelector('#body')

window.addEventListener('scroll', function () {
    if(body.offsetWidth > 1024){
        if (this.scrollY >= 250) {
            secondaryHeader.classList.add('zero')
            logo.style.opacity = '1';
        } else if (this.scrollY < 250) {
            secondaryHeader.classList.remove('zero')
            logo.style.opacity = '0';
        }
    }
})