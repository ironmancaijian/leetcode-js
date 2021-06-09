/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  let ratio = 2
  let max = 1
  while(ratio < n) {
    let x = parseInt(n/ratio)
    let rest = n%ratio
    let m =1 
    for(let i=0;i<x-1;i++) {
      m = (ratio * m)%(1e9+7)
    }
    let max1 = Math.max(m*ratio*rest,  m*(ratio+ (x > 1 ? rest : 0)))
    if(max1 < max) {
      ratio = n
      return
    }
    max = Math.max(max, max1)
    ratio++
  }
  return max
};
const res = cuttingRope(10)
console.log(res)
// console.log(ratio,x, rest, m, ratio+ (x > 1 ? rest : 0))