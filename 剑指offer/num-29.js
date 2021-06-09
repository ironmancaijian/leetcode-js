
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

//  

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let direction = 'right'
  let res = []
  let row = 0
  let col = 0
  let maxR = matrix.length -1 
  let minR = 0
  let maxC = matrix[0].length -1
  let minC = 0
  while(minR<=maxR&& minC <= maxC) {
    if (direction == 'right' && col <= maxC) {
      res.push(matrix[row][col])
      if (col == maxC) {
        direction = 'bottom'
        row++
        minR++
      } else {
        col++
      }
    }else if (direction == 'bottom'&& row <= maxR) {
      res.push(matrix[row][col])
      if (row == maxR) {
        direction = 'left'
        col--
        maxC--
      } else {
        row++
      }
    }else if (direction == 'left'&& col >= minC) {
      res.push(matrix[row][col])
      if (col == minC) {
        direction = 'top'
        row--
        maxR--
      } else {
        col--
      }
    }else if (direction == 'top'&& row >= minR) {
      res.push(matrix[row][col])
      if (row == minR) {
        direction = 'right'
        col++
        minC++
      } else {
        row--
      }
    } 
  }
  // for(let row = 0; row < matrix.length; row++) {
  //   for(let col = 0; col < matrix[0].length; col++) {
  //     if (direction == 'right') {
  //       res.push(matrix[row][col])
  //     }
  //   }
  // }
  return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))