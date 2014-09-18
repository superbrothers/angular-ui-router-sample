var myapp = angular.module("myapp", ["ui.router"]);

myapp.run(["$rootScope", "$document", function ($rootScope, $document) {
    var title = "angular ui-router sample";
    $rootScope.$on("$stateChangeSuccess", function (event, toState) {
        $document.prop("title", toState.title ? toState.title + " - " + title : title);
    });
}]);

myapp.config(["$stateProvider", "$locationProvider", function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("index", {
            url: "/",
            templateUrl: "templates/index.html",
            controller: ["$scope", function ($scope) {
                $scope.tabs = [
                    {name: "index", title: "Home"},
                    {name: "index.A", title: "Nav A"},
                    {name: "index.B", title: "Nav B"},
                    {name: "index.C", title: "Nav C"}
                ];
            }]
        })
            .state("index.A", {
                title: "A",
                url: "A",
                templateUrl: "templates/index.detail.html",
                controller: ["$scope", function ($scope) {
                    $scope.items = ["Apple", "Answer"];
                }]
            })
            .state("index.B", {
                title: "B",
                url: "B",
                templateUrl: "templates/index.detail.html",
                controller: ["$scope", function ($scope) {
                    $scope.items = ["Ball", "Book"];
                }]
            })
            .state("index.C", {
                title: "C",
                url: "C",
                templateUrl: "templates/index.detail.html",
                controller: ["$scope", function ($scope) {
                    $scope.items = ["Cool", "Calendar"];
                }]
            });
}]);
// vim: set fenc=utf-8 ts=4 sts=4 sw=4 :
