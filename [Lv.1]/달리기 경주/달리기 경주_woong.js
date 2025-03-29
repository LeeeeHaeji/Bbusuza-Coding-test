// 테스트 1 〉	통과 (0.04ms, 33.3MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.18ms, 33.5MB)
// 테스트 4 〉	통과 (0.86ms, 33.6MB)
// 테스트 5 〉	통과 (13.19ms, 34.2MB)
// 테스트 6 〉	통과 (70.61ms, 38MB)
// 테스트 7 〉	통과 (1338.54ms, 41.6MB)
// 테스트 8 〉	통과 (5699.71ms, 47.2MB)
// 테스트 9 〉	실패 (시간 초과)
// 테스트 10 〉	실패 (시간 초과)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	통과 (0.11ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.13ms, 33.4MB)
// function solution(players, callings) {
//     var answer = [];
    
//     for(let i = 0; i < callings.length; i++){
//         players.splice(players.indexOf(callings[i])-1, 0, callings[i])
//         players.splice(players.lastIndexOf(callings[i]),1)
//     }
//     return players;
// }

function solution(players, callings) {
    let hashPlayers = new Map();
    
    for(let i = 0; i < players.length; i++){
        hashPlayers.set(players[i],i); 
        // Map(5) { 'mumu' => 0, 'soe' => 1, 'poe' => 2, 'kai' => 3, 'mine' => 4 }
        // 이름을 key, 인덱스를 value
    }
    
    for(let i = 0; i < callings.length; i++){
        let now = hashPlayers.get(callings[i]); // 3 3 4 4 
        let front = players[now-1]; // poe poe kai kai
        
        
        let temp = players[now];
        players[now] = players[now-1];
        players[now-1] = temp;
        

        hashPlayers.set(callings[i], now-1); // 내 hash value를 -1
        hashPlayers.set(front, hashPlayers.get(front)+1) // 내 앞에 선수의 hash value를 + 1;    
    }
    
    return players;
}