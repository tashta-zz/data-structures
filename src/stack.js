// You should:
// * Implement and test `add`, `remove`, and `length` on `stack` and `queue`.
// * Don't use any `Array` methods or properties except for `array[num]`

// Extra credit:
// * Refactor your code so it doesn't use any `Array`s.

// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  var stack = {
    add : function(newItem){
      stack[stack.length]=newItem;
      stack.length+=1;
    },
    remove : function(){
      var result = stack[stack.length-1];
      //stack[stack.length] = null;
      stack.length-=1;
      return result;
    },
    length : 0
    
  };
  return stack;
}
