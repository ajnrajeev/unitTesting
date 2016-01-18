/* Testing an AJAX Service */
describe('Testing userDataService', function () {
	var $httpBackend,
		userDataService;

	beforeEach(module('userDataApp'))
	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
		userDataService = $injector.get('userDataService');

		/* Setup the interceptor */
		$httpBackend
			.when('GET', 'http://abc.com/userData.php/userData')
			/* The actual expected JSON response from the backend server 
			   as expected by TC */
			.respond([{
				taskName: 'Buy Milk'
			}, {
				taskName: 'Buy Cheese'
			}, {
				taskName: 'Buy Flour'
			},{
				taskNme: 'Buy Sugar'
			}]);

		$httpBackend
			.when('GET', 'http://abc.com/userData.php/userData?id=1')
			.respond({
				taskName: 'Buy Milk'
			})
	}))

	it('should get all user tasks', function(){
		$httpBackend.expectGET('http://abc.com/userData.php/userData');
		userDataService.getAllTasksData(function(retData){
			console.log(retData);
		});
		$httpBackend.flush();
	})

	it('should get user task id 1', function(){
		$httpBackend.expectGET('http://abc.com/userData.php/userData?id=1');

		userDataService.getTaskData(1);

		$httpBackend.flush();
	})
	
})

/* Testing a controller with mock service */
describe('Testing userDataController', function(){
	var scope,
		controller,
		userDataService;

	beforeEach(module('userDataApp'));
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();

		userDataService = jasmine.createSpyObj('mySpy',
			['getTaskData', 'getAllTasksData']);
		userDataService.getTaskData.and.returnValue({taskName: 'Buy Milk'});
		userDataService.getAllTasksData.and.returnValue([{
				taskName: 'Buy Milk'
			}, {
				taskName: 'Buy Cheese'
			}, {
				taskName: 'Buy Flour'
			},{
				taskName: 'Buy Sugar'
		}]);
		controller = $controller('userDataController', {
			$scope: scope,
			userDataService: userDataService
		});
	}))

	it('should get all tasks', function(){
		scope.getAllTasksData(function(){});
		expect(userDataService.getAllTasksData).toHaveBeenCalled();
	})

	it('should get task id 1', function(){
		scope.getTaskData(1);
		expect(scope.task).toEqual({taskName: 'Buy Milk'});
		expect(userDataService.getTaskData).toHaveBeenCalled();
	})
})