/*Locations = new Mongo.Collection("locations");

    // Helpers 
    Template.locations.helpers({
        locations: function() {
            return Locations.find();
        },        
        categories : function(){
            return Categories.find();
        },
        cat_name : function(id){
            return Categories.findOne(id).name;
        }
    });
    

    // Event handlers
    Template.locations.events({
        // Event handler to add a location
        "submit .new-location": function(event) {
            var long = 1;
            var lat = 1;
            var desc = event.target.desc.value;
            var catID = event.target.category.value;
            Locations.insert({
                long: long, //placeholder, needs to be obtained from a map
                lat: lat, //placeholder, needs to be obtained from a map
                description: desc,
                catID: catID
            });

        },
        // Event handler to delete a location 
        "click .delete_location": function(event,template) {
            Locations.remove(this._id);

        }


    });

*/
