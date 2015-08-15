(function() {
	
	'use strict';
	
	angular.module('starter.core')
		.factory('Chats', Chats);
	
	Chats.$inject = ['$q'];	
	function Chats($q) {
	  // Might use a resource here that returns a JSON array

	  var service = {
	    all: allChats,
	    remove: removeChat,
	    get: getChat
	  };
		
		return service;
		
		//////////////////
		
		function allChats() {
			return $q.when(chats);
    }
		
		function removeChat(chat) {
      return $q.when(chats.splice(chats.indexOf(chat), 1));
    }
		
		function getChat(chatId) {
			var deferred = $q.defer();
			var message;
			
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
					message = chats[i];
					break;
        }
      }
			if(message){
          deferred.resolve(message);				
			}
			else {
				deferred.reject("No such chat message");
			}
      return deferred.promise;
    }
		
	}
	
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

})();