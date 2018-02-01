angular.module("app").directive("scBeer", function() {
  return {
    templateUrl: "./js/beer/beerTmpl.html",
    scope: {
      category: "=",
      iHateThisBeer: "&"
    },
    restrict: "E",
    link: function(scope, elem, attrs) {
      if (scope.category.includes("hoppy")) {
        elem.prepend("I hate hoppy");
      }
    }
  };
});
