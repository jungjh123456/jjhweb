(function(window,document){
  'use strict';
  let header = document.querySelectorAll('.header');

  window.addEventListener('scroll',() =>{
    if(window.innerHeight > 100){
      stickElement();
    }
  })

  function stickElement(){
    let header = document.querySelectorAll('.header');
    
    header.style.backgroundColor = 'red';
   
  }

})(window,document)