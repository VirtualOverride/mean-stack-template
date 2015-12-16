'use strict';

angular
  .module('projectSetup')
  .config(function ($stateProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'client/views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm' 
        });
  });
