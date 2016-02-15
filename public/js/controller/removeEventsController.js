
app.controller('removeEventsController',function($scope,$location,$firebaseArray){
    var eventref = new Firebase("https://sportsdataevent.firebaseio.com/event");

  // create a synchronized array
  $scope.event = $firebaseArray(eventref);
    
    $scope.msg="Pooja";
    
});