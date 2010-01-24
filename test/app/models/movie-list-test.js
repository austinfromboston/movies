describe( "MovieList", function() {
	var movielist;
	var api_url = Mojo.appInfo.target + Mojo.appInfo.apikey;

	beforeEach( function() {
		movielist = new MovieList();
	});
	it( "should have items", function() {
		expect( movielist.items ).toBeDefined();
	});
	//test to make sure that getMovies calls the ajax request correctly
	it( "should contact nyt movies", function() {
		spyOn(Ajax, 'Request');

		movielist.getMovies( );

		//movielist.getMovies.mostRecentCall.args
		
		expect( Ajax.Request ).wasCalledWith( api_url, { method: 'get', onSuccess: movielist.import  } );
	});

	
	//
	//test to say that the designated success callback will populate the movielist
	//test to say that the designated error callback will blow up

	//eval(pockets.readFile("test/fixtures/movies.json"));

	//
	//test movielist populate method

});
