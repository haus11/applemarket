'use strict';

/**
 * @ngdoc service
 * @name applemarketApp.notificationService
 * @description
 * # notificationService
 * Service in the applemarketApp.
 */
angular.module('applemarketApp')
  .service('notificationService', function (ngDialog) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      notify: function($scope, type, message) {
        $scope.dialogModel = {};
        $scope.dialogModel.type = type;
        $scope.dialogModel.message = message;

        ngDialog.open({
          template: 'views/dialogs/default.html',
          scope: $scope
        });
      }
    };
  });
