(function() {
    'use strict';

    angular
        .module('starter.layout')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tab',
                config: {
									url: '/tab',
									abstract: true,
									//template: '<ion-view><ion-content><h1>Gesundheit</h1><ui-view/></ion-content></ion-view>'								
                  templateUrl: 'layout/tabs.html'
									//template: '<ui-view/>'
                }
            }
        ];
    }
})();
