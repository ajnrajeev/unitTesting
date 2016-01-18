angular
	.module('userDataApp', ['ngResource'])
	.service('userDataService', function ($http, $resource) {
		var dataUrl = "http://abc.com/userData.php/userData";
		return {
			getTaskData: function(id){
				var localUrl = dataUrl + '?id=:id';
				var res = $resource(localUrl, {id: '@id'});
				return res.get({id: id})
			}, //getTaskData
			getAllTasksData: function(callBack){
				$http.get(dataUrl).success(callBack);
			} //getAllTasksData
		}
	})
	.controller('userDataController', function($scope, userDataService){
		$scope.id = undefined;

		$scope.getTaskData = function(id){
			$scope.task = userDataService.getTaskData(id);
		}
		$scope.getAllTasksData = function(){
			$scope.id = undefined;
			userDataService.getAllTasksData(populateTaskData);
		}
		function populateTaskData(jsonData){
			$scope.tasks = jsonData;
		}
	})