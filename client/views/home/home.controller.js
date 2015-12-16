'use strict';

angular
  .module('projectSetup')
  .controller('HomeCtrl', function () {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
