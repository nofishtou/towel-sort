
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  const result =  matrix.reduce((res, el, index) => {
    if(index % 2 === 1){
        el.reverse().forEach((item) => {
            res.push(item)
        })
    } else {
        el.forEach((item) => {
            res.push(item)
        })
    }

    return res
  }, [])
    
  return result;
}
