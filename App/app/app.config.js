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
      controller: 'HomeCtrl as home',
      abstract: true
    })
    
    // About Me UI
      .state( 'home.aboutMe', {
      url: '/aboutMe',
      views: {
        'home': {
          templateUrl: 'App/UI/AboutMe/aboutMe.html',
          controller: 'AboutMeCtrl as aboutMe'          
        }
      }
    })
    
    // Projects UI
      .state( 'home.projects', {
      url: '/projects',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/projects.html',
          controller: 'ProjectsCtrl as projects'
        }
      }
    })
    
    // OpenSearch Search UI
      .state( 'home.openSearch', {
      url: '/openSearch',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/OpenSearch/openSearch.html',
          controller: 'OpenSearchCtrl as openSearch'
        }
      }
    })
    
    // OpenSearch Article UI
      .state( 'home.article', {
      url: '/article/:title',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/OpenSearch/article.html',
          controller: 'ArticleCtrl as article'
        }
      }
    })
    
    // QrCodeToJSPDF Article UI
      .state( 'home.qrCodeToJSPDF', {
      url: '/qrCodeToJSPDF',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/QrCodeToJSPDF/qrCodeToJSPDF.html',
          controller: 'QrCodeToJSPDFCtrl as qrCodeToJSPDF'
        }
      }
    })
    
    // Contact UI
      .state( 'home.contact', {
      url: '/contact',
      views: {
        'home': {      
          templateUrl: 'App/UI/Contact/contact.html',
          controller: 'ContactCtrl as contact'
        }
      }
    })    
    
    $urlRouterProvider.otherwise( '/home/aboutMe' );
    
  }
  
})();