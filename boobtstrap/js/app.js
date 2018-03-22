(function() {
    angular.module('AppBanco',[])

    .controller('Controller', ['$http', function($http){
          var banco = this;
          banco.datos = [];

      $http.get('http://www.titandesarrollo.com/_api/movimientos').success(function(data){
        banco.datos = data;
        });
    }]);
})();