// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
  if (root == null) return null
  let newRoot = new TreeNode(root.val)
  function dfs(root, newRoot) {
    if (root.left) {
      newRoot.right = new TreeNode(root.left.val)
      dfs(root.left, newRoot.right)
    }
    if (root.right) {
      newRoot.left = new TreeNode(root.right.val)
      dfs(root.right, newRoot.left)
    }
  }
  dfs(root, newRoot)
  return newRoot
};