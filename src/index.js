
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix===undefined || matrix.length===0) return []
    let result = []
    matrix.map((el,index)=>{
        if (index%2===0) return el.map(innerEl=>result.push(innerEl))
        else return el.reverse().map(innerEl=>result.push(innerEl))
    })
  return result
}
