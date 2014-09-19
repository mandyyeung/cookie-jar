'use strict';

/* Controllers */

var cookiejarControllers = angular.module('cookiejarControllers', []);

cookiejarControllers.controller('ResourceListCtrl', ['$scope', 'Resource',
  function($scope, Resource) {
      $scope.resources = Resource.query();
      $scope.orderProp = '-r_id';
  }]);

cookiejarControllers.controller('ResourceDetailCtrl', ['$scope', '$routeParams','Resource',
  function($scope, $routeParams, Resource) {
      $scope.resource = Resource.get({resourceId: $routeParams.resourceId}, function(resource){
        $scope.mainImageUrl = resource.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
