function solution(answers) {
    var answer = [];
    const person = ['12345', '21232425' ,'3311224455']
    let true_cnt = new Array(3).fill(0);
    
    for(i=0; i<person.length; i++){
      // 런타임 에러 발생
//         if(answers.length > person[i].length){
//             let repeatCnt = Math.floor(answers.length/person[i].length);
//             let add_num = answers.length%person[i].length;
//             // console.log(repeatCnt)
            
//             if(repeatCnt > 1){
//                 for(j=0; j<repeatCnt-1; j++){
//                     person[i] += person[i]
//                 }
//             }

//             for(j=0; j<add_num; j++){
//                 person[i] += person[i][j]
//             }
//         }
        
        while(answers.length > person[i].length){
            person[i] = person[i].repeat(2); // 과거의 나를 쌔빔... 
        } 
    }
    console.log(person)
    
    for(i=0; i<answers.length; i++){
        for(j=0; j<person.length; j++){
            if(person[j][i] == answers[i]){
                // console.log(`${j+1}번 수포자`)
                // console.log(`person : ${person[j][i]}, answers : ${answers[i]}`)
                true_cnt[j]++;
            }
        }
    }
    
    let max_true_cnt = Math.max(...true_cnt);

    true_cnt.forEach((v, i) => {
        if(v === max_true_cnt){
            answer.push(i+1);
        }
    })
    
    return answer;
}
