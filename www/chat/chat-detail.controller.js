(function() {
	'use strict';
	angular.module('starter.chat')
	.controller('ChatDetailCtrl', ChatDetailCtrl);

	ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
	
	function ChatDetailCtrl ($scope, $stateParams, Chats) {
			Chats.get($stateParams.chatId)
			.then(
				function(v){ $scope.chat = v },
				function(err) { console.log(err)}
			);
	}

})();