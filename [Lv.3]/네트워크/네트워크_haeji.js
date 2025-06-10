function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    let que = [];
    let non_connect_num = 0;
    
    // 아무런 연결이 없는 경우 찾기
    computers.forEach((v,i) => {
        if(v.filter(v => v === 1).length === 1){
            non_connect_num++;
            answer++;
            visited[i] = true;
        }
    })
    
    if(non_connect_num === n){
        return n;
    }

    while(visited.indexOf(false) !== -1){
        if(que.length < 1){
            let nextNode = visited.indexOf(false);
            if(nextNode !== -1){
                que.push(nextNode);
            }
        } 

        while(que.length > 0){
            // console.log(`before que: ${que}`)
            let node = que.shift();
            visited[node] = true;

            for(i=0; i<n; i++){
                if((computers[node][i] === 1) && (node !== i) && !visited[i]){
                    que.push(i);
                }
            }

            // console.log(`after que: ${que}`)
            // console.log(`visited: ${visited}`)
            // console.log('-------------------------')
        }
        answer++;
    }

    return answer;
}
