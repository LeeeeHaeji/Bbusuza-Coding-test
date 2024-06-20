function solution(n, m, section) {
    let cnt = 0;
    let wall = new Array(n).fill(1);
    let idx = 0;

    for(i=0; i<section.length; i++){
        wall[section[i]-1] = 0;
    }

    while(wall.includes(0)){
        idx = wall.indexOf(0)
        for(i=0; i<m; i++){
            wall[idx+i]++;
        }
        cnt++;
    }
    
    return cnt;
}
