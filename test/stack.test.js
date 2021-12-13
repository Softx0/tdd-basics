class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
}

/** Recordemos que un stack o pila, es donde el primero que entra 
*** es el primero que sale
**/
// 1. First we r goin to give a name to the test suite

describe('My Stack', () => {
    // 2. We can do some test with function 'it()' for the suite, stack

    // 3. Use beforeEach to create an instance before each test
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    // it('is created empty | esta creada vacia');
    // todo method is for pass the test suite cause is a todo
    it('is created empty | esta creada vacia', () => {

        //create an expectation, for the test suite, in this case
        //an stack empty the index going to be -1
        expect(stack.top).toBe(-1);

        //toEqual validate the value equality vs  
        //toBe, that evalueate the reference Object
        expect(stack.items).toEqual({})
    });














    // it('can push to the top | puede agregarse en el inicio');

    // it('can pop off | puede eliminarse');

    
})