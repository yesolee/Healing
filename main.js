const nav_togle = document.querySelector('.nav_togle');
const menu = document.querySelector('.menu');
const login = document.querySelector('.login');


nav_togle.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    login.classList.toggle('active');
});