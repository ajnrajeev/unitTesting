/* Testing homeCtrl */
describe('Testing homeCtrl', function () {

	var controller, scope;

	beforeEach(module('learnJasmineApp.ctrls'))
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		controller = $controller('homeCtrl', {$scope: scope})
	}))
	
	it('should group x is hidden', function(){
		expect(scope.isGroupShown('x')).toBe(false);
	})

	it('should show group x', function(){
		expect(scope.isGroupShown('x')).toBe(false);
		scope.toggleGroup('x');
		expect(scope.isGroupShown('x')).toBe(true);
	})

	it('should toggle group x', function(){
		expect(scope.isGroupShown('x')).toBe(false);
		scope.toggleGroup('x');
		scope.toggleGroup('x');
		expect(scope.isGroupShown('x')).not.toBe(true);
	})

	it('should hide group x when group y is shown', function(){
		scope.toggleGroup('x');
		scope.toggleGroup('y');
		expect(scope.isGroupShown('x')).not.toBe(true);
		expect(scope.isGroupShown('y')).toBe(true);
	})
})