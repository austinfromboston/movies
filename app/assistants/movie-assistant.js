function MovieAssistant() {
	this.movielist = new MovieList();

}


MovieAssistant.prototype.moviesReady = function() {
	Mojo.Log.error(this.movielist.items.length);
	this.movieWidget = this.controller.setup('movies', {
		listTemplate: 'movies/list',
		itemTemplate: 'movies/movie'
	}, this.movielist.items );
}

MovieAssistant.prototype.setup = function() {
	this.movielist.getMovies( this.moviesReady );
}

MovieAssistant.prototype.activate = function() {
}
MovieAssistant.prototype.deactivate = function() {
}
MovieAssistant.prototype.cleanup= function() {
}
MovieAssistant.prototype.onStageActivate= function() {
}
MovieAssistant.prototype.onStageDeactivate= function() {
}
