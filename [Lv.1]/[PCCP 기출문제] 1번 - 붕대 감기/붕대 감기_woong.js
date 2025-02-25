// 14,16,18,20 실패

// function solution(bandage, health, attacks) {
//     var answer = 0;
//     let maxHealth = health;
//     let bandageTime = bandage[0];
//     let bandageHealVolume = bandage[1];
//     let bandageBonusHealVolume = bandage[2];
//     let lastAttackTime = attacks[attacks.length-1][0];
//     let nonstopHealSuccessCount = 0;

//     for(let i = 1; i <= lastAttackTime; i++){
//             // 공격 시간이 i와 같다면
//             if(i == attacks[0][0]){
//                 // 체력 = 체력 - 피해량
//                 health = health - attacks[0][1];
//                  // 맞고 체력이 0이하가 된다면
//                 if(0 >= health){
//                     return -1
//                 }
//                 // 다음 공격 index로 넘기기위한 
//                 attacks.shift();
//                 // 연속 회복 카운트 초기화
//                 nonstopHealSuccessCount = 0;
//                 // 공격 시간이 아니라면
//             }else{
//                 // 최대체력보다 현재체력이 적다면
//                 if(health < maxHealth){
//                      // 회복하는데                    
//                     health += bandageHealVolume
//                     // 최대체력보다 더 회복을 한다면
//                     if(maxHealth < health){
//                         // 최대체력으로 바꿔준다
//                         health = maxHealth
//                 }
//                 // 추가회복 카운트를 1 더하고
//                 nonstopHealSuccessCount++;
//                 // 추가회복 카운트가 시전 시간과 같다면
//                 if(nonstopHealSuccessCount == bandageTime){
//                     if(health < maxHealth)
//                      // 추가회복량만큼 회복하는데                    
//                     health += bandageBonusHealVolume
//                     // 최대체력보다 더 회복을 한다면
//                     if(maxHealth < health){
//                         // 최대체력으로 바꿔준다
//                         health = maxHealth
//                     }
//                 }
//             }
//         }
//     }
//     return health
// }

function solution(bandage, health, attacks) {
    var answer = 0;
    let maxHealth = health;
    let bandageTime = bandage[0];
    let bandageHealVolume = bandage[1];
    let bandageBonusHealVolume = bandage[2];
    let lastAttackTime = attacks[attacks.length-1][0];
    let nonstopHealSuccessCount = 0;

    for(let i = 1; i <= lastAttackTime; i++){
            if(i == attacks[0][0]){
                health = health - attacks[0][1];
                if(0 >= health){
                    return -1
                }
                attacks.shift();
                nonstopHealSuccessCount = 0;
                console.log('monsterTime Health' + health)
            }else{
                if(health < maxHealth){        
                    health += bandageHealVolume
                    if(maxHealth < health){
                        health = maxHealth
                }
                nonstopHealSuccessCount++;
                if(nonstopHealSuccessCount == bandageTime){
                    if(health < maxHealth)
                    health += bandageBonusHealVolume
                    if(maxHealth < health){
                        health = maxHealth
                    }
                    // 추가회복을 하고 카운트를 초기화하지 않았다
                    nonstopHealSuccessCount = 0;
                }
            }
                console.log('humanTime Health' + health)
        }
    }
    return health
}
