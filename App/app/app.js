( function() {
  
  'use strict';

  angular.module( 'PemRoch', [ 
    'firebase',     
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