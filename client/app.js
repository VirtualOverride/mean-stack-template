'use strict';

angular.module('projectSetup', [
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider
    	.otherwise('/');

    $locationProvider
    	.html5Mode(true);

  });
