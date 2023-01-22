// switch header color by section

const root = document.querySelector(':root')

window.onscroll = function() {
    const loaderHeight = document.getElementById('loader').offsetHeight
    const aboutHeight = document.getElementById('about').offsetHeight
    const workHeight = document.getElementById('work').offsetHeight
    const contactHeight = document.getElementById('contact').offsetHeight
    if (window.scrollY > loaderHeight && window.scrollY < loaderHeight+aboutHeight+workHeight) {
        root.style.setProperty('--header-color', '#D36135')
    } else {
        root.style.setProperty('--header-color', '#282B28')
    }
}

// show menu

const menu = document.getElementById('menu')
const menuItem = document.getElementsByClassName('menu-list-item')


function showMenu() {
    menu.style.opacity = '1'
    menu.style.pointerEvents = 'auto'
}

function hideMenu() {
    menu.style.opacity = '0'
    menu.style.pointerEvents = 'none'
}


// cutsom cursor

let innerCursor = document.querySelector('.inner-cursor')
let outerCursor = document.querySelector('.outer-cursor')

document.addEventListener('mousemove', moveCursor)

function moveCursor(event) {
    let x = event.clientX
    let y = event.clientY

    console.log(x, y)

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll('a, button, input'))

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add('grow')
    })
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow')
    })
})