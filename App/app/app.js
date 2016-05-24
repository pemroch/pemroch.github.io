( function() {
  
  'use strict';

  angular.module( 'PemRoch', [ 
    'ui.router', 
    'ngMaterial',
    'ngSanitize',
    'app.run', 
    'app.config',
    'home.controllers',
    'aboutMe.controllers',
    'skills.controllers',
    'projects.controllers',
    'contact.controllers'
  ])

})();