(function(window, document){
    'use strict';
  
    const $toggles = document.querySelectorAll('.toggle'); //NodeList (유사배열)
    const $toggleBtn = document.getElementById('toggle-btn');
    

    $toggleBtn.addEventListener('click', function () {
          toggleElements();
    });
  
    window.addEventListener('resize', function(){
        if(window.innerWidth > 1024){
            // Off Toggle element
           offElemnets();
        }
    }) //window => browser  resize -> 줄어들거나 늘어날때
  
   

    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on') // classList -> 클래스를 제어하는거
        });
    }
  
    function offElemnets(){
      [].forEach.call($toggles, function(toggle){
          toggle.classList.remove('on') // classList -> 클래스를 제어하는거
      });
    }

  
  })(window, document)