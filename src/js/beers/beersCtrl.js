angular.module("app").controller("beersCtrl", function($scope, beersService) {
  $scope.beerStyleCats = ["light", "dark", "malty", "hoppy"];
  // beersService.getBeerCategories().then(res => console.log("res: ", res));
});
