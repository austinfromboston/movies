function MovieList() {
	this.items = [];

}

MovieList.prototype.import = function( response ) {
}

MovieList.prototype.getMovies = function( ) {
	var self = this;
	new Ajax.Request( Mojo.appInfo.target + Mojo.appInfo.apikey, 
			{ method: 'get',
			  onSuccess: self.import } );
}
