// You should:
// * Implement and test `add`, `remove`, and `length` on `stack` and `queue`.
// * Refactor your code so it doesn't use any `Array`s.

describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of queue

  it("should has an object type", function() {
    expect(queue).toEqual(jasmine.any(Object));
  });

  it("should have a method named 'remove", function() {
    expect(queue.remove).toEqual(jasmine.any(Function));
  });

  it("should have a defined property named 'length'", function() {
    expect(queue.length).toBeDefined();
  });

  describe("queue.add() function", function() {
 
    it("should add one element to an empty queue", function() {
      queue.add('smth');
      expect(queue.remove()).toEqual('smth');
    });
  
    it("should add new elements to the beginning", function() {
      queue.add('itemWeNeed');
      j=0;
      while (j<17){
        queue.add('itemWeDontNeed');
        j++;
      };
      expect(queue.remove()).toEqual('itemWeNeed');
    });

    it("should increment the length of a queue by one", function() {
      var len = queue.length;
      queue.add('smth');
      expect(queue.length).toEqual(len+1);
    });

  });

  describe("queue.remove() function", function() {
 
    it("should remove the first item in the queue", function() {
      queue.add('first');
      queue.add('second');
      expect(queue.remove()).toEqual('first');
    });
  
    it("should remove the returned item from the queue", function() {
      queue.add('unique');
      var j=0;
      var match = false;
      while (j<17){
        queue.add('clone');
        j++;
      };
      queue.remove();
      j=0;
      while (j<17){
        if (queue[j]==='unique'){
          match = true;
        };
        j++;
      };

      expect(match).toBeFalsy();
    });

    it("should decrement the length of a queue by one", function() {
      var len = queue.length;
      queue.remove();
      expect(queue.length).toEqual(len-1);
    });

    it("should return undefined if the queue is empty", function() {
      expect(queue.remove()).not.toBeDefined();
    });

  });

  describe("queue.length", function() {
 
    it("return 0 for an empty queue", function() {
      expect(queue.length).toEqual(0);
    });
  
    it("should be equal to the number of elements in the queue", function() {
      j=0;
      while (j<17){
        queue.add('clone');
        j++;
      };
      expect(queue.length).toEqual(17);
    });

  });

});













