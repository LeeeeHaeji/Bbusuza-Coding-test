정답
function solution(arr) {
    let result = [...arr]
    let 행길이 = arr.length
    let 열길이 = arr[0].length
    if(열길이 < 행길이){
        result = arr.map((row)=>{
            return [...row,...new Array(행길이 - 열길이).fill(0)]
        })
    }else if(행길이 < 열길이){
        for(let i = arr.length; i<arr[0].length; i++){
        let newRow = new Array(arr[0].length).fill(0);
            result.push(newRow)
        }
    }else if(열길이 === 행길이){
        return result
    }
    return result
}

틀린 답
function solution(arr) {
  let result = [...arr];
  if (arr[0].length < arr.length) { 
    result = arr.map((row) => { //여기서 틀려서 헤맸습니다..
      row.push(0);
      return row;
    });
  } else if (arr.length < arr[0].length) {
    for (let i = arr.length; i < arr[0].length; i++) {
      let newRow = new Array(arr[0].length).fill(0);
      result.push(newRow);
    }
  } else {
    return result;
  }
  return result;
}
