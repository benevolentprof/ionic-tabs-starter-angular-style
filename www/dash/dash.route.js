(function() {
    'use strict';

    angular
        .module('starter.dash')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'tab.dash',
            config: {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'dash/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            }
        }];
    }
})();

