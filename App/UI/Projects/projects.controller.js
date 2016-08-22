( function () {
  
  'use strict';
  
  angular.module( 'projects.controller', [] )
    .controller( 'ProjectsCtrl', ProjectsCtrl );
  
  ProjectsCtrl.$inject = [
    '$scope'
  ];
  
  function ProjectsCtrl( $scope ) {
    
    var vm = this;
    
    $scope.$emit( 'active', {
      aboutMe: false,
      skills: false,
      projects: true,
      contact: false,
    } );

    $scope.$emit( 'backButton', false );
    
  }
  
})();