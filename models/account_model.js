var MYI = {};

MYI.accountModel = ( function() {
	var getDetails = function(successfn, errorfn) {
		$.ajax({
			dataType: "json",
			type: "get",
			success: function(data) {
				$.publish('main/get_account_details', [data]);
				successfn(data);
			},
			fixture: "mocks/account_details.json"
		});
	};
	var saveDetails = function(successfn) {
		$.ajax({
			dataType: "json",
			type: "post",
			success: function(data) {
				$.publish('main/save_account_details', [data]);
				successfn(data);
			},
			fixture: "mocks/account_details_changed.json"
		});
	};
	return {
		getDetails: getDetails,
		saveDetails: saveDetails
	}
}());