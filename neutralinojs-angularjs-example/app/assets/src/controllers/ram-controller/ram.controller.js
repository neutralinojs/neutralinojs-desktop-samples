neuAngular.controller("ramController",['$scope','$interval',function($scope,$interval){



    $scope.ramDetails = "Loading..."

    $scope.loadRamDetails =  function(){

        $interval(() => {
            Neutralino.computer.getRamUsage((data) => {
                let percentage = parseInt(((data.ram.total - data.ram.available) / data.ram.total) * 100);
                console.log(percentage);
                
                $scope.ramDetails = `${percentage}%`
                
            }, () => {}); 
            
         },500);

    }

    // Load the method

    $scope.loadRamDetails()

}])