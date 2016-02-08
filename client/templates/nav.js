Template.nav.helpers({
    'deps' : function(){
        return Deps.find({});
    },
    'selected' : function() {
        //read the selected department value, usually changed by the router when the user
        //navigates using side navigation.
        return Session.equals('selectedDepartment', this._id);
    }
});