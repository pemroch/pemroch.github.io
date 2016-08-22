(function() {
    
    'use strict';
    
    angular.module('login.controller', [])
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$firebaseAuth', '$http', '$rootScope', '$scope', '$state'];

    function LoginCtrl ($firebaseAuth, $http, $rootScope, $scope, $state) {
        var vm = this;
        vm.login = login;
        //Signs out user when returning to the login screen.
        $firebaseAuth().$signOut();
        //Login function
        function login () {    
            var provider = new firebase.auth.GoogleAuthProvider();
            //Adds the scope being requested from the google api in this case google sheets.
            provider.addScope('https://www.googleapis.com/auth/spreadsheets');
            $firebaseAuth().$signInWithPopup(provider)
            .then(function(result) {
                //result contains a token needed for every request sent to the sheets api
                validateToken(result.credential.accessToken);
            })
            .catch(function(error) {
                login.error = error
            });            
        }
        function validateToken (token) {
            //validates the token sent by the google api
            $http({
                url: 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + token,
                method: 'POST'
            })
            .then(function successCallback (data) {
                // sets a global property to the value of the token to be accessed from different parts of the application
                $rootScope.token = token;
                $state.go('home.sheet');
            }, function errorCallback (error) {
                $state.go('home.login');
            });                            
        }
        $scope.$emit( 'backButton', true );
    }
})();    