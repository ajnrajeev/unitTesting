/* Testing a Filter */
describe('Testing filter starred', function () {
	beforeEach(module('filterApp'))

	/* Using inject directly since only one test spec!
	   Filter needsto be appended to filter name for this 
	*/
	beforeEach(inject(){
		
	})
	it('should take in hello and return h*e*l*l*o',
		inject(function(starredFilter){
		expect(starredFilter('hello')).toEqual('h*e*l*l*o')
	}))
})

/* Testing a Filter with dependency */
describe('Testing filter starred', function () {
	var eMailGeneratorRandomService;

	beforeEach(module('filterApp'))

	beforeEach(function(){
		eMailGeneratorRandomService = jasmine.createSpyObj('mySpy', ['getMailAddr']);
		eMailGeneratorRandomService.getMailAddr.and.returnValue('x.com')

		module(function($provide){
			$provide.value('eMailGeneratorRandomService', eMailGeneratorRandomService)
		})
	});

	it('should take in a.b and return a.b@x.com', 
		inject(function(eMailFilter){
		expect(eMailFilter('a.b')).toEqual('a.b@x.com');
	}))
})