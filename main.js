// switch header color by section

const root = document.querySelector(':root')

window.onscroll = function() {
    const loaderHeight = document.getElementById('loader').offsetHeight
    const aboutHeight = document.getElementById('about').offsetHeight
    const workHeight = document.getElementById('work').offsetHeight
    const contactHeight = document.getElementById('contact').offsetHeight
    if (window.scrollY > loaderHeight && window.scrollY < loaderHeight+aboutHeight+workHeight) {
        root.style.setProperty('--header-color', '#EFEAE8')
    } else {
        root.style.setProperty('--header-color', '#201D1E')
    }
}

// show menu

const menu = document.getElementById('menu')
const menuItem = document.getElementsByClassName('menu-list-item')


function showMenu() {
    menu.style.opacity = '1'
    menu.style.pointerEvents = 'auto'

    gsap.to('.menu-list-item', {
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        delay: 0.5
    })
}

function hideMenu() {
    menu.style.opacity = '0'
    menu.style.pointerEvents = 'none'
    menuItem.style.opacity = '0'

}


// custom cursor

let innerCursor = document.querySelector('.inner-cursor')
let outerCursor = document.querySelector('.outer-cursor')

document.addEventListener('mousemove', moveCursor)

function moveCursor(event) {
    let x = event.clientX
    let y = event.clientY


    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll('a, button, input'))

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add('grow')
        outerCursor.classList.add('hide')
    })
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow')
        outerCursor.classList.remove('hide')
    })
})

// GSAP animations

gsap.registerPlugin(ScrollTrigger)

// gsap.to('.loader-circle-text', {
//     scrollTrigger: {
//         trigger: '.loader-circle-text-container',
//         toggleActions: 'restart pause pause reverse',
//         start: 'center center',
//         end: 'bottom top',
//         scrub: true
//     },
//     width: 2000,
//     duration: 1
// })

gsap.from('h2', {
    scrollTrigger: {
        trigger: 'h2',
        toggleActions: 'restart pause pause reverse',
        start: 'top center',
        end: 'center center',
        scrub: true
    },
    x: -100,
    opacity: 0,
})

gsap.to('#about', {
    scrollTrigger: {
        trigger: '#about',
        toggleActions: 'restart pause pause reverse',
        start: 'top top',
        end: '20% top',
    },
    duration: 0.1,
    background: '#201D1E'
})

gsap.to('.work-list-item', {
    scrollTrigger: {
        trigger: '.work-list',
        toggleActions: 'restart reset restart reset',
        start: 'top center'
    },
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    delay: 0.5
})
