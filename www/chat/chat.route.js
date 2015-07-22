(function() {
    'use strict';

    angular
        .module('starter.chat')
        .run(appRun);

		appRun.$inject = ['routerHelper'];
		
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
					{
						state: 'chats',
						config: {
							url: '/chats',
							templateUrl: 'chat/tab-chats.html',
							controller: 'ChatsCtrl'
						}
					},
					{
						state: 'chat-detail',
						config: {
							url: '/chats/:chatId',
							templateUrl: 'chat/chat-detail.html',
							controller: 'ChatDetailCtrl'
						}
					}
        ];
    }
})();
