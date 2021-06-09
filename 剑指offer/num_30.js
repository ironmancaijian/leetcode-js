// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  let max = this.stack.pop()
  this.stack.push(max)
  return max
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  let min = this.stack.pop()
  let memo = [min]
  while(this.stack.length) {
      const p = this.stack.pop()
      memo.push(p)
      min = Math.min(p, min)
  }
  while(memo.length) {
      this.stack.push(memo.pop())
  }
  return min
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/