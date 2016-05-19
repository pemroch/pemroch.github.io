( function() {
  
  'use strict';
  
  angular.module( 'app.config', [] )
    .config( Config )
  
  Config.$inject = [ 
    '$stateProvider', 
    '$urlRouterProvider' 
  ];
  
  function Config( $stateProvider, $urlRouterProvider ) { 
    
    $stateProvider
    
    // Home UI
      .state( 'home', {
      url: '/home',
      templateUrl: 'App/UI/Home/home.html',
      controller: 'HomeCtrl as home'      
    })
    
    $urlRouterProvider.otherwise( '/home' );
    
  }
  
})();