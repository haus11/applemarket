'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($scope, $modal) {

    $scope.trade = function(){
      var modalInstance = $modal.open({
        templateUrl: '../views/trade2/trade2.html',
        controller: 'ModalCtrl',
        size: 'sm'
      });
    };
  });
