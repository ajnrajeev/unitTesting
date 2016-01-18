angular
	.module('filterApp', [])
	.filter('starred', function () {
		return function (text) {
			return text.split('').join('*');
		}
	})
	.service('eMailGeneratorRandomService', function(){
		var dns = ['yahoo.com', 'hotmail.com', 'outlook.com', 'accenture.com'];
		var len = dns.length;
		
		function generate(){
			var index = Math.floor(Math.random() * len);
			return dns[index];
		}
		return {
			getMailAddr: function(){
				return generate(name);
			} 
		}
	})
	.filter('eMail', function(eMailGeneratorRandomService){
		return function(text) {
			return text + '@' + eMailGeneratorRandomService.getMailAddr();
		}
	})
	.controller('filterController', function($scope){

	})