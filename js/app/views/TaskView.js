define(['underscore', 'text!templates/taskTemplate.html'], function(_, htmlStr)
{
    var TaskView = function (model) {
        this.model = model;
        this.tmpl = _.template(htmlStr);
    };

    TaskView.prototype = {

        render: function (index) {

            // console.log(this.tmpl({index: index, name: this.model.getName(), status: this.model.getStatus()}));

            // var wrapper = document.createElement('div');

            // wrapper.innerHTML = this.tmpl({index: index, name: this.model.getName(), status: this.model.getStatus()});

            return this.tmpl({index: index, name: this.model.getName(), status: this.model.getStatus()});
        }
    };

    return TaskView;
});

