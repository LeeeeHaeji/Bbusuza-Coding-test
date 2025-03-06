function solution(park, routes) {
    var answer = [];
    let start = [];
    let parkColumns = park[0].length;
    let parkRow = park.length
    const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
    
    // 스타트 지점 찾기
    for(let i = 0; i < parkRow; i++){
        for(let j = 0; j < parkColumns;j++){
            if(park[i][j] == "S"){
                start = [i,j]
            }
        }
    }
    
    
    
    routes.map((v,i)=>{
        // 방향,이동량
        let [dir,distance] = v.split(" ");
        let step = 0;
        distance = parseInt(distance);
        // 내 위치
        let [x,y] = start;
        
        // 한 칸씩 이동해서 배열 바깥으로 나가거나 X를 마주치면 값을 반영하지 않는다
        while(step < distance){
            x += directions[dir][0];
            y += directions[dir][1];
            if(x < 0 || y < 0 || x >= parkRow || y >= parkColumns || park[x][y] == "X"){
                break;
            }
            step++;
        }
        // 유효한 이동일 경우만 업데이트
        if (step === distance) {
            start = [x, y];
        }
        answer = start
    })
    return answer;   
}
