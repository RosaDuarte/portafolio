wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
)
wow.init();

const menu = document.querySelector(".navbar-menu");
const burger = document.querySelector(".navbar-burger");
const items = document.querySelector(".navbar-end");

function activarMenu (event){
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    event.preventDefault();
};

function desactivarMenu(){
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");   
};

burger.addEventListener("click", activarMenu, false); 
items.addEventListener("click", desactivarMenu);

