
Categories = new Meteor.Collection("categories");
    function set_editable(){
        $('.editable').editable({
            type: 'text',
            title: 'Enter Category name',
            mode: 'inline',
            success: function(response, newValue) {
                Categories.update({_id: $(this).attr("data-pk")},{name : newValue});
        }});      
    };
    Template.categories.rendered = function () {
      set_editable();
    }
    
    Template.categories.helpers({
        categories : function(){
            return Categories.find({},{sort: {date_created : -1}});
        }
    });
    
    Template.categories.events({
        'click #create_category' : function(event,template){
            var $input = template.find('#category_name');
            var name = $input.value;
            Categories.insert({name: name}) 
            $input.value = '';
            set_editable();
        },
        'click .delete_category' : function(event,template){
            var category = Categories.findOne(this._id);
            var locations = Locations.find({catID : category._id}).fetch();
            if(locations.length > 0){
             alert("This category has attached"+ locations.length +"locations. Please remove them first");   
            }
            else if(confirm("Are you sure you want to delete " + category.name)){
                Categories.remove(category._id);
            }
            else{
                alert("Not possible");
            }
        } 
    });
