/**
 * Created by Bashar on 2016-02-07.
 */

Meteor.methods({
    addTask : function(title) {
        Tasks.insert({
            title : title,
            createdAt : new Date(),
            owner : Meteor.userId(),
            username : Meteor.user().username
        });
    }
});