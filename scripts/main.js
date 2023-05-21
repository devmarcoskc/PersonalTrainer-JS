//Controls:
const menuMOB = document.querySelector('.nav--bars ion-icon');
const navMenuMob = document.querySelector('.mobile--aside');
const navMobClose = document.querySelector('.mobile--aside ion-icon');
const HeaderPosition = document.querySelector('header');
const slider = document.querySelector('#first-slide');
const radioOne = document.querySelector('#radio1');
const radioTwo = document.querySelector('#radio2');
const radioThree = document.querySelector('#radio3');
const radioFour = document.querySelector('#radio4');
const btnBackGround = document.querySelector('#manual-btn-1');
const btnBackGround2 = document.querySelector('#manual-btn-2');
const btnBackGround3 = document.querySelector('#manual-btn-3');

let currentSlide = 0;
let isMobileScreen = window.matchMedia('(max-width: 768px)');
let HeaderOffSetTop = HeaderPosition.offsetTop;
let menuMobileIsOpen = false;

//Main Functions:
function IntervalSlider () {
    setInterval( () => {
        switch (currentSlide) {
            case 0:
                handleMarginLeftTo0Slider()
                currentSlide ++;
                break;
            case 1:
                handleMarginLeftTo800Slider();
                currentSlide ++;
                break;
            case 2:
                handleMarginLeftTo1600Slider();
                currentSlide ++;
                break;
        }
        if (currentSlide > 2) {
            currentSlide = 0;
        }
    }, 2500);
}
IntervalSlider();

//Suport functions:
function handleMarginLeftTo0Slider() {
    slider.style.marginLeft = '0px';
    btnBackGround.style.backgroundColor = '#DCB818';
    btnBackGround2.style.backgroundColor = 'whitesmoke';
    btnBackGround3.style.backgroundColor = 'whitesmoke';
};

function handleMarginLeftTo800Slider() {
    currentSlide = 1;
    slider.style.marginLeft = '-800px';
    btnBackGround.style.backgroundColor = 'whitesmoke';
    btnBackGround2.style.backgroundColor = '#DCB818';
    btnBackGround3.style.backgroundColor = 'whitesmoke';
}

function handleMarginLeftTo1600Slider() {
    slider.style.marginLeft = '-1600px';
    btnBackGround.style.backgroundColor = 'whitesmoke';
    btnBackGround2.style.backgroundColor = 'whitesmoke';
    btnBackGround3.style.backgroundColor = '#DCB818';
}

//Events:
radioOne.addEventListener('click', () => {
    currentSlide = 0;
    if (currentSlide === 0) {
        handleMarginLeftTo0Slider();
    }
    radioOne.classList.add('background--btn');
});
radioTwo.addEventListener('click', () => {
    currentSlide = 1;
    if(currentSlide === 1) {
        handleMarginLeftTo800Slider();
    }
})
radioThree.addEventListener('click', () => {
    currentSlide = 2;
    if(currentSlide === 2) {
        handleMarginLeftTo1600Slider();
    }
});



//Mobile menu functions and Events:
menuMOB.addEventListener('click', () => {
    navMenuMob.style.right = '0';
    menuMOB.style.display = 'none';
    menuMobileIsOpen = true;
})
navMobClose.addEventListener('click', handleOpenMenuMobile);

if(isMobileScreen) {
    window.addEventListener('scroll', (e) => {
        if(window.scrollY > HeaderOffSetTop) {
            HeaderPosition.classList.add('header--fixed');
        } else {
            HeaderPosition.classList.remove('header--fixed');
        }
    });
    
    window.addEventListener('mousedown', (e) => {
        let ItemSelected = e.target;
        let itemSelectedIsAside = ItemSelected.classList.contains('mobile--aside');
        if(itemSelectedIsAside === false && e.target.nodeName !== 'A' && e.target.nodeName !== 'LI' && e.target.nodeName !== 'NAV') {
            handleOpenMenuMobile();
        }
    })
};

function handleOpenMenuMobile() {
    navMenuMob.style.right = '-70vw';
    menuMOB.style.display = 'flex';
    menuMobileIsOpen = false;
}



