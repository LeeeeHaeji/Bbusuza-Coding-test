function solution(elements) {
    let size = elements.length
    let circleArray = elements.concat(elements);
    let item = 0;
    let sum = [];
    
    // [7,9,1,1,4,  7,9,1,1,4]
    for(let i = 0; i < size; i++)
    {
        let item = circleArray[i];
        sum.push(item);
        
        for(let j = 1; j < size; j++)
        {
            item = item + circleArray[i+j];
            sum.push(item);
        }
    }
    
    const answer = new Set(sum);
    
    return [...answer].length;
}
