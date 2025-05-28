// function solution(video_len, pos, op_start, op_end, commands) {
//     var answer = '';
//     const [v_lenHour, v_lenMin] = video_len.split(":");
//     const v_lenSec = (v_lenHour * 60) + parseInt(v_lenMin);
//     const [posHour,posMin] = pos.split(":");
//     let posSec = (posHour * 60) + posMin * parseInt(1);
//     const [opStartHour,opStartMin]= op_start.split(":");
//     const opStartSec = (opStartHour * 60) + opStartMin * parseInt(1);
//     const [opEndHour,opEndMin] = op_end.split(":");
//     const opEndSec = (opEndHour * 60) + parseInt(opEndMin);
    
//     // 오프닝 건너뛰기
//     if(opStartSec <= posSec && posSec <= opEndSec){
//         posSec = opEndSec;
//     }
    
//     // 10초 전,후로 이동
//     commands.map((v,i)=>{
//         if(v === "next"){
//             posSec += 10;
//         }else if(v === "prev"){
//             posSec -= 10;
//         }
//     })
//     // 오프닝 건너뛰기
//     if(opStartSec <= posSec && posSec <= opEndSec){
//         posSec = opEndSec;
//     }

//     if(v_lenSec <= posSec){
//         posSec = v_lenSec;
//     }
    
//     let hour = Math.floor(posSec / 60);
//     if(hour <= 10){
//        hour = "0" + hour
//     }
//     let min = posSec % 60;
//     if(min <= 10){
//        min = "0" + min
//     }

//     answer = hour + ":" + min;
    
//     return answer;
// }
// 테스트 1 〉	실패 (0.22ms, 33.5MB)
// 테스트 2 〉	실패 (0.39ms, 33.5MB)
// 테스트 3 〉	실패 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.14ms, 33.5MB)
// 테스트 6 〉	실패 (0.14ms, 33.4MB)
// 테스트 7 〉	실패 (0.22ms, 33.5MB)
// 테스트 8 〉	통과 (0.19ms, 33.6MB)
// 테스트 9 〉	실패 (0.14ms, 33.6MB)
// 테스트 10 〉	실패 (0.14ms, 33.5MB)
// 테스트 11 〉	통과 (0.14ms, 33.4MB)
// 테스트 12 〉	실패 (0.15ms, 33.4MB)
// 테스트 13 〉	통과 (0.15ms, 33.5MB)
// 테스트 14 〉	통과 (0.22ms, 33.6MB)
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    const [v_lenHour, v_lenMin] = video_len.split(":");
    const v_lenSec = (v_lenHour * 60) + parseInt(v_lenMin);
    const [posHour,posMin] = pos.split(":");
    let posSec = (posHour * 60) +  parseInt(posMin);
    const [opStartHour,opStartMin]= op_start.split(":");
    const opStartSec = (opStartHour * 60) + parseInt(opStartMin);
    const [opEndHour,opEndMin] = op_end.split(":");
    const opEndSec = (opEndHour * 60) + parseInt(opEndMin);
    
    // 오프닝 건너뛰기
    if(opStartSec <= posSec && posSec <= opEndSec){
        posSec = opEndSec;
    }
    
    // 10초 전,후로 이동
    commands.map((v,i)=>{
        if(v === "next"){
            if(v_lenSec - posSec < 10){
                posSec = v_lenSec;
            }else{
                posSec += 10;    
            }
        }else if(v === "prev"){
            if(posSec < 10){
                posSec = 0;
            }else{
                posSec -= 10;   
            }
        }
        // 오프닝 건너뛰기
        if(opStartSec <= posSec && posSec <= opEndSec){
            posSec = opEndSec;
        }
    })
    
    
    
    let hour = Math.floor(posSec / 60);
    if(hour < 10){
       hour = "0" + hour
    }
    
    let min = posSec % 60;
    if(min < 10){
       min = "0" + min
    }

     answer = hour + ":" + min;
    
    return answer;
}
