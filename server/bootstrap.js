/**
 * Created by Bashar on 2016-02-07.
 */
Meteor.startup(function () {
    if (Deps.find().count() === 0) {
        var data = [
            {
                name: "Computer",
                employees : [{name: "bashar"}, {name :"basheer"}]
            },
            {
                name: "HR",
                employees : [{name: "bashddr"}, {name :"bashiiir"}]
            },
            {
                name: "Finance",
                employees : [{name: "bashteer"}, {name :"bashrrror"}]
            }
        ];

        _.each(data, function(dep) {
            var depId = Deps.insert({name: dep.name});
            _.each(dep.employees, function(emp) {
                emp.depId = depId;
                emp.createdAt = new Date();
                Emps.insert(emp);
            });
        });
    }
});
