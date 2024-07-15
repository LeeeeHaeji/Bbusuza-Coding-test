function solution(n,a,b)
{
    var answer = 1;
    
    while(n !== 2){
        if((a%2 === 0) && (b%2 === 1)){
            // console.log(`a: ${a}, b: ${b}`);
            if(a-b === 1){
                break;
            } else {
                n = n/2;
                answer++;
                a = a/2;
                b = (b+1)/2;
            }
        } else if((a%2 === 1) && (b%2 === 0)){
            // console.log(`a: ${a}, b: ${b}`);
            if(b-a === 1){
                break;
            } else {
                n = n/2;
                answer++;
                a = (a+1)/2;
                b = b/2;
            }
        } else {
            n = n/2;
            answer++;
            if((a%2 === 0)){
                a = a/2;
                b = b/2;
            } else {
                a = (a+1)/2;
                b = (b+1)/2;
            }
        }
    }
    // console.log(n)
    return answer;
}
