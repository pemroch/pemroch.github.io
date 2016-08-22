( function () {
  
  'use strict';
  
  angular.module( 'home.controller', [] )
    .controller( 'HomeCtrl', HomeCtrl );
  
  HomeCtrl.$inject = [
    '$scope'
  ];
  
  function HomeCtrl( $scope ) {
    
    var vm = this;
    
    vm.aboutMe = false;
    vm.skills = false;
    vm.projects = false;
    vm.contact = false;
    vm.backButton = false;
    
    $scope.$on( 'active', function( e, data ) {
      angular.forEach( data, function( value, key ) {
        vm[ key ] = value;
      })
    } );
    $scope.$on( 'backButton', function( e, data ) {
      vm.backButton = data;
    } );
    
  }
  
})();