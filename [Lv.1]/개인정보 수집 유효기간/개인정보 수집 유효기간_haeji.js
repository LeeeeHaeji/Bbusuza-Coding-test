function solution(today, terms, privacies) {
    var answer = [];
    let obj = {};
    
    for(i=0; i<terms.length; i++){
        terms[i] = terms[i].split(' ')
        // console.log(terms[i])
        obj[terms[i][0]] = terms[i][1]
    }
    // console.log(obj)
    today = today.split('.');
    
    for(i=0; i< privacies.length; i++){
        privacies[i] = privacies[i].split(' ');
        let type = privacies[i].pop();
        // console.log(type);
        // console.log(privacies[i]);
        
        let type_terms = obj[type];
        // console.log(type_terms);
        privacies[i] = privacies[i].join().split('.');
        // console.log(privacies[i])
        let end_month = parseInt(privacies[i][1]) + parseInt(type_terms);
        // console.log('end_month: ' + end_month);

        let end_year = parseInt(privacies[i][0]);
        let end_day = parseInt(privacies[i][2]) - 1;
        
        if(end_day === 0){
            end_day = 28;
            end_month--;
        }
        
        while(end_month > 12){
            end_month = end_month - 12;
            end_year++;     
        }
        
        // console.log('new end_month: ' + end_month);
        // console.log('end_year: ' + end_year);
        
        if(end_year < parseInt(today[0])){
            answer.push(i+1);
        }else if(end_year === parseInt(today[0])){
            if(end_month < parseInt(today[1])){
                answer.push(i+1);
            }else if(end_month === parseInt(today[1])){
                if(end_day < parseInt(today[2])){
                    answer.push(i+1);
                }
            }
        }
    }
    
    return answer;
}
