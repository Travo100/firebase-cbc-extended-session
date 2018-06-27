// What this app does
// movie reviewer

// allows a user or any user

// to add a movie with a title, rating, and short review of the film

// that anyone can see in a table

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

// when someone submit the form
$("#form-submit").on("click", function(e){
    e.preventDefault();
    var movieTitle = $("#movie-title").val().trim();
    var movieRating = $("#movie-rating").val().trim();
    var movieReview = $("#movie-review").val().trim();

    // get the user input from the title, rating, and short review fields
    database.ref().push({
        title: movieTitle,
        rating: movieRating,
        review: movieReview
    });
});

// get all the records from the firebase database 
// and display that info on the table
database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());
    $("table tbody").append("<tr><td>"+snapshot.val().title+"</td><td>"+snapshot.val().rating+"/10</td><td>"+snapshot.val().review+"</td></tr>");
});