(function() {
    'use strict';

    angular
        .module('starter.account')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/tab/dash');
    }

    function getStates() {
        return [{
            state: 'tab.account',
            config: {
                url: '/account',
                views: {
                  'tab-account': {
                      templateUrl: 'account/tab-account.html',
                      controller: 'AccountCtrl'
                  }
              }
            }
        }];
    }
})();
