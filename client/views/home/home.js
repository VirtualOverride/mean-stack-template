'use strict';

angular
  .module('projectSetup')
  .config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
        });
  });
