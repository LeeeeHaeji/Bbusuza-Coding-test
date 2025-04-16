function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);

    let 유저가_신고한_id = {};
    let 신고당한횟수 = {};
    let 정지된_id = [];
    
    for(i=0; i<id_list.length; i++){
        유저가_신고한_id[`${id_list[i]}`] = [];
        신고당한횟수[`${id_list[i]}`] = 0;
    }
    
    for(i=0; i<report.length; i++){
        report[i] = report[i].split(' ');
        
        // 중복 확인
        if(!유저가_신고한_id[`${report[i][0]}`].includes(report[i][1])){
            유저가_신고한_id[`${report[i][0]}`].push(report[i][1])
        }
    }
    // console.log('유저가 신고한 id : ')
    // console.log(유저가_신고한_id)
    
    const keys = Object.keys(유저가_신고한_id)

    for(i=0; i<keys.length; i++){
        const key = keys[i];
        const value = 유저가_신고한_id[key]
 
        for(j=0; j < value.length; j++){
            신고당한횟수[`${value[j]}`]++;
        }
    }
    
    // console.log('신고당한횟수 : ')
    // console.log(신고당한횟수)
    
    for(i=0; i<keys.length; i++){
        const key = keys[i];
        const value = 신고당한횟수[key]

        if(신고당한횟수[`${key}`] >= k){
            정지된_id.push(key)
        }
    }
    // console.log(`정지된 id : ${정지된_id}`)

    for(i=0; i<keys.length; i++){
        for(j=0; j<정지된_id.length; j++){
            if(유저가_신고한_id[`${keys[i]}`].includes(정지된_id[j])){
                answer[i]++;
            }
        }
    }
    
    return answer;
}
