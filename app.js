const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function()
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('#btnLogin-popup');
const btnclosePopup = document.querySelector('.icon-close');
const serviceSection = document.querySelector('.services');
const featureSection = document.querySelector('.section-feature-header');

const btnPopup_getstarted = document.querySelector('.main__btn');



registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active_form');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active_form');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active_popup');
    serviceSection.classList.add('active_popup');
    featureSection.classList.add('active_popup');
});

btnPopup_getstarted.addEventListener('click',()=>{
    wrapper.classList.add('active_popup');
    serviceSection.classList.add('active_popup');
    featureSection.classList.add('active_popup');
});

btnclosePopup.addEventListener('click',()=>{
    wrapper.classList.remove('active_popup');
    serviceSection.classList.remove('active_popup');
    featureSection.classList.remove('active_popup');
});
