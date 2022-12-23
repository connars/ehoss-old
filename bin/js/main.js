let cross = document.querySelector(".mobile-cross")
let menu = document.querySelector(".header__menu-btn")
let navbar = document.querySelector(".header__navbar")

menu.addEventListener("click" , ()=>{
    if (navbar.style.transform == "translateY(100%)") {
        navbar.style.transform = "translateY(0%)"
        document.querySelector("#pp-nav").style.opacity = 0

    }else{
        navbar.style.transform = "translateY(100%)"
        document.querySelector("#pp-nav").style.opacity = 1

    }
})

cross.addEventListener("click" , ()=>{
    if (navbar.style.transform == "translateY(100%)") {
        document.querySelector("#pp-nav").style.opacity = 0
        navbar.style.transform = "translateY(0%)"
    }else{
        document.querySelector("#pp-nav").style.opacity = 1
        navbar.style.transform = "translateY(100%)"
    }
})