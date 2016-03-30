var myMovies = [{
	title: "Serenity",
	rating: "PG-13",
},
{
	title: "The Losers",
	rating: "PG-13",
},
{
	title: "Iron Man",
	rating: "PG-13",
}];



var movieL = {
  url: 'http://small-tiyfe.herokuapp.com/collections/annas_movies',
  type: 'POST',
  data: myMovies[2],
  success: handleData = function(myMovies) {
  	var container = [];
  	myMovies.forEach(function() {
    	container.append(myMovies.title)
	})
  },
  error: function(err) {
    console.log("err");
  },
  complete: function() {
    console.log('i got a response')
  }
};

$.ajax(movieL);


