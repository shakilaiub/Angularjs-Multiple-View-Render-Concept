      app.controller('HomeController', function($scope) {
  
        $scope.message = 'This is Home Page';
        
      });
      app.controller('DailyController', function($scope) {
  
        $scope.message = 'This is Daily Production';
        $scope.message1 = 'ACTUAL DAILY';
        
      });


      app.controller('WeeklyController', function($scope) {
  
        $scope.message = 'This is Weekly Production';
        $scope.message1 = 'ACTUAL WEEKLY';
        
      });


      app.controller('MonthlyController', function($scope) {
  
        $scope.message = 'This is Monthly Production';
        $scope.message1 = 'ACTUAL MONTHLY';
        
      });


      app.controller('HttpController', function($scope, $http,$location) {
  
          $http.get("http://10.60.60.36/dataserve/web/country-list")
          .success(function(response){

              $scope.persons = response.results;

          })

          .error(function() {

              $location.path('/error/'+'Country List Not found');

          });

        
      });


      app.controller('ErrorController', function($scope, message='This is 404 Error') {

           $scope.errormessage = message;

      });

