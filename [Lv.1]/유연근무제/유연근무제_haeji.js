function solution(schedules, timelogs, startday) {
    var answer = 0;
    let day = startday-1;
    let cnt = new Array(schedules.length).fill(0);
        
    for(i in schedules){
        let admitTime = schedules[i]+10;

        admitTime = String(admitTime).split('')
        let tempMin = admitTime.splice(-2);
        // console.log(admitTime)
        // console.log(tempMin)
        if(parseInt(tempMin[0]) === 6){
            admitTime = parseInt(admitTime.join(''));
            admitTime++;
            tempMin[0] = 0;
            admitTime = String(admitTime).split('')
        }
        
        admitTime = parseInt(admitTime.join('') + tempMin.join(''))
        // console.log(`admitTime: ${admitTime}`)
        for(j=0 ; j<timelogs[i].length; j++){
            day++;
            if(day > 7){
                day = 1;
            }
            // console.log('--------------------')
            // console.log(`day : ${day}`)
            
            if(day >= 6){
                continue;
            }else if(admitTime < timelogs[i][j]){
                // console.log('지각한 직원: ' + i)
                // console.log('지각한 직원의 기준 시간: ' + admitTime);
                // console.log(timelogs[i][j]);                
                cnt[i]++;
            }
        }
    }
    // console.log(`cnt: ${cnt}`)
    return cnt.filter(v => v === 0).length;
}
