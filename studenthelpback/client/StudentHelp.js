Locations = new Mongo.Collection("locations");

if (Meteor.isClient) {

	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});


	// Helpers 
	Template.StudentHelp.helpers({
		locations: function() {
			return Locations.find();
		},
		categories: function() {
			return Categories.find();
		},
		cat_name: function(id) {
			return Categories.findOne(id).name;
		}
	});


	// Event handlers
	Template.StudentHelp.events({
		// Event handler to add a location
		"click .create_location": function(event, template) {
			var $input = template.find('#cat-select');
			var catID = $input.value;
			$input = template.find('#desc');
			var desc = $input.value;
			var place = autocomplete.getPlace();
			Locations.insert({
				place: place,
				description: desc,
				catID: catID
			});

		},
		// Event handler to delete a location 
		"click .delete_location": function(event, template) {
			Locations.remove(this._id);

		}

	});


	var oldUserId = undefined;
	var autocomplete;

	// init the logic for the autocomple form
	function initGoogleMaps(template){
		GoogleMaps.init({
			'sensor': true,
			'language': 'en', 
			'libraries': 'places'
			}, function() {
					autocomplete = new google.maps.places.Autocomplete(
						(template.find('#autocomplete')), {
							types: ['geocode']
						}
					);
			});
	}




	// Runs each time the user is logged in or out
	/*Meteor.autorun(function() {
		var newUserId = Meteor.userId();
		if (oldUserId === null && newUserId) {
	    	console.log('The user logged in');
	    	initGoogleMaps(this);
		}
		else if (newUserId === null && oldUserId) {
	    	console.log('The user logged out');
		} 
		oldUserId = Meteor.userId();
	});*/



	Template.logged_in.rendered = function () {
		if(Meteor.userId() != null){
			initGoogleMaps(this);
		}
		if(this.find('#autocomplete') == null){
			alert("null2");
		}
		if(this.find('#main') == null){
			alert("null3");
		}

	};


}