describe( "MovieList", function() {
	var movielist;
	var api_url;
	var sample_items;

	beforeEach( function() {
		movielist = new MovieList();
		api_url = Mojo.appInfo.target + Mojo.appInfo.apikey;
		sample_items = eval("(" + pockets.readFile("test/fixtures/movies.json") + ")");
	});
	it( "should have items", function() {
		expect( movielist.items ).toBeDefined();
	});
	//test to make sure that getMovies calls the ajax request correctly
	it( "should contact nyt movies", function() {
		spyOn(Ajax, 'Request');
		movielist.getMovies( );

		//movielist.getMovies.mostRecentCall.args
		
		expect( Ajax.Request ).wasCalledWith( api_url, { 
				method: 'get', 
				onSuccess: movielist.import }
				);
	});

	
	//test to say that the designated success callback will populate the movielist
	it( "adds items to the movielist", function() {
		movielist.import( sample_items );
		expect(movielist.items.length).toEqual( 20 );
	});
	//test to say that the designated success callback will populate the movielist
	it( "adds items to the movielist", function() {
		this.listener = function() {};
		spyOn(Ajax, 'Request');
		spyOn( this, 'listener');
		movielist.getMovies( this.listener );

		movielist.import( sample_items );

		expect(this.listener).wasCalled();
	});

	// import should remove what's there
	/*
	it( "removes the existing items", function() {
		movielist.items.push({});
		movielist.items.push({});
		movielist.import( sample_items );
		expect(movielist.items.length).toEqual( 20 );
	});
	*/


	//test movielist populate method

});
