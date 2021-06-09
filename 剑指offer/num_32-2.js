// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []
  let nodes = []
  let res = []
  nodes.push(root)
  while(nodes.length) {
    let tres = []
    let nl = nodes.length
    while(nl) {
      let node = nodes.shift()
      if (node.left !== null) {
        nodes.push(node.left)
      }
      if (node.right !== null) {
        nodes.push(node.right)
      }
      tres.push(node.val)
      nl--
    }
    res.push([...tres])
  }
  return res
};