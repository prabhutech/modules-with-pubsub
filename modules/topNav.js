MYI.topNav = ( function() {
	var init = function() {
		$.subscribe('main/get_account_details', function(data) {
			renderView(data);
		});
		$.subscribe('main/save_account_details', function(data) {
			renderView(data);
		});
	};
	var renderView = function(data) {
		new EJS({
			url: 'views/topnav.ejs'
		}).update('topnav', {
			account_details: data
		});
	};
	return {
		init: init
	}
}());
