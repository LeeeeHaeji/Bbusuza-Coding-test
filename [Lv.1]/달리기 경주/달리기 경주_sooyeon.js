function solution(players, callings) {
    
    callings.forEach((v)=>{
        let index = players.indexOf(v);
        if(index != 0){
            players[index] = players[index-1]
            players[index-1] = v;
        }
            
    })
    return players;
}

// 시간초과....
