( function() {
  
  'use strict';

  angular.module( 'app.run', [] )
  .run( RunBlock )

  RunBlock.$inject = [ 
    '$rootScope', 
    '$state'
  ];

  function RunBlock( $firebaseAuth, $rootScope, $state ) {}
  
})();