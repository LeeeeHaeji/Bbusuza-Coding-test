function solution(answers) {
    
    let question = answers.length;
    let first = [];
    let second = [];
    let third = [];
    let count = [0,0,0];
    
    for(i=0; i<answers.length/5; i++){
        first.push(1,2,3,4,5);
    }

    for(i=0; i<answers.length/8; i++){
        second.push(2,1,2,3,2,4,2,5);
    }

    for(i=0; i<answers.length/10; i++){
        third.push(3,3,1,1,2,2,4,4,5,5);
    }
    
    for(let i = 0; i < question; i++)
    {
        if(answers[i] == first[i]) ++count[0];
        if(answers[i] == second[i]) ++count[1];
        if(answers[i] == third[i]) ++count[2];
    }
    
    let maxCount = Math.max(...count);
    let filterMaxCount = count.filter((v) => v === maxCount);
   
    if(filterMaxCount.length === 3 ){
        return [1,2,3];
    }
    else if(filterMaxCount.length === 1 )
    {
        filterMaxCount[0] = count.indexOf(filterMaxCount[0]) + 1;
        return filterMaxCount;
    }
    else 
    {
        let index1 = count.indexOf(filterMaxCount[0]);
        count[index1] = 0;
        let index2 = count.indexOf(filterMaxCount[0]);
        
        if(index1 > index2)
            return [index2+1, index1+1];
        else
            return [index1+1, index2+1];
    }
}
