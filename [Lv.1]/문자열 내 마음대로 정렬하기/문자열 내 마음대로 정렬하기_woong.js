function solution(strings, n) {
    let arr2 = [];
    let answer = [];
    let arr = strings.map((v,i)=>{
      arr2.push(v[n] + v)
    })
    
    arr2.sort()
    
    arr2.map((v,i)=>{
        answer.push(v.slice(1,v.length))
    })
    return answer;
}
