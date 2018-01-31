angular
  .module("app", ["ui.router"])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: `./js/home/homeTmpl.html`,
        controller: "homeCtrl"
      })
      .state("beers", {
        url: "/beers",
        templateUrl: `./js/beers/beersTmpl.html`,
        controller: "beersCtrl"
      })
      .state("beer", {
        url: "/beer/:id",
        templateUrl: `./js/beer/beerTmpl.html`,
        controller: "beerCtrl"
      });
  });
