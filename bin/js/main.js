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
    let blocks2 = document.querySelectorAll(".privace__column-wrapper")
    let blocks3 = document.querySelectorAll(".wall__item")
    let blocks4 = document.querySelectorAll(".team__item")

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

const player = document.getElementById("player"),
    video = document.getElementById("video"),
    controls = document.getElementById("controls"),
    play = document.getElementById("switch"),
    time = document.getElementById("time"),
    volume_bar = document.getElementById("volume-progress-bar"),
    volume = document.getElementById("volume-bar"),
    progress_bar = document.getElementById("progress-bar"),
    current_bar = document.getElementById("current-bar"),
    buffer_bar = document.getElementById("buffer-bar"),
    gettime = document.getElementById("gettime");

video.load();
setTimeout(() => {
    next();
    controls.style.opacity = "0";
    volume.style.width = `100%`;
}, 2000);

function next() {
    video.paused
        ? Math.floor(video.currentTime) > Math.floor(video.duration)
            ? ((video.currentTime = 0), next())
            : (video.play(), (play.innerHTML = '<img src="./../bin/img/play.svg">'))
        : (video.pause(), (play.innerHTML = '<img src="./../bin/img/stop.svg">'));
}

video.ontimeupdate = () => {
    buffered();
    current_bar.style.width = `${(video.currentTime / video.duration) * 97.5}%`;
    time.innerHTML = `${hhmmss(Math.floor(video.currentTime))} / ${hhmmss(
        Math.floor(video.duration)
    )}`;
};

progress_bar.addEventListener("click", (e) => {
    video.paused
        ? ((video.currentTime =
            (e.offsetX / progress_bar.clientWidth) * video.duration),
            (current_bar.style.width = `${(e.offsetX / progress_bar.clientWidth) * 97.5
                }%`),
            (time.innerHTML = `${hhmmss(Math.floor(video.currentTime))} / ${hhmmss(
                Math.floor(video.duration)
            )}`),
            setTimeout(() => {
                next();
            }, 300),
            buffered())
        : (next(),
            (video.currentTime =
                (e.offsetX / progress_bar.clientWidth) * video.duration),
            (current_bar.style.width = `${(e.offsetX / progress_bar.clientWidth) * 97.5
                }%`),
            (time.innerHTML = `${hhmmss(Math.floor(video.currentTime))} / ${hhmmss(
                Math.floor(video.duration)
            )}`),
            setTimeout(() => {
                next();
            }, 300),
            buffered());
});

progress_bar.onmousemove = (e) => {
    let pbX = progress_bar.clientWidth;
    let gtX = gettime.clientWidth;
    let elX = e.offsetX;
    gettime.innerHTML = hhmmss(
        Math.floor((elX / pbX) * video.duration) < 0
            ? 0
            : Math.floor((elX / pbX) * video.duration)
    );
    gettime.style.left =
        elX > gtX
            ? elX < pbX - gtX
                ? `${elX}px`
                : `${pbX - (gtX / 2 + 10)}px`
            : `${gtX / 2}px`;
};

volume_bar.addEventListener("click", (e) => {
    video.volume = (e.offsetX / volume_bar.clientWidth) * 1;
    volume.style.width = `${(e.offsetX / volume_bar.clientWidth) * 100}%`;
});

controls.onmouseover = () => {
    controls.style.opacity = "1";
};

controls.onmouseout = () => {
    controls.style.opacity = "0";
};

progress_bar.onmouseover = () => {
    gettime.style.opacity = "1";
};

progress_bar.onmouseout = () => {
    gettime.style.opacity = "0";
};

player.onmousemove = () => { };

function hhmmss(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    let hours = Math.floor(minutes / 60);
    return ((minutes %= 60), 3600 <= video.duration)
        ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
        : 3600 > video.duration
            ? `${pad(minutes)}:${pad(seconds)}`
            : void 0;
}

function pad(a) {
    return ("0" + a).slice(-2);
}

function buffered() {
    for (let index = 0; index < video.buffered.length; index++)
        video.buffered.start(video.buffered.length - 1 - index) < video.currentTime
            ? (buffer_bar.style.width = `${(video.buffered.end(video.buffered.length - 1 - index) /
                    video.duration) *
                97.5
                }%`)
            : false;
}

function px2percent(pixels, elementX) {
    const screen = elementX ? elementX : window.screen.width;
    return 100 - ((screen - pixels) / screen) * 100;
}
