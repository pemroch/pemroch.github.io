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
    'projects.controllers',
    'contact.controllers'
  ])

})();