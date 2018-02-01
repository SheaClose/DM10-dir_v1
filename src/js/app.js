angular
  .module("app", ["ui.router"])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: `./js/home/homeTmpl.html`
      })
      .state("beers", {
        url: "/beers",
        templateUrl: `./js/beers/beersTmpl.html`,
        controller: "beersCtrl"
      });
  });
