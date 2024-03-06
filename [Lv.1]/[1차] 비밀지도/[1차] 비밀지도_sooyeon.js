function solution(n, arr1, arr2) {

  // 첫번째 지도를 2진수로 생성
  let changeArr1 = arr1.map(v => { 
    if(v.toString(2).length !== n){
      let change = v.toString(2)
      for(i=0; change.length < n; i++){
        change = "0".concat(change)
      }
      return change;
    }
      return v.toString(2)
  }); 

  // 2번째 지도를 2진수로 생성
  let changeArr2 = arr2.map(v => { 
    if(v.toString(2).length !== n){
      let change = v.toString(2)
      for(i=0; change.length < n; i++){
        change = "0".concat(change)
      }
      return change;
    }
      return v.toString(2)
  }); 

  // 비밀지도가 되도록 비트 연산
  let makeMap = []

  for(i = 0; i < n; i++){
    let map = (changeArr1[i] | changeArr1[i]).toString();
    makeMap.push(map);
  }

// 연산된 비밀지도를 6자리로 맞춤
let answerNum = makeMap.map(v => { 
  if(v.length !== n){
    let change = v;
    for(i=0; change.length < n; i++){
      change = "0".concat(change)
    }
    return change;
  }
    return v
}); 


// 6자리로 맞춰진 지도를 #과 " "으로 변환
const answer = answerNum.map((v => {
  const num = v.split("")
  num.map((v , i)=> {
    if( v == 1 ){
      return num[i] = "#"
    } else {
      return num[i] = " "
    }
  })
  return num
}))

const replacement = answer.map(v => {
  return v.join().replaceAll(',','')
})
console.log(replacement)
return replacement

}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]);
