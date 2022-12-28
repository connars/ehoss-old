let cross = document.querySelector(".mobile-cross")
let menu = document.querySelector(".header__menu-btn")
let navbar = document.querySelector(".header__navbar")


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

if (window.outerWidth <= 900) {
    document.querySelector("footer").classList.add("pp-scrollable")
    wall.classList.add("pp-scrollable")
    let blocks = document.querySelectorAll(".privace__block")

    for (const item of blocks) {
        item.classList.add("swiper-slide")
    }
}