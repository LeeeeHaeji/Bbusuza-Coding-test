function solution(arr1, arr2) {
    //let answer = new Array(arr1.length).fill([]);
    // 자바스크립트에서 fill([]) 이렇게 쓰면, 바깥 배열 안에 들어가는 모든 빈 배열 []이 사실은 똑같은 하나의 빈 배열을 가리키게 됨
    let answer = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array(arr2[0].length).fill(0);
    }
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2[0].length; j++){
            let temp = 0
            for(let k = 0; k < arr1[0].length; k++){
                temp = temp + (arr1[i][k] * arr2[k][j])
            }
            answer[i][j] = temp
        }
    }
    return answer;
}
