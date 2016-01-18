angular
	.module('calcApp', [])
	.service('calcService', function () {
		return {
			add: function(val1, val2){
				return val1 + val2;
			}, //add
			subtract: function(val1, val2){
				return val1 - val2;
			}, //subtract
			multiply: function(val1, val2){
				return val1 * val2;
			}, //multiply
			divide: function(val1, val2){
				return val1 / val2;
			}, //divide
		}
	})
	.controller('calcController', function($scope, calcService){
		$scope.add = function(val1, val2){
			$scope.result = calcService.add(val1, val2);
		}
		$scope.subtract = function(val1, val2){
			$scope.result = calcService.subtract(val1, val2);
		}
		$scope.multiply = function(val1, val2){
			$scope.result = calcService.multiply(val1, val2);
		}
		$scope.divide = function(val1, val2){
			$scope.result = calcService.divide(val1, val2);
		}
	})