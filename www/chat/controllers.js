(function() {
	'use strict';
	angular.module('starter.chat', [])
	.controller('ChatsCtrl', ChatsCtrl)
	.controller('ChatDetailCtrl', ChatDetailCtrl);

	ChatsCtrl.$inject = ['$scope', 'Chats'];
	function ChatsCtrl($scope, Chats) {
	  // With the new view caching in Ionic, Controllers are only called
	  // when they are recreated or on app start, instead of every page change.
	  // To listen for when this page is active (for example, to refresh data),
	  // listen for the $ionicView.enter event:
	  //
	  //$scope.$on('$ionicView.enter', function(e) {
	  //});
  
	  $scope.chats = Chats.all();
	  $scope.remove = function(chat) {
	    Chats.remove(chat);
	  };
	}

	ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];
	function ChatDetailCtrl ($scope, $stateParams, Chats) {
	  $scope.chat = Chats.get($stateParams.chatId);
	}

})();