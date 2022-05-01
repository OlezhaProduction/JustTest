const mainMenu = document.querySelector(".burger_menu");

const burgerClicks = () => {
    mainMenu.classList.toggle("active");
    
} 

mainMenu.addEventListener("click", burgerClicks());