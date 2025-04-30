function solution(new_id) {
    let answer = '';

    // 1~3단계
    answer = new_id.toLowerCase().replace(/[^a-z0-9._-]+/g, '')
        .replace(/\.+\s*/g, '.');

    // 4단계
    if(answer[0] === '.'){
        answer = answer.substring(1);
    }
    if(answer[answer.length-1] === '.'){
        answer = answer.substring(0,answer.length-1)
    }

    // 5단계
    if(answer === ''){
        return "aaa"
    }

    // 6단계
    if(answer.length >= 16){
        answer = answer.substring(0,15)
        if(answer[answer.length-1] === '.')
            answer = answer.substring(0,answer.length-1)
    }

    // 7단계
    if(answer.length <= 2){
        while(answer.length < 3){
                answer = answer + answer[answer.length-1]
            }
    }
    return answer;
}
