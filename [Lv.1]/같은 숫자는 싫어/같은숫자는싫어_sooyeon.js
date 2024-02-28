function solution(arr)
{
    const answer = [];
    arr.map((v,i)=>{
    if(arr[i]!== arr[i-1])
    {
        return answer.push(v);
    }})
    
    return answer;
}