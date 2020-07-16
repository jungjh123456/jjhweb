(function(window,document){
  'use strict';
  let btn = document.querySelectorAll('.btn-menu');
  let submenu1 = document.querySelectorAll('.sub-menu1');
  
  console.log(btn)

  btn[0].addEventListener('mouseover', () => {

    onMenu();
  })

  btn[0].addEventListener('mouseout', () => {
    offElemnets();
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


})(window,document);