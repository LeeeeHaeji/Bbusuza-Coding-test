/**
arr1   arr2
[1,4], [3,3]
[3,2], [3,3]
[4,1]    
  행     열

// 1행
1*3 + 4*3  // arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0] = 15
1*3 + 4*3  // arr1[0][0] * arr2[0][1] + arr1[0][1] * arr2[1][1] = 15

// 2행
3*3 + 2*3  // arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0] = 15
3*3 + 2*3  // arr1[1][0] * arr2[0][1] + arr1[1][1] * arr2[1][1] = 15

// 3행
4*3 + 1*3  // arr1[2][0] * arr2[0][0] + arr1[2][1] * arr2[1][0] = 15
4*3 + 1*3  // arr1[2][0] * arr2[0][1] + arr1[2][1] * arr2[1][1] = 15

*/

function solution(arr1, arr2) {
    var answer = [[]];
    let test = 0;
    for(let i = 0; i < arr1.length; i++){
        answer[i] = []
        for(let j = 0; j < arr2[0].length; j++){
            answer[i][j] = 0;
            for(let k = 0; k <arr1[0].length; k++){
                // console.log(arr1[i][k]);
                // console.log(arr2[k][j]);
                answer[i][j] += arr1[i][k]*arr2[k][j];       
            }
        }
    }
    return answer;
}
