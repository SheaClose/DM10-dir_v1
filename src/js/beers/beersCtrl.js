angular.module("app").controller("beersCtrl", function($scope, beersService) {
  beersService.getBeerCategories().then(res => ($scope.beerStyleCats = res));
  // $scope.beerStyleCats = ["light", "dark", "malty", "hoppy"];

  $scope.thisBeerIsGross = name => {
    $scope.beerStyleCats = $scope.beerStyleCats.filter(cur => cur !== name);
  };
});
