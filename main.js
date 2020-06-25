const open = document.querySelector('.login-btn');
const modal = document.querySelector('.sign-box');


open.onclick = () => {
    modal.style.display = "flex";
}

document.body.addEventListener('onclick', function(){
    if(modal.style.display = "flex"){
        modal.style.display = "none";
    }
})





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