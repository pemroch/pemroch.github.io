( function () {
  
  'use strict';
  
  angular.module( 'contact.controller', [] )
    .controller( 'ContactCtrl', ContactCtrl );
  
  ContactCtrl.$inject = [
    '$scope'
  ];
  
  function ContactCtrl( $scope ) {
    
    var vm = this;
    
    $scope.$emit( 'active', {
      aboutMe: false,
      skills: false,
      projects: false,
      contact: true,
    } );    
    
  }
  
})();