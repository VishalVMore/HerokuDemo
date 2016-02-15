
app.controller("addEventsController",[ '$scope', '$timeout','$location','$firebaseArray',function($scope, $timeout,$location,$firebaseArray){
    
    $scope.loaded = false;    
    $scope.title = "This is an App";
    
   var eventref = new Firebase("https://sportsdataevent.firebaseio.com/event");

  // create a synchronized array
  $scope.event = $firebaseArray(eventref);
    
    $scope.msg="Pooja";
     $scope.choices = [{id: 'choice1'}, {id: 'choice2'}];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };
     $timeout(function() { $scope.loaded = true;}, 1000);
    
}])