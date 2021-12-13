class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek(){
        return this.items[this.top];
    }

    top() {
        return this.top;
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        this.top -= 1;
    }
}

/** Recordemos que un stack o pila, es donde el ultimo que entra es el primero que entra 
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

    
    it('can push to the top | puede agregarse ?', () => {
        stack.push('🥑')

        // I expect that to be index 0
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');

        stack.push('🍿')
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('🍿');
    });


    it('can pop off | puede eliminarse', () => {
        stack.push('🥑')
        
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');


        stack.pop();
        expect(stack.top).toBe(-1);

    });

})