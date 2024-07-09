function solution(n, words) {
    var answer = [0,0];
    let list = [words[0]];

    // 끝말잇기 탈락 규칙
    // 1. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말하지 않았을 시
    // 2. 이전에 등장했던 단어를 사용할 시
    for(i=0; i<words.length-1; i++){
        let last = words[i][words[i].length - 1];
        let first = words[i+1][0];

        //1번에 해당되는지 확인
        if(last !== first){
            answer[1] = Math.ceil((i+2)/n);
            answer[0] = (i+2) - ((Math.ceil((i+2)/n)-1) * n);
            break;
        }

        // 2번에 해당되는지 확인
        if(list.includes(words[i+1])){
            // console.log(`word: ${words[i+1]}, idx: ${i+1}`);
            answer[1] = Math.ceil((i+2)/n);
            answer[0] = (i+2) - ((Math.ceil((i+2)/n)-1) * n);
            break;
        } else {
            list.push(words[i+1]);  
        }
    }
    return answer;
}
