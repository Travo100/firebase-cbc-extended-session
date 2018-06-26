// Initialize Firebase
var config = {
    apiKey: "AIzaSyBorA86SUsfJLcjXtKsjkqLMXdPaACj0Bc",
    authDomain: "fir-cbc-extended-session.firebaseapp.com",
    databaseURL: "https://fir-cbc-extended-session.firebaseio.com",
    projectId: "fir-cbc-extended-session",
    storageBucket: "",
    messagingSenderId: "715803556482"
  };
  firebase.initializeApp(config);

var database = firebase.database();

database.ref().set({
    test: "Hello!"
});

// movie reviewer

// allows a user or any user

// to add a movie with a title, rating, and short review of the film

// that anyone can see in a table