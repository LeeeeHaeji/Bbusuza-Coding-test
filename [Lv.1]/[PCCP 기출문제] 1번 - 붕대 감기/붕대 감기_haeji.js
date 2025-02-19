function solution(bandage, health, attacks) {
    let max_hp = health,
        now_hp = health,
        time = 1,
        cnt = 0,
        attacks_cnt = 0;
    
    while((now_hp > 0) && (time <= attacks[attacks.length -1][0])){
        // console.log(`시간 : ${time}`)
        if(time === attacks[attacks_cnt][0]){
            now_hp -= attacks[attacks_cnt][1];
            attacks_cnt++; 
            cnt = 0;// 연속 성공 초기화
        } else {
            cnt++;
            now_hp += bandage[1]
            
            if(cnt === bandage[0]){
                now_hp += bandage[2];
                cnt = 0; //연속 성공 초기화
            }
            
            if(now_hp > max_hp){
                now_hp = max_hp;
            }
        }
        time++; // 시간 증가
        // console.log(`현재 체력 : ${now_hp}`)
        // console.log(`연속성공 : ${cnt}`);
        // console.log('------------------------------')
    }
    
    if(now_hp > 0){
        return now_hp;
    } else {
        return -1;
    }
}
