( function () {
  
  'use strict';
  
  angular.module( 'openSearch.controller', [] )
    .controller( 'OpenSearchCtrl', OpenSearchCtrl );
  
  OpenSearchCtrl.$inject = [
    '$http',
    '$state',
    '$scope',
    '$timeout'
  ];
  
  function OpenSearchCtrl( $http, $state, $scope, $timeout ) {
    
    var vm = this;
    
    // Will be the selected title from the list of titles returned from the search set to '' as default.
    vm.selected = '';
    // The title to search for based on user input in md-autocomplete.
    vm.searchTitle = '';
    // The list of articles to search for.
    vm.articles = articles;
    // function to run after the user has selected an article title.
    vm.articleSelected = articleSelected;
    
    function articles( title ) {
      // Returns a list of article titles passed in paramter 'title' from md-autocomplete
      var article = $http.jsonp( "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + title + "&callback=JSON_CALLBACK" )
      .then( function( titles ) {
        // The list of titles returned from our search.
        return titles.data[ 1 ];
      })
      return article;
    }
    function articleSelected() {
      // Wrapped in 'if' statement because if vm.selected is blank vm.selected is 'undefined'.
      if ( vm.selected ) {
        // Wrapped in $timeout because md-autoselect does not hide md-scroll-mask and will prevent user interaction once the article is loaded.
        $timeout( function() {
          // Passes the article title as a parameter to the 'article' state.
          $state.go( 'home.article', { title: vm.selected } );
        })
      }
    }
    $scope.$emit( 'backButton', true );
    
  }

})();