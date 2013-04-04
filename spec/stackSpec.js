describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of stack

  it("should has an object type", function() {
    expect(stack).toEqual(jasmine.any(Object));
  });

  it("should have a method named 'remove", function() {
    expect(stack.remove).toEqual(jasmine.any(Function));
  });

  it("should have a defined property named 'length'", function() {
    expect(stack.length).toBeDefined();
  });

  describe("stack.add() function", function() {
 
    it("should add one element to an empty stack", function() {
      stack.add('smth');
      expect(stack.remove()).toEqual('smth');
    });
  
    it("should add new elements to the top", function() {
      j=0;
      while (j<17){
        stack.add('itemWeDontNeed');
        j++;
      };
      stack.add('itemWeNeed');
      expect(stack.remove()).toEqual('itemWeNeed');
    });

    it("should increment the length of a stack by one", function() {
      var len = stack.length;
      stack.add('smth');
      expect(stack.length).toEqual(len+1);
    });

  });

  describe("stack.remove() function", function() {
 
    it("should remove the last item in the stack", function() {
      stack.add('first');
      stack.add('second');
      expect(stack.remove()).toEqual('second');
    });
  
    it("should remove the returned item from the stack", function() {
      var j=0;
      var match = false;
      while (j<17){
        stack.add('clone');
        j++;
      };
      stack.add('unique');
      stack.remove();
      j=0;
      while (j<17){
        if (stack[j]==='unique'){
          match = true;
        };
        j++;
      };

      expect(match).toBeFalsy();
    });

    it("should decrement the length of a stack by one for a non-empty stack", function() {
      stack.add("item");
      var len = stack.length;
      stack.remove();
      expect(stack.length).toEqual(len-1);
    });

    it("should return undefined if the stack is empty", function() {
      expect(stack.remove()).not.toBeDefined();
    });

  });

  describe("stack.length", function() {
 
    it("return 0 for an empty stack", function() {
      expect(stack.length).toEqual(0);
    });
  
    it("should be equal to the number of elements in the stack", function() {
      j=0;
      while (j<17){
        stack.add('clone');
        j++;
      };
      expect(stack.length).toEqual(17);
    });

  });

});