// Function to get rid of preloader

window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});



// toggle nav links

const navigation = () => {
    
    const links = document.querySelector(".links");
    const burger = document.querySelector(".burger");

burger.addEventListener('click', () => {
    links.classList.toggle('show-links')
    burger.classList.toggle('toggle')
});
}

navigation();

smoothScroll.init();