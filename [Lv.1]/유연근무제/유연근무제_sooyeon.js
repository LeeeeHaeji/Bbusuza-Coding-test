function solution(schedules, timelogs, startday) {
    let late = [0,0,0];
    
    timelogs.forEach((v,i)=>{
        console.log(v)
        let day = startday;
        for(let j = 0; j < v.length; j++){
            
            if(day == 6 || day == 7) {
                ++day;
                continue;
            } else if (day > 7) {
                day -= 7;
            }
            
            let hopeTime = schedules[i];
            console.log(hopeTime)
            
            if (((hopeTime % 100) + 10) >= 60) {
                hopeTime = hopeTime + 10 - 60 + 100;
            } else {
                hopeTime += 10;
            }
            console.log(hopeTime)
            
            
            if( v[j] > hopeTime)
                ++late[i]
            
            ++day
        }
    })
    
    late = late.filter(v => v == 0)
    
    return late.length;
}


// 테스트케이스.. 0개 통과...
