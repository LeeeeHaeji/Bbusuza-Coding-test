function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let pos_min = parseInt(pos.slice(0, 2)),
        pos_sec = parseInt(pos.slice(-2)),
        op_start_min = parseInt(op_start.slice(0, 2)),
        op_start_sec = parseInt(op_start.slice(-2)),
        op_end_min = parseInt(op_end.slice(0, 2)),
        op_end_sec = parseInt(op_end.slice(-2)),
        video_min = parseInt(video_len.slice(0, 2)),
        video_sec = parseInt(video_len.slice(-2));
        
    for(i=0; i<commands.length; i++){
        // 오프닝 구간 확인
        if((op_start_min === pos_min) && (op_end_min === pos_min)){
            if((pos_sec >= op_start_sec) && (pos_sec <= op_end_sec)){
                pos_min = op_end_min;
                pos_sec = op_end_sec;
            }
        } else if((op_start_min === pos_min) && (op_start_sec <= pos_sec)){
            pos_min = op_end_min;
            pos_sec = op_end_sec;
        } else if((op_end_min === pos_min) && (pos_sec <= op_end_sec)){
            pos_min = op_end_min;
            pos_sec = op_end_sec;
        } else if((op_start_min < pos_min) && (pos_min < op_end_min)){
            pos_min = op_end_min;
            pos_sec = op_end_sec;
        }
        // console.log(`${pos_min}:${pos_sec}`)
        
        switch(commands[i]){
            case 'prev':
                if(pos_min === 0 && pos_sec <= 10){
                    pos_sec = 0;
                } else if(pos_sec < 10) {
                    pos_min -= 1;
                    pos_sec += 50; // 60 + pos_sec - 10
                } else {
                    pos_sec -= 10;
                }
                // console.log(`prev: ${pos_min}:${pos_sec}`)
                break;
                
            case 'next':
                if((pos_min === video_min) && ((pos_sec + 10) >= video_sec)){          
                    pos_sec = video_sec;
                }else if(pos_sec >= 50){
                    pos_min += 1;
                    pos_sec -= 50;
                } else {
                    pos_sec += 10;
                }
                
                if((pos_min === video_min) && (pos_sec > video_sec)){
                    pos_sec = video_sec;
                }
                
                // console.log(`next: ${pos_min}:${pos_sec}`)
                break;
                
            default : 
                break;    
        }
    }
    
    if((op_start_min === pos_min) && (op_end_min === pos_min)){
        if((pos_sec >= op_start_sec) && (pos_sec <= op_end_sec)){
            pos_min = op_end_min;
            pos_sec = op_end_sec;
        }
    } else if((op_start_min === pos_min) && (op_start_sec <= pos_sec)){
        pos_min = op_end_min;
        pos_sec = op_end_sec;
    } else if((op_end_min === pos_min) && (pos_sec <= op_end_sec)){
        pos_min = op_end_min;
        pos_sec = op_end_sec;
    } else if((op_start_min < pos_min) && (pos_min < op_end_min)){
        pos_min = op_end_min;
        pos_sec = op_end_sec;
    }
    
    // console.log(`${pos_min}:${pos_sec}`);

    if(pos_min < 10){
        pos_min = '0' + pos_min;
    }
    
    if(pos_sec < 10){
        pos_sec = '0' + pos_sec;
    }
    
    
    return answer = pos_min + ':' + pos_sec;
}
