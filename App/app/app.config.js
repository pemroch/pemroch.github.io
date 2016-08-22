( function() {
  
  'use strict';
  
  angular.module( 'app.config', [] )
    .config( Config )
  
  Config.$inject = [ 
    '$stateProvider', 
    '$urlRouterProvider' 
  ];
  
  function Config( $stateProvider, $urlRouterProvider ) { 
    
    var config = {
        apiKey: "AIzaSyDzg4bg0oc3-mTF73bpTklJVh6C0S1G4Nc",
        authDomain: "pemroch-140917.firebaseapp.com",
        databaseURL: "https://pemroch-140917.firebaseio.com",
        storageBucket: "pemroch-140917.appspot.com",
    };
    firebase.initializeApp(config);

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
    
    // Skills UI
      .state( 'home.skills', {
      url: '/skills',
      views: {
        'home': {
          templateUrl: 'App/UI/Skills/skills.html',
          controller: 'SkillsCtrl as skills'          
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
    
    // Google Sheets Login UI
      .state( 'home.login', {
      url: '/login',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/GoogleSheets/login.html',
          controller: 'LoginCtrl as login'
        }
      }
    })

    // Google Sheets Sheet UI
      .state( 'home.sheet', {
      url: '/sheet',
      views: {
        'home': {      
          templateUrl: 'App/UI/Projects/GoogleSheets/sheet.html',
          controller: 'SheetCtrl as sheet'
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