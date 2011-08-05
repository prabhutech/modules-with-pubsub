MYI.memberAccount = ( function() {
	var init = function() {
		MYI.accountModel.getDetails(renderView);
		$('#editAccountBtn').live('click', function() {
			toggleView();
		});
		$('#cancelEditAccountBtn').live('click', function() {
			toggleView();
		});
		$('#saveAccountBtn').live('click', function() {
			MYI.accountModel.saveDetails(renderView);
		});
	};
	var renderView = function(data) {
		toggleView();
		new EJS({
			url: 'views/account_section.ejs'
		}).update('account', {
			account_details: data
		});
	};
	var toggleView = function() {
		$('.account_section').toggle();
	};
	return {
		init: init
	}
}());