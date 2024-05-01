function solution(numbers) {
    let answer = []
    let arr2 = []
    let arr = numbers.map((v,i)=>{
        arr2.push(v.toString().repeat(3))
    })
    
    arr2.sort().reverse()
    console.log(arr2)
    
    arr2.map((v,i)=>{
        if(v.length===3){
            answer.push(v.slice(0,1))
        }else if(v.length===6){
            answer.push(v.slice(0,2))
        }else if(v.length===9){
            answer.push(v.slice(0,3))
        }else{
            answer.push(v.slice(0,4))
        }
    })
    return answer.join("") == 0 ? "0" : answer.join("");
}
