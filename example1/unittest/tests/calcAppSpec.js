/* Testing a Service */
describe('Testing calcService', function () {
	var calcService;

	beforeEach(module('calcApp'))
	beforeEach(inject(function($injector){
		calcService = $injector.get('calcService');
	}))
	it('should Add 2 and 3 and return 5', function(){
		expect(calcService.add(2,3)).toBe(6);
	})
	it('should Subtract 7 and 3 and return 4', function(){
		expect(calcService.subtract(7,3)).toBe(4);
	})
	it('should Multiply 2 and 3 and return 6', function(){
		expect(calcService.multiply(2,3)).toBe(6);
	})
	it('should Divide 12 and 4 and return 3', function(){
		expect(calcService.divide(12,4)).toBe(3);
	})
})

/* Testing a controller with mock service */
describe('Testing calcController', function(){
	var scope,
		controller,
		calcService;

	beforeEach(module('calcApp'))

	/* Testing calcController for data set { val1: 3, val2: 3} */
	describe('val1=3, val2=3', function(){
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			calcService = jasmine.createSpyObj('mySpy',
				['add', 'subtract', 'multiply', 'divide']);
			calcService.add.and.returnValue(6);
			calcService.subtract.and.returnValue(0);
			calcService.multiply.and.returnValue(9);
			calcService.divide.and.returnValue(1);
			controller = $controller('calcController', {
				$scope: scope,
				calcService: calcService
			})
		}))

		it('should add 3 and 3 and return 6', function(){
			scope.add(3,3);
			expect(scope.result).toBe(6);
			expect(calcService.add).toHaveBeenCalled();
		})
		it('should subtract 3 and 3 and return 0', function(){
			scope.subtract(3,3);
			expect(scope.result).toBe(0);
			expect(calcService.subtract).toHaveBeenCalled();
		})
		it('should multiply 3 and 3 and return 9', function(){
			scope.multiply(3,3);
			expect(scope.result).toBe(9);
			expect(calcService.multiply).toHaveBeenCalled();
		})
		it('should divide 3 and 3 and return 1', function(){
			scope.divide(3,3);
			expect(scope.result).toBe(1);
			expect(calcService.divide).toHaveBeenCalled();
		})
	})

	/* Testing calcController for data set { val1: 6, val2: 3} */
	describe('val1=6, val2=3', function(){
		var calcService;
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			calcService = jasmine.createSpyObj('mySpy',
				['add', 'subtract', 'multiply', 'divide']);
			calcService.add.and.returnValue(9);
			calcService.subtract.and.returnValue(3);
			calcService.multiply.and.returnValue(18);
			calcService.divide.and.returnValue(2);

			controller = $controller('calcController', {
				$scope: scope,
				calcService: calcService
			})
		}))

		it('should add 6 and 3 and return 9', function(){
			scope.add(6,3);
			expect(scope.result).toBe(9);
			expect(calcService.add).toHaveBeenCalled();
		})
		it('should subtract 6 and 3 and return 3', function(){
			scope.subtract(6,3);
			expect(scope.result).toBe(3);
			expect(calcService.subtract).toHaveBeenCalled();
		})
		it('should multiply 6 and 3 and return 9', function(){
			scope.multiply(6,3);
			expect(scope.result).toBe(18);
			expect(calcService.multiply).toHaveBeenCalled();
		})
		it('should divide 6 and 3 and return 2', function(){
			scope.divide(6,3);
			expect(scope.result).toBe(2);
			expect(calcService.divide).toHaveBeenCalled();
		})
	})
})