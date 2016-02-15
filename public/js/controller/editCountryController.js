
app.controller('editCountryController',function($scope,$location,$firebaseArray){

    var ref = new Firebase("https://sportsdataevent.firebaseio.com/country");

  // create a synchronized array
  $scope.country = $firebaseArray(ref);
    
    $scope.msg="Pooja";
    
    
    
});

