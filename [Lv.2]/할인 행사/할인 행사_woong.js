/**
회원자격 10일
매일 한 가지 제품 할인 하나만 구매 가능
ex) 바나나3 사과2 쌀2 돼지2 냄비1
치킨사과사과바나나 쌀 사과 돼지바나나돼지 쌀 냄비 바나나사과 바나나
0   1   2   3   4   5   6   7   8   9  10  11   12   13
            [                                    ]
            
number 총합으로 처음부터 number까지 slice해서 비교하고
없으면 한 칸 앞으로
있으면 answer += 1;

*/
function solution(want, number, discount) {
    var answer = 0;
    let foodArray = [];
    //  want를 number만큼 채운 배열
    for(let i = 0; i < want.length; i++){
        const item = want[i];
        const count = number[i];
        for(let j = 0; j < count; j++){
            foodArray.push(item)
        }
    }
    foodArray = JSON.stringify(foodArray.sort());
    
    const totalNum = number.reduce((acc,cur)=>acc+cur,0);
    for(let i = 0; i < discount.length; i++){
        let targetList = discount.slice(i,totalNum + i).sort();
        if(JSON.stringify(targetList) === foodArray){
              answer += 1;
        }   
    }
    
    
    return answer;
}
