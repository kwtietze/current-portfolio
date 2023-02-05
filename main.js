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

let cursor = document.querySelector('.cursor')
// let outerCursor = document.querySelector('.outer-cursor')

document.addEventListener('mousemove', moveCursor)

function moveCursor(event) {
    let x = event.clientX
    let y = event.clientY


    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
    // outerCursor.style.left = `${x}px`
    // outerCursor.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll('a, button'))

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('show')
        // outerCursor.classList.add('hide')
    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('show')
        // outerCursor.classList.remove('hide')
    })
})

// GSAP animations

gsap.registerPlugin(ScrollTrigger)


gsap.to('.about-scroll-col', {
    scrollTrigger: {
        trigger: '.about-scroll-container',
        toggleActions: 'restart pause pause reverse',
        start: 'bottom bottom',
        scrub: true,
        pin: true,
        end: "+=2000"
    },
    x: -(window.innerWidth),
    ease: 'none'
})


gsap.to('#about', {
    scrollTrigger: {
        trigger: '#about',
        toggleActions: 'restart pause pause reverse',
        start: 'top bottom',
        end: 'top top',
        scrub: true
    },
    background: '#201D1E',
    ease: 'none'
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
