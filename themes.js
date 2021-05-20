'use strict'

let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('.thmbtn');

    // Check if light-mode is enabled
    // if it's enabled, turn it off
    // if it's disabled, turn it on

const enablelightMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('lightMode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('lightMode', 'enabled' );
};

const disablelightMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove('lightMode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('lightMode', null );
};

if (lightMode === "enabled") {
    enablelightMode();
}

lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== "enabled") {
        enablelightMode();
        console.log(lightMode);
    } else {
        disablelightMode();
        console.log(lightMode);
    }
});
