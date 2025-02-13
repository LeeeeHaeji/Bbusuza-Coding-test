// function solution(sizes) {
//     var answer = 0;
//     let left = [];
//     let right = [];
//     let arr = [];
//     sizes.map((v,i)=>{
//         left.push(v[0])
//         right.push(v[1])
//     })

//     console.log(left)
//     console.log(right)
//     let leftMaxNumber = Math.max(...left)
//     let rightMaxNumber = Math.max(...right)
    
//     if(leftMaxNumber > rightMaxNumber){
//         right.splice(right.indexOf(rightMaxNumber),1)
//         rightMaxNumber = Math.max(...right)
//         console.log(right)
//         answer = leftMaxNumber * rightMaxNumber
//     }    
//     return answer;
// }


function solution(sizes) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    
    sizes.map((v,i)=>{
        v.sort((a,b)=>b-a)
        arr1.push(v[0])
        arr2.push(v[1])
    })
    
//    arr.sort((a,b)=>b-a)
 //   answer = arr[0] * arr[arr.length / 2]
    answer = Math.max(...arr1) * Math.max(...arr2)
    return answer;
}
