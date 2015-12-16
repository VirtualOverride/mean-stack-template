'use strict';

angular.module('projectSetup', [
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

  });
