let menuOpenIcon = document.getElementById('mobile-menu-icon');
let menuCloseIcon = document.getElementById('mobile-close-icon');
let mobileMenu = document.getElementById('mobile-menu');
let navbarMobile = document.getElementById('navbar-mobile');
let mainSection = document.getElementById('main-section');
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
    document.body.scrollTop = 530;  // For Safari
    document.documentElement.scrollTop = 530; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
}

more.addEventListener('click', openCarsDiv);
less.addEventListener('click', closeCarsDiv);

// popover login window

let formContent = document.getElementById('form-content');
let logInBtn = document.getElementsByClassName('logIn');
let formCloseIcon = document.getElementById('form-close-icon');


const openLogInForm = () => {
    formContent.style.display = 'block'; 
 }

for (let i = 0; i < logInBtn.length; i++) {
    let loginButton = logInBtn[i];
    loginButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            openLogInForm();
        }
    });
    
loginButton.addEventListener('click', openLogInForm); 
 }  

const closeLogInForm = () => {
    formContent.style.display = 'none'; 
}
formCloseIcon.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        closeLogInForm();
    }
});
formCloseIcon.addEventListener('click', closeLogInForm);


mainSection.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        closeLogInForm();
        closeMobileMenu();
    }
});
mainSection.addEventListener('click', closeLogInForm);
mainSection.addEventListener('click', closeMobileMenu);