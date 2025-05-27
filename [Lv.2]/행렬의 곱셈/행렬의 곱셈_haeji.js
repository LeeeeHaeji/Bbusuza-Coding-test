function solution(arr1, arr2) {
    var answer = [];
    
    // arr1의 열의갯수와 arr2의 행의 갯수가 같다
    let arr1_col = arr1[0].length; // = arr2.length

    for(i=0; i<arr1.length; i++){
        let array = []
        for(j=0; j<arr2[0].length; j++){
            let result = 0
            for(k=0; k<arr1_col; k++){
                // console.log(`i : ${i}, j: ${j}, k : ${k}`)
                // console.log(`arr1: ${arr1[i][k]}, arr2: ${arr2[k][j]}`)
                result += arr1[i][k] * arr2[k][j];
            }
            array.push(result)

            // console.log(`result : ${result}`)
            // console.log(`array : ${array}`)
            // console.log('---------------')
        }
        answer.push(array)
    }

    
    return answer;
}
