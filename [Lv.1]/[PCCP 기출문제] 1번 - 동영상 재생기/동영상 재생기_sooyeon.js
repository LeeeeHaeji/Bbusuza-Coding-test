function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let time = [video_len, pos, op_start, op_end];
    
    time.forEach((v,i) => {
        time[i] = v.split(":");
        time [i] = parseInt(time[i][0]) * 60 + parseInt(time[i][1]) // 숫자로 변경
    })
    
    let currentPos = time[1]; // 현재 위치
    
    if (currentPos >= time[0]){  // 동영상 길이보다 긴 경우 마지막으로
        currentPos = time[0];
    } else if (currentPos < 0){  // 동영상 시작 시간보다 이전인 경우 처음으로
        currentPos = 0;
    }
    
    if (currentPos >= time[2] && currentPos <= time[3]){ // 오프닝 건너뛰기
        currentPos = time[3];
    } 
    
    commands.forEach((v) => {
        if( v == "prev")
            currentPos -= 10; // 10초 전 이동
        else
            currentPos += 10; // 10초 후 이동

        if (currentPos >= time[0]){  // 동영상 길이보다 긴 경우 마지막으로
            currentPos = time[0];
        } else if (currentPos < 0){  // 동영상 시작 시간보다 이전인 경우 처음으로
            currentPos = 0;
        }
        
        if (currentPos >= time[2] && currentPos <= time[3]){ // 오프닝 건너뛰기
            currentPos = time[3];
        } 
    })

    let minute = parseInt(currentPos / 60) + "";

    if (minute.length == 1)
        minute = "0" + minute;

    let seconds = (currentPos % 60) + "";
    if (seconds.length == 1)
        seconds = "0" + seconds;
    
    
    return minute + ":" + seconds;
}
// 테스트 3 반례
// 입력값 〉 "10:00", "00:03", "00:00", "00:05", ["prev", "next"]
// 기댓값 〉 "00:15"
