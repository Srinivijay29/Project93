
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAq-qR37vx3cMwi8PMtrPkmkQjPAt_4Yf4",
      authDomain: "my-kwitter-app-9a92d.firebaseapp.com",
      projectId: "my-kwitter-app-9a92d",
      storageBucket: "my-kwitter-app-9a92d.appspot.com",
      messagingSenderId: "885855995923",
      appId: "1:885855995923:web:5fd3e3e45bf43e918bd7e6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
