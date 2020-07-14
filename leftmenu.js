(function(window, document){
  'use strict';
  const $listBtn = document.getElementById('listbtn');
  const $slideMenu = document.querySelectorAll('.sidemenu');
  const $listBtn1 = document.getElementById('listbtn1');
  const $slideMenu1 = document.querySelectorAll('.sidemenu1');
  const $listBtn2 = document.getElementById('listbtn2');
  const $slideMenu2 = document.querySelectorAll('.sidemenu2');
  const $listBtn3 = document.getElementById('listbtn3');
  const $slideMenu3 = document.querySelectorAll('.sidemenu3');
  const $listBtn4 = document.getElementById('listbtn4');
  const $slideMenu4 = document.querySelectorAll('.sidemenu4');
  const $listBtn5 = document.getElementById('listbtn5');
  const $slideMenu5 = document.querySelectorAll('.sidemenu5');
  
  
$listBtn.addEventListener('click', function(){
    onMenu();
})
$listBtn1.addEventListener('click', function(){
  onMenu1();
})


function onMenu(){
  [].forEach.call($slideMenu, function(toggle){
      toggle.classList.toggle('on')
  })
}
function onMenu1(){
  [].forEach.call($slideMenu1, function(toggle){
      toggle.classList.toggle('on')
  })
}
$listBtn2.addEventListener('click', function(){
  onMenu2();
})

function onMenu2(){
  [].forEach.call($slideMenu2, function(toggle){
      toggle.classList.toggle('on')
  })
}

$listBtn3.addEventListener('click', function(){
  onMenu3();
})

function onMenu3(){
  [].forEach.call($slideMenu3, function(toggle){
      toggle.classList.toggle('on')
  })
}

$listBtn4.addEventListener('click', function(){
  onMenu4();
})

function onMenu4(){
  [].forEach.call($slideMenu4, function(toggle){
      toggle.classList.toggle('on')
  })
}
$listBtn5.addEventListener('click', function(){
  onMenu5();
})

function onMenu5(){
  [].forEach.call($slideMenu5, function(toggle){
      toggle.classList.toggle('on')
  })
}

})(window, document)