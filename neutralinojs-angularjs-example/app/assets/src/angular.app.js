const  neuAngular = angular.module("neutralinoAngular", ["ngRoute"])

neuAngular.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        template : `
        <section id="homeSection">

   
    <div class="container">
        
    <h1>Running Info</h1>
    <p class="text-muted h6">{{runningInstanceInfo}}</p>
    <div class="button-holder">
    <button class="btn btn-primary" ng-click="loadNotepad()">Click to Open NotePad</button>
    
    
    <a class="btn btn-primary" href="#!/ram" >Load Ram Controller</a>
    </div>

    </div>
</section>
        
        `,
        controller:"homeController"
    })
    .when("/ram", {
        template : `
        <section class="ram-section">
        <h2>Your Current Machine Ram Usage</h2>
        <h1 class="display-4">{{ramDetails}}</h1>
        <a href="#!/" class="btn btn-primary">Load Home Controller</a>
        </section>
        `,
        controller:"ramController"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });


    
});