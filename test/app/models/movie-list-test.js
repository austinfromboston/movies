describe( "MovieList", function() {
	var movielist;
	beforeEach( function() {
		movielist = new MovieList();
	});
	it( "should have items", function() {
		expect( movielist.items ).toBeDefined();
	});
});
