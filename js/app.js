/* put js code here */
var redditApp = angular.module("RedditApp",['ui.bootstrap'])
  // alert('app loading')

redditApp.controller('SearchController',['$scope','$http',function($scope, $http) {
  // alert('Controller loading');

  $scope.results = {};
  $scope.searchTerm = "";
  $scope.allResults = JSON.parse(window.localStorage.allResults || "[]");


  $scope.search = function() {

  //error code goes here

  var req = {
      url: "http://www.reddit.com/search.json",
      params: {
        q: $scope.searchTerm
      }
    }

  $http(req).success(function(data) {

      $scope.results = data.data.children;
      $scope.allResults.push($scope.searchTerm);
      window.localStorage.allResults = JSON.stringify($scope.allResults);
    })
  }

  $scope.load = function(idx){

    var req = {
      url: "http://www.reddit.com/search.json?",
      params: {
        q: $scope.allResults[idx]
      }
    }

    $http(req).success(function(data){
      $scope.results = data.data.children
    })
  }

  $scope.clear = function() {
    $scope.searchTerm = "";
  }

  $scope.delete = function(idx) {
    $scope.allResults.splice(idx,1)
    window.localStorage.allResults = JSON.stringify($scope.allResults);
  }

}]);