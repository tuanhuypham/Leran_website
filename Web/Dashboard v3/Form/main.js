//no dem duoc hay ko dem duoc
(function () { //IIFE
  //-----------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () { //loaded done!
    const navItems =  document.querySelectorAll('aside.aside li.Nav-item, aside.aside li.sub-nav-item'); //get all Nav-item
    
    navItems.forEach(function (navItem) {
      navItem.addEventListener('click', function (event) { //one Nav-item add onclick
        this.classList.toggle('active');
        event.stopPropagation();
      });
    });
  });
})();

