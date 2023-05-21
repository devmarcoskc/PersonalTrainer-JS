//Controls:
const feedbackCarousel = document.querySelector('.feedback-carousel');
const arrowIcons = document.querySelectorAll('.feedback-wrapper i');
const firstImg = feedbackCarousel.querySelectorAll('img')[0];
let isDragStart = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let isDragging = false;
let firstImgWidth = firstImg.clientWidth + 13;
let scrollWidth = feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth;

//Functions:
arrowIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        feedbackCarousel.scrollLeft += icon.id === 'left-arrow' ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHidenIcons(), 100);
    })
});

const autoSlide = () => {
    if(feedbackCarousel.scrollLeft == (feedbackCarousel.scrollWidth - feedbackCarousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 13;
    let valDifference = firstImgWidth - positionDiff;

    if(feedbackCarousel.scrollLeft > prevScrollLeft) {
        return feedbackCarousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    return feedbackCarousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const showHidenIcons = () => {
    arrowIcons[0].style.display = feedbackCarousel.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display = feedbackCarousel.scrollLeft == scrollWidth ? 'none' : 'block';
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = feedbackCarousel.scrollLeft;
}
const dragStop = (e) => {
    isDragStart = false;
    feedbackCarousel.classList.remove('dragging');

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    feedbackCarousel.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    feedbackCarousel.scrollLeft = prevScrollLeft - positionDiff;
    showHidenIcons();
}

//Events:
feedbackCarousel.addEventListener('mousemove', dragging);
/*
feedbackCarousel.addEventListener('touchmove', dragging);
*/

feedbackCarousel.addEventListener('mouseup', dragStop);

feedbackCarousel.addEventListener('mousedown', dragStart);
/*
feedbackCarousel.addEventListener('touchstart', dragStart);
*/

feedbackCarousel.addEventListener('mouseleave', dragStop);
/*
feedbackCarousel.addEventListener('touchend', dragStop);
*/