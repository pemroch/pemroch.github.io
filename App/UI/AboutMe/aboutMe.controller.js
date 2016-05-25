( function () {
  
  'use strict';
  
  angular.module( 'aboutMe.controller', [] )
    .controller( 'AboutMeCtrl', AboutMeCtrl );
  
  AboutMeCtrl.$inject = [
    '$scope'
  ];
  
  function AboutMeCtrl( $scope ) {
    
    var vm = this;
    
    $scope.$emit( 'active', {
      aboutMe: true,
      skills: false,
      projects: false,
      contact: false,
    } );
    
  }
  
})();