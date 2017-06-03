define(['controllers/ToDoListController'], function (ToDoListController)
{
    return {
        init: function ()
        {
            new ToDoListController();
        }
    }

});