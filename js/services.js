angular.module('zmdicheatsheet.services', [])

.factory('Icons', ['$http', '$q', function($http, $q) {
    return {
        all: function() {
            var def = $q.defer();

            $http.get("js/iconset.json")
              .success(function(data) {
                def.resolve(data);
              })
              .error(function() {
                  def.reject("Failed to get subjects");
              });

            return def.promise;
        }
    }
}]);