(function() {
    'use strict';

    angular
        .module('starter.account')
        .run(appRun);

		appRun.$inject = ['routerHelper'];
		
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
					{
						state: 'account',
						config: {
							url: '/account',
		        	templateUrl: 'account/tab-account.html',
							controller: 'AccountCtrl'
						}
					}
        ];
    }
})();
