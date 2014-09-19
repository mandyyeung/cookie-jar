'use strict';

/* Services */

var cookiejarServices = angular.module('cookiejarServices', ['ngResource']);

cookiejarServices.factory('Resource', ['$resource',
  function($resource){
    return $resource('resources/:resourceId.json', {}, {
      query: {method:'GET', params:{resourceId:'resources'}, isArray:true}
    });
  }]);
