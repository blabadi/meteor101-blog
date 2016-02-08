/**
 * Created by Bashar on 2016-02-07.
 */
Template.employees.helpers({
    'emps' : function(){
        return Emps.find({depId : this._id});
    }
});