const target = document.querySelectorAll('[data-anime]');
const calculateMonitorSize = ((window.innerHeight * 3) / 3.9);

function animeScroll() {
    const windowTop = window.pageYOffset + calculateMonitorSize;
    target.forEach((item) => {
        if(windowTop > item.offsetTop) {
            item.classList.add('animate');
        } else {
            item.classList.remove('animate');
        }
    })
};
window.addEventListener('scroll', () => {
    animeScroll();
});
