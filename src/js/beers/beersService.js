angular.module("app").service("beersService", function($http) {
  this.getBeerCategories = () => {
    return $http.get("/styles").then(res => res.data);
  };
});
