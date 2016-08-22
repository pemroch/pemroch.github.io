( function() {
  
  'use strict';

  angular.module( 'app.run', [] )
  .run( RunBlock )

  RunBlock.$inject = [ 
    '$firebaseAuth', 
    '$rootScope', 
    '$state'
  ];

  function RunBlock( $firebaseAuth, $rootScope, $state ) {
    $rootScope.token = null;
  }
  
})();