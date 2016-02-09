var dent = angular.module('zmdicheatsheet', ['ionic', 'ionicRipple', 'zmdicheatsheet.controllers', 'zmdicheatsheet.services']);

dent.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

dent.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // Turn off caching to allow refreshing of pages esp after coming from settings page
  $ionicConfigProvider.views.maxCache(0);

  $stateProvider

  .state('home', {
    url : '/',
    templateUrl: 'templates/dashboard.html',
    controller: 'HomeCtrl',
    resolve: {
      icons: function(Icons) {
        return Icons.all();
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});