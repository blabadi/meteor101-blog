/**
 * Created by Bashar on 2016-02-07.
 */
Router.configure({
    layoutTemplate: 'main'
});

Router.route('dash-board', {
});

Router.route('depDetails', {
    path: '/department/:_id',
    data : function(p) {
        console.log("here : ", this.params._id);
        //find doesn't return single object..use find one
        var dp = Deps.findOne({_id : this.params._id });
        Session.set('selectedDepartment', dp._id);
        console.log('dp :' , dp);
        return dp;
    }
});
Router.route('/', {
    name: 'home',
    action : function(){
        Router.go('dash-board');
    }
});