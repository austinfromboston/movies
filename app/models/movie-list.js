function MovieList() {
	this.items = [];

}

MovieList.prototype.import = function( transport ) {
	var response = (transport.responseText).evalJSON();
	this.items = this.items || [];
	var self = this;
	for( key in response ) {
	}
	response.results.forEach(function(result) {
		self.items.push(result);
	});
	if(this.import_callback != undefined ) {
		this.import_callback.call(this);
	}
}


MovieList.prototype.getMovies = function( callback ) {
	this.import_callback = callback;
	var self = this;
	Mojo.Log.error('getmovies ' + Mojo.appInfo.target + Mojo.appInfo.apikey );
	new Ajax.Request( Mojo.appInfo.target + Mojo.appInfo.apikey, {
			  method: 'get',
			  onSuccess: self.import.bind(self),
			  //onSuccess: function( response ) { Mojo.Log.error( 'ok ' + response ) },
			  onFailure: function( response ) { Mojo.Log.error( 'failed' + response ) }
			  } 
			  );
}
