function solution(wallpaper) {
    var answer = [];
    let splitArr = wallpaper.map(v=>v.split(""));
    let start = [[],[]];
    let end = [[],[]];
    
    // 파일의 시작점과 끝점이 될 수 있는 점을 각각 배열에 담는다.
    for(let i = 0; i < splitArr.length; i++){
        for(let j = 0; j < splitArr[0].length; j++){
            if(splitArr[i][j] === '#'){
                start[0].push(i);
                start[1].push(j);
                end[0].push(i+1);
                end[1].push(j+1);
            }
        }
    }
    
    answer.push(Math.min(...start[0]))
    answer.push(Math.min(...start[1]))
    answer.push(Math.max(...end[0]))
    answer.push(Math.max(...end[1]))
    
    return answer;
}
