function solution(babbling) {
// /패턴(pattern)/옵션(flag)
//  /^test/ 처음 나온 test 잡겠다 , /test$/ 마지막에 나온 test 잡겠다 , /^test$/ 처음과 끝이 전부 다 test
//  /./ 모든 문자 하나, /....../ 6글자의 모든 문자 , /h[a-f]llo a부터 f까지 범위
// 부정 /h[^ae]llo/ 대괄호 안에서 쓰는 ^는 not 바깥에서 쓰는 ^는 처음
// /(a|e|o)/ 그룹설정 ex) /.(a|e|o)ll/ = hello도 잡힘
// /(?:)/ 그룹 설정을 하지 않겠다 
// /hello (?=world)/ hello 뒤에 world가 true일 때 잡음 /hello (?!world)/ hello 뒤에 world가 false일 때 잡음
// 수량자 *:앞에 있는 문자가 0개~N개 , +:앞에 있는 문자가 1개~N개 , ?:앞에 있는 문자가 0개~1개
// {3}:3개 , {3,}:3개 이상 , {1,3} 1개 ~ 3개
// 수량자는 서로 호환 가능 * == {0,} | + == {1,} | ? == {0,1}
// 캐릭터 클래스 /\w/gm : 워드 , /\w{5} /gm:5개의 글자와 스페이스 하나 , /\W/gm:not 워드
// /\d/gm:숫자 , /\D/gm:not 숫자 , /\s/gm:스페이스 , /\S/gm:not 스페이스
// 이스케이프 문자: 한 개의 찾을 특수문자 앞에 \ 붙이기

//     ^ (처음과) $ (끝이 모두) + (1개 이상의) ("aya" or "ye" or "woo" or "ma")
    const regex = /^(aya|ye|woo|ma)+$/;
    var answer = 0;
    babbling.forEach((word)=>{
// test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
        // console.log(regex.test(word))
        if(regex.test(word)){
            answer += 1
        }
    })
    return answer;
}
