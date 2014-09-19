'use strict';

/* App Module */

var cookiejarApp = angular.module('cookiejarApp', [
  'ngRoute',
  'cookiejarAnimations',
  'cookiejarControllers',
  'cookiejarFilters',
  'cookiejarServices'
]);

cookiejarApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/resources', {
        templateUrl: 'partials/resource-list.html',
        controller: 'ResourceListCtrl'
      }).
      when('/resources/:resourceId', {
        templateUrl: 'partials/resource-detail.html',
        controller: 'ResourceDetailCtrl'
      }).
      otherwise({
        redirectTo: '/resources'
      });
  }]);
