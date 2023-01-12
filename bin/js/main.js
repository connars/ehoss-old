let cross = document.querySelector(".mobile-cross")
let menu = document.querySelector(".header__menu-btn")
let navbar = document.querySelector(".header__navbar")

setTimeout(()=>{
    document.querySelector(".loader").style.display = 'none'
}, 2000)

menu.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
    document.querySelector("#pp-nav").style.opacity = 0
})

cross.addEventListener("click", () => {
    if (navbar.style.transform == "translateX(100%)") {
        document.querySelector("#pp-nav").style.opacity = 0
        navbar.style.transform = "translateX(0%)"
    } else {
        document.querySelector("#pp-nav").style.opacity = 1
        navbar.style.transform = "translateX(100%)"
    }
})

if (window.innerWidth <= 900) {
    let blocks = document.querySelectorAll(".privace__block")
    let blocks2 = document.querySelectorAll(".privace__column-wrapper")
    let blocks3 = document.querySelectorAll(".wall__item")
    let blocks4 = document.querySelectorAll(".team__item")
    let footerAccardion = document.querySelector(".accardion-wrapper")

    footerAccardion.style.display = "block"
    for (const item of blocks) {
        item.classList.add("swiper-slide")
    }
    for (const item of blocks2) {
        item.classList.add("swiper-slide")
    }

    for (const item of blocks3) {
        item.classList.add("swiper-slide")
    }

    for (const item of blocks4) {
        item.classList.add("swiper-slide")
    }
}

let play = document.querySelector(".aboutV__play")

play.addEventListener("click" , ()=>{
    video.play()
})

video.addEventListener("play", () => {
    let play = document.querySelector(".aboutV__play")
    play.style.display = "none"
})

video.addEventListener("pause", () => {
    let play = document.querySelector(".aboutV__play")
    play.style.display = "block"
})
