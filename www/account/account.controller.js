(function() {
    'use strict';
    angular.module('starter.account')
        .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope'];
    function AccountCtrl($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }
})();
