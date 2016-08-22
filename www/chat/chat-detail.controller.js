(function() {
    'use strict';
    angular.module('starter.chat')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

<<<<<<< HEAD
	ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
	
	function ChatDetailCtrl ($scope, $stateParams, Chats) {
			Chats.get($stateParams.chatId)
			.then(
				function(v){ $scope.chat = v },
				function(err) { }
			);
	}
=======
    ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
>>>>>>> origin/master

    function ChatDetailCtrl ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    }

})();
