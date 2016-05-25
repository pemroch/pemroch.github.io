( function () {
  
  'use strict';
  
  angular.module( 'skills.controller', [] )
    .controller( 'SkillsCtrl', SkillsCtrl );
  
  SkillsCtrl.$inject = [
    '$scope'
  ];
  
  function SkillsCtrl( $scope ) {
    
    var vm = this;
   
    $scope.$emit( 'active', {
      aboutMe: false,
      skills: true,
      projects: false,
      contact: false,
    } );    
    
  }
  
})();