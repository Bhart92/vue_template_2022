export const toggleNav = () => {
    const nav = document.querySelector('.nav-mobile');
    const overlay = document.querySelector('.overlay');
    const BurgerMenuLineArray = Array.from(document.querySelectorAll('.line'));
    const htmlTag = document.querySelector('html')
    const section = document.querySelector('section');
    const burgerMenu = document.querySelector('.ham');
    const overflowtoggleArr = [ htmlTag, section ];

    overflowtoggleArr.forEach((overflowTarget => overflowTarget.classList.toggle('overflow-toggle')));
    overlay.classList.toggle('display-toggle');
    burgerMenu.classList.toggle('active')
    BurgerMenuLineArray.forEach((btn => btn.classList.toggle('nav-active')));
    nav.classList.toggle('nav-active');
};