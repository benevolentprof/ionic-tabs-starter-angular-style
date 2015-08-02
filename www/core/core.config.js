(function() {
	
	'use strict';
	
	angular
		.module('starter.core')
		.value('config', config)
		.config(configure)
		.run(appRun);
		

  var config = {
      appErrorPrefix: '[Ionic Tabs Starter Error] ', //Configure the exceptionHandler decorator
  };

	configure.$inject = ['exceptionHandlerProvider'];
	
  function configure (exceptionHandlerProvider) {
      // Configure the common exception handler
      exceptionHandlerProvider.configure(config.appErrorPrefix);
  }
	
	appRun.$inject = ['$ionicPlatform'];
	
	function appRun($ionicPlatform) {
	  $ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if (window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleLightContent();
	    }
	  });
	}

})();
