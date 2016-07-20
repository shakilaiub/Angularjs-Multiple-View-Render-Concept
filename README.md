# Angularjs-Multiple-View-Render-Concept
Multiple View render concept in angularjs


   

   
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
