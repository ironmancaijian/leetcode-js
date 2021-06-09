// 剑指 Offer 31. 栈的压入、弹出序列
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  let stack = []
  let pi = 0
  for (let i = 0; i< pushed.length; i++) {
      stack.push(pushed[i])
      while(stack[stack.length-1] == popped[pi] && pi < popped.length) {
          pi++
          stack.pop()
      }
  }
  return pi == popped.length
};
