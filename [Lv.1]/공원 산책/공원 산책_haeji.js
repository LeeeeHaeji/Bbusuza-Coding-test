function solution(park, routes) {
    let now_point = []; //현재위치
    
    // 시작 지점 찾기
    for(i=0; i<park.length; i++){
        for(j=0; j<park[i].length; j++){
            // console.log(`i: ${i}, j: ${j}`)
            if(park[i][j] === "S"){
                now_point.push(i);
                now_point.push(j);
                
                //반복문 끝내기
                i = park.length-1;
                j = park[i].length-1;
            }
        }
    }
    // console.log(`시작지점 : [ ${now_point} ]`)
    
    for(i=0; i<routes.length; i++){
        let direction = routes[i][0];
        let move = parseInt(routes[i][2]);
        let error = false; //지나가는데에 문제가 있는지 없는지
        
        // console.log(`방향 : ${direction}`);
        // console.log(`이동횟수 : ${move}`)

        // 좌,우로 움직이는 경우 : now_point[1]의 값 변화
        if((direction === "E") || (direction === "W")){
            // 현재 위치에서 움직였을때 문제가 발생하는지 확인
            // 1. 가로로 넘어가는지 확인
            if(direction === "E"){
                if(now_point[1] + move > park[0].length - 1){
                    // console.log('초과')
                    error = true;
                }
            } else {
                if(now_point[1] - move < 0){
                    // console.log('초과');
                    error = true;
                }
            }

            // 2. 장애물이 있는지 확인
            if(!error){
                if(direction === "E"){
                    for(j=1; j<=move; j++){
                        if(park[now_point[0]][now_point[1] + j] === 'X'){
                            // console.log(`문제 위치 : [ ${now_point[0]}, ${now_point[1] + j} ]`);
                            // console.log('장애물 있음');
                            error = true;
                        }
                    }
                } else {
                    for(j=1; j<=move; j++){
                        if(park[now_point[0]][now_point[1] - j] === 'X'){
                            // console.log(`문제 위치 : [ ${now_point[0]}, ${now_point[1] - j} ]`);
                            // console.log('장애물 있음');
                            error = true;
                        }
                    }
                }
            }
            
        
            // 지나가는데에 문제가 없다면
            if(!error){
                if(direction === "E"){
                    now_point[1] += move;
                }
                else{
                    now_point[1] -= move;
                }
            }
        }
        // 위,아래로 움직이는 경우 : now_point[0]의 값 변화
        if((direction === "S") || (direction === "N")){
            // 현재 위치에서 움직였을때 문제가 발생하는지 확인
            // 1. 세로로 넘어가는지 확인
            if(direction === "S"){
                if(now_point[0] + move > park.length - 1){
                    // console.log('초과')
                    error = true;
                }
            } else {
                if(now_point[0] - move < 0){
                    // console.log('초과');
                    error = true;
                }
            }
            
            // 2. 장애물이 있는지 확인
            if(!error){
                if(direction === "S"){
                    for(j=1; j<=move; j++){
                        if(park[now_point[0] + j][now_point[1]] === 'X'){
                            // console.log(`문제 위치 : [ ${now_point[0] + j}, ${now_point[1]} ]`);
                            // console.log('장애물 있음');
                            error = true;
                        }
                    }
                } else {
                    for(j=1; j<=move; j++){
                        if(park[now_point[0] - j][now_point[1]] === 'X'){
                            // console.log(`문제 위치 : [ ${now_point[0] - j}, ${now_point[1]} ]`);
                            // console.log('장애물 있음');
                            error = true;
                        }
                    }
                }
            }

            // 지나가는데에 문제가 없다면
            if(!error){
                if(direction === "S"){
                    now_point[0] += move;
                }
                else{
                    now_point[0] -= move;
                }
            }
        }
        
        // console.log(`현재 위치 : [ ${now_point} ]`)
        // console.log('----------------')
    }
    return now_point;
}
