'use strict';

/**
 * @ngdoc function
 * @name applemarketApp.controller:OffersCtrl
 * @description
 * # OffersCtrl
 * Controller of the applemarketApp
 */
angular.module('applemarketApp')
  .controller('OffersCtrl', function ($scope) {

    $scope.trade = function(){
      var modalInstance = $modal.open({
        templateUrl: '../views/trade/trade.html',
        controller: 'ModalCtrl',
        size: 'sm'
      });
    };
  });
