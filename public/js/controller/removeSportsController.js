
app.controller('removeSportsController',function($scope,$location,$firebaseArray){
    
    var ref = new Firebase("https://sportsdataevent.firebaseio.com/sport");

  // create a synchronized array
  $scope.sport = $firebaseArray(ref);
    
    $scope.msg="Pooja";
    
})