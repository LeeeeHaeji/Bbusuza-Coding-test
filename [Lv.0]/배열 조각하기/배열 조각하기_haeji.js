function solution(arr, query) {
    var answer = [];

    for(i=0; i<query.length; i++){
        if(i%2 === 0){
            // 짝수일 경우
            arr.splice(query[i]+1,arr.length-(query[i]-1));
        } else{
            // 홀수일 경우
            arr.splice(0,query[i]);
        }
    }

   return answer=arr;
}
