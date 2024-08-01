function solution(X, Y) {
    var answer = '';
    // let x=Math.max(parseInt(X),parseInt(Y))
    // let y=Math.min(parseInt(X),parseInt(Y))
let x = [...X]
let y = [...Y]
let arr = [];
for(let i of y){
if(x.includes(i)){
            
if (x.indexOf(i) !== -1) {
    arr.push(i)
        x.splice(x.indexOf(i), 1);
            }
            }
       }
    // let set = [new Set (arr.join(""))]
   // let set = [...new Set(arr)].join("")
    //answer = answer.toString();
    
    //console.log(set)
    answer = arr.sort((a,b)=>b-a);
    answer = parseInt(answer.join("")).toString()
  // answer = answer.toString()
    if(arr.length == 0){
        return answer = "-1";
    }
    
    return answer;
}


// 실패.....
