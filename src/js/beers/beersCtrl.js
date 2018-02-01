angular.module("app").controller("beersCtrl", function($scope, beersService) {
  $scope.beerStyleCats = ["light", "dark", "malty", "hoppy"];
});
