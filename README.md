# Angularjs-Multiple-View-Render-Concept
Multiple View render concept in angularjs

<!doctype html>
<html>
   
   <head>
      <script src = "js/library/angular.min.js"></script>  
      <script src = "js/library/angular-route.min.js"></script>
      <script src = "js/controller/app.js"></script>
      <script src = "js/controller/controller.js"></script>
      <script src = "js/library/highcharts.js"></script> 
      <script src = "js/library/highcharts-ng.js"></script>
   </head>
   
   <body ng-app="mainApp">

      <h1>Production Monitoring</h1>
      <div>
         <a href="#/">Back To Home</a>
      </div>
      <a href="#/pdaily">Daily</a>
      <a href="#/pweek">Weekly</a>
      <a href="#/pmonth">Monthly</a>
      <a href="#/custom">Custom</a>
      

      
      
      <div ng-view></div>

      
   </body>



</html>
