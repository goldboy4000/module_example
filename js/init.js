/**
 * Created by user on 03.06.2017.
 */

/**
 *
 */
requirejs.config({
    baseUrl: 'js/app',
    paths: {
        app: 'app',
        underscore: '../libs/underscore'
    }
});

requirejs(['underscore'], function(_)
{
    console.log(_.VERSION);
});

requirejs(['app'], function (app)
{
   app.init();
});
