let cross = document.querySelector(".mobile-cross")
let menu = document.querySelector(".header__menu-btn")
let navbar = document.querySelector(".header__navbar")

menu.addEventListener("click" , ()=>{
    if (navbar.style.diplay == "none") {
        navbar.style.display = "flex"
    }else{
        navbar.style.display = "none"
    }
})

cross.addEventListener("click" , ()=>{
    if (navbar.style.diplay == "none") {
        navbar.style.display = "flex"
    }else{
        navbar.style.display = "none"
    }
})