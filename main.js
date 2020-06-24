(function (window, document) {
'use strict';

const $login = document.querySelectorAll('.sign-box');
const $loginBtn = document.querySelectorAll('.login-btn');


$loginBtn.onclick = function() {
    btnElements();
}


function btnElements(){
    [].forEach.call($login, function (btn) {
        btn.classList.toggle('on');
    });

}

function offElements(){
    [].forEach.call($login, function(btn) {
        btn.classList.remove('on');
    })
}
})(window, document);