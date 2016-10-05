
myApp.service('ourSvc', function($http,$firebaseObject,$firebaseArray,$firebaseAuth) {

// Explain firebaseArray
// Explain firebaseObject if we want to work with key value pairs


    var artistsRef = firebase.database().ref().child("artists");
    this.artists = $firebaseObject(artistsRef);


    this.addArtist = function(obj) {
        this.artists.$add({
            name: obj.name,
            genre: obj.genre
        }).then(function(response) {
            console.log(response)
        })
    };


    var auth = $firebaseAuth();
    this.createUser = function(email,password) {
        $firebaseAuth().$createUserWithEmailAndPassword(email, password)
            .then(function(data) {
            console.log(data);
        }).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

        })
    };







    this.signInUser = function(email,password) {
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };


    this.signOutUser = function(){
        auth.signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });

    };




});