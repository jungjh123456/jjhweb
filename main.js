const open = document.querySelector('.login-btn');
const modal = document.querySelector('.sign-box');
const slider = document.querySelectorAll('a');

open.onclick = () => {
    modal.style.display = "flex";
}

slider.onclick = () =>{
    console.log('ddd')
}







// (function (window, document) {
// 'use strict';

// const $login = document.querySelectorAll('.sign-box');
// const $loginBtn = document.querySelectorAll('.login-btn');


// $loginBtn.onclick = function() {
//     btnElements();
// }


// function btnElements(){
//     [].forEach.call($login, function (btn) {
//         btn.classList.toggle('on');
//     });

// }

// function offElements(){
//     [].forEach.call($login, function(btn) {
//         btn.classList.remove('on');
//     })
// }
// })(window, document);