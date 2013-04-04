// You should:
// * Implement and test `add`, `remove`, and `length` on `stack` and `queue`.
// * Don't use any `Array` methods or properties except for `array[num]`

// Extra credit:
// * Refactor your code so it doesn't use any `Array`s.

// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
    //fixme
    add : function(newItem){
      queue[queue.length]=newItem;
      queue.length+=1;
    },
    remove : function(){
      var result = queue[0];
      var i=0;
      while (i<=queue.length-2){
        queue[i]=queue[i+1];
        i++;
      };
      queue.length-=1;
      return result;
    },
    length : 0
  };
  return queue;
}