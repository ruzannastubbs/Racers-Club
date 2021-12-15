let menuOpenIcon = document.getElementById('mobile-menu-icon');
let menuCloseIcon = document.getElementById('mobile-close-icon');
let mobileMenu = document.getElementById('mobile-menu');
let navbarMobile = document.getElementById('navbar-mobile');
let main =document.getElementById('main');
let mobileMenuIconLogoWrapper = document.getElementById('mobile-menu-icon-logo-wrapper');

const openMobileMenu = () => {
    menuOpenIcon.style.display = 'none';
    mobileMenu.style.display ='block'; 
    navbarMobile.style.display ='block';
}
const closeMobileMenu = () => {
    mobileMenu.style.display = 'none';
    menuOpenIcon.style.display = 'block';


}
menuOpenIcon.addEventListener('click', openMobileMenu);

menuCloseIcon.addEventListener('click', closeMobileMenu);

main.addEventListener('click', closeMobileMenu);

menuOpenIcon.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        openMobileMenu();

    }

});

menuCloseIcon.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        closeMobileMenu();

    }

});

main.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        closeMobileMenu();

    }

});
window.addEventListener('resize', myFunction);
function myFunction(){
    if(window.innerWidth == '853'){
        mobileMenu.style.display = 'block';
        menuOpenIcon.style.display = 'block';
    }
    else{
        mobileMenu.style.display = 'none';
        menuOpenIcon.style.display = 'block';

    }
}
// cars section

let ourCarsWrapper = document.getElementById('our-cars-wrapper');
let ourCarsDivTwo = document.getElementById('our-cars-div-two');
let more = document.getElementById('more');
let less = document.getElementById('less');
let moreWrapper = document.getElementById('more-wrapper');
let lessWrapper = document.getElementById('less-wrapper');


const openCarsDiv = () => {
    ourCarsDivTwo.style.display = 'block';
    ourCarsDivTwo.style.display = 'flex';
    more.style.display = 'none';
    moreWrapper.style.display = 'none';
    less.style.display = 'block';
    less.style.display = 'block';
    
}
const closeCarsDiv = () => {
    ourCarsDivTwo.style.display = 'none';
    more.style.display = 'block';
    moreWrapper.style.display = 'block';
    less.style.display = 'none';
    lessWrapper.style.display = 'none';
    
}
more.addEventListener('click', openCarsDiv);
less.addEventListener('click', closeCarsDiv);