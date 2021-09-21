  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDOhDZHyy2QmBXI_DhOOxE9-RJ0DYiNZrE",
    authDomain: "blog-try.firebaseapp.com",
    databaseURL: "https://blog-try.firebaseio.com",
    projectId: "blog-try",
    storageBucket: "blog-try.appspot.com",
    messagingSenderId: "262790726553",
    appId: "1:262790726553:web:c8d53b4ad58ef85a034908",
    measurementId: "G-3D7CEPK4CC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

 
    function signUp(){

        var name= document.getElementById("name");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        console.log(name.value);
        firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        const user = firebase.auth().currentUser;

        
        if (user != null) {
            user.updateProfile({
                displayName: name.value
            }).then(() => {
              
                window.location = 'blog.html';
            }).catch((error) => {
              console.log(error);
            });
        } else {
          alert("Some error has occured");
        }
    
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
        
}

function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
       
        window.location = 'blog.html';
       
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        
      });
    }

  function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
      console.log(result);
      alert("Success..Signed in with google");
      window.location = 'blog.html';
    }).catch(function(err){
      console.log(err);
      alert("Failed");

    });
  }