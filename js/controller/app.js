    var app = angular.module('mainApp',['ngRoute']);

      app.config(function($routeProvider){

        $routeProvider
        .when('/',{
          
          controller:'HomeController',
          templateUrl: 'views/home.html'

        })
        .when('/pdaily',{
          controller:'DailyController',
          templateUrl: 'views/daily.html'

        })
        .when('/pweek',{
          controller:'WeeklyController',
          templateUrl: 'views/weekly.html'

        })
        .when('/pmonth',{
          controller:'MonthlyController',
          templateUrl: 'views/month.html' 
          
        })
        .when('/phoneL',{
          controller:'PhoneListController',
          templateUrl: 'views/phone.html' 
          
        })
        .when('/httpR',{
          controller:'HttpController',
          templateUrl: 'views/http.html' 
          
        })
        .when('/error/:message',{
          controller:'ErrorController',
          templateUrl: 'views/error.html' 
          
        })
        .otherwise({
          redirectTo: '/'
        });
        

      });