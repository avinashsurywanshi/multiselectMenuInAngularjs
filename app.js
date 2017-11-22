
angular.module('multiSelectMenu',['ui.bootstrap'])

.controller('multiSelectController',['$scope', '$timeout', function($scope, $timeout){
	$scope.selectMenuLable = "Select your skill sets";
	
	$scope.filterOptions = [
	      {description:'HTML5', name:'HTML5', order:1},
	      {description:'CSS3', name:'CSS3', order:2},
	      {description:'JavaScript', name:'JavaScript', order:3},
	      {description:'jQuery', name:'jQuery', order:4},
	      {description:'Bootstrap', name:'Bootstrap', order:5},
	      {description:'Angularjs', name:'Angularjs', order:6},
	      {description:'Angular2', name:'Angular2', order:7},
	      {description:'TypeScript', name:'TypeScript', order:8},
	      {description:'Nodejs', name:'Nodejs', order:9}
	];
	$scope.selectedTechnologies = [];
	
	// whenever user check the option this function will get called
	// it will check if the option is in selectedFilter option or not
	 $scope.toggleFilterOption = function(value) {
		 console.log(value)
		 var index = $scope.selectedTechnologies.indexOf(value.name);
		 console.log(index)
         if(index !== -1) {
        	 $scope.selectedTechnologies.splice(index, 1);
        	 console.log( $scope.selectedTechnologies)
        	 }
         else{
            	 $scope.selectedTechnologies.push(value.name);
             }
         
             // update the dropdown text to reflect the items selected
             updateFilterOptionsLabel();
     };
    
     var updateFilterOptionsLabel = function(){
     	if ($scope.selectedTechnologies.length===1 ){
     		$scope.selectMenuLable =  $scope.selectedTechnologies[0];
     	}
     	else if ($scope.selectedTechnologies.length>1){
     		$scope.selectMenuLable = $scope.selectedTechnologies.length + " Skills are selected";
     	}
     	else {
     		$scope.selectMenuLable = "Select your skilles";
     	}
     }
}])