neuAngular.controller('homeController',['$scope',function($scope){

    $scope.runningInstanceInfo = `You are currently running ${NL_NAME} on port ${NL_PORT} inside a ${NL_OS} Machine.`

    $scope.loadNotepad = function(){
        alert("Notepad should open when you click ok :D")
    Neutralino.os.runCommand('notepad', 
        (data) => {
            console.log(data);
 
        },
        () => {
            console.error('error');
        }
);
        
    }

}])