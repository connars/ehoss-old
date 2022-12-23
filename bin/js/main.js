let cross = document.querySelector(".mobile-cross")
let menu = document.querySelector(".header__menu-btn")
let navbar = document.querySelector(".header__navbar")

menu.addEventListener("click" , ()=>{
    if (navbar.style.diplay == "none") {
        navbar.style.display = "none"
        document.querySelector("#pp-nav").style.opacity = 1
    }else{
        navbar.style.display = "flex"
        document.querySelector("#pp-nav").style.opacity = 0
    }
})

cross.addEventListener("click" , ()=>{
    if (navbar.style.diplay == "none") {
        document.querySelector("#pp-nav").style.opacity = 0
        navbar.style.display = "flex"
    }else{
        document.querySelector("#pp-nav").style.opacity = 1
        navbar.style.display = "none"
    }
})