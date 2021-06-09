/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (root == null) return true

  function dfs(left, right) {
    if (left == null && right != null || (left!=null&&right==null)) return false
    if (left && right && left.val != right.val) return false
    if (left == null && right == null) return true
    return  left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  return dfs(root.left, root.right)
};