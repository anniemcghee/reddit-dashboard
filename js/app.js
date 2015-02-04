/* put js code here */
var redditApp = angular.module("RedditApp",['ui.bootstrap'])
  // alert('app loading')

redditApp.controller('SearchController',['$scope','$http','$modal',function($scope, $http, $modal) {
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

  $scope.hasPhoto = function(item) {
    if (item.data.thumbnail.length > 10 ) {
      return true;
    } else {
      return false;
    }
  };

  $scope.clear = function() {
    $scope.searchTerm = "";
  }

  $scope.delete = function(idx) {
    $scope.allResults.splice(idx,1)
    window.localStorage.allResults = JSON.stringify($scope.allResults);
  }

  $scope.showAbout = function(){
    var aboutModal = $modal.open({
      templateUrl:'aboutmodal.html', //html file to render when modal pops up
      controller:'AboutModalCtrl',
      size:'md'
    })
  }

}]);

redditApp.controller('AboutModalCtrl',['$scope','$modalInstance', function($scope, $modalInstance){
  $scope.greeting="Good morning";


$scope.closeThisModal = function(){
  $modalInstance.close();
}

}])