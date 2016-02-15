
app.controller("addSportsController",[ '$scope', '$timeout','$location','$firebaseArray',function($scope, $timeout,$location,$firebaseArray){
    
  /*  $scope.loaded = false;    
    $scope.title = "This is an App";*/
    
    
    var ref = new Firebase("https://sportsdataevent.firebaseio.com/sport");

  // create a synchronized array
  $scope.sport = $firebaseArray(ref);
    
    
    
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
/*
    $timeout(function() { $scope.loaded = true;}, 1000);
    */
   function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
       console.log(obj);
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
 
 
    
}]);

//var csv is the CSV file with headers

