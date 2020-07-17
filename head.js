(function(window,document){
  'use strict';
  let btn = document.querySelectorAll('.btn-menu');
  let submenu1 = document.querySelectorAll('.sub-menu1');
  let submenu2 = document.querySelectorAll('.sub-menu2');
  console.log(btn)

  btn[0].addEventListener('mouseover', () => {

    onMenu();
  })

  btn[0].addEventListener('mouseout', () => {
    offElemnets();
  })
  btn[1].addEventListener('mouseover', () => {

    onMenu1();
  })

  btn[1].addEventListener('mouseout', () => {
    offElemnets1();
  })

  function onMenu(){
    [].forEach.call(submenu1, function(toggle){
        toggle.classList.toggle('on')
    })
  }
  function offElemnets(){
    [].forEach.call(submenu1, function(toggle){
        toggle.classList.remove('on') // classList -> 클래스를 제어하는거
    });
  }
  function onMenu1(){
    [].forEach.call(submenu2, function(toggle){
        toggle.classList.toggle('on')
    })
  }
  function offElemnets1(){
    [].forEach.call(submenu2, function(toggle){
        toggle.classList.remove('on') // classList -> 클래스를 제어하는거
    });
  }

})(window,document);