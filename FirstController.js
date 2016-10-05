'use strict';

myApp.controller('FirstCtrl', function ($scope, ourSvc) {
    $scope.artists = ourSvc.artists;
    console.log($scope.artists);

    $scope.addArtist = function(){
        ourSvc.addArtist(buildArtist());
    };

    $scope.signUp = function() {
        ourSvc.createUser($scope.email, $scope.password)  ;
    };






    $scope.getArtist = function(){
        ourSvc.getArtist($scope.id)
    };




    $scope.getAllArtist = function(){
        ourSvc.getAll().then(function(response){
            $scope.artists = response;
            console.log(response)
        })
    };

    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            rating: $scope.rating,
            id: Math.random() * 5000
        }
    }


});


