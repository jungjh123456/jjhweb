// open.onclick = () => {
//     modal.style.display = "flex";
// }
function open(){

const open = document.querySelector('.login-btn');
const modal = document.querySelector('.sign-box-group');

open.addEventListener('click', function() {
    if(modal.classList.contains('on')){
        modal.classList.remove('on');
    }else {
        modal.classList.add('on');
    }
});
}

open();






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