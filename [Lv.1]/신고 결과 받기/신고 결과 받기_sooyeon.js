function solution(id_list, report, k) {
    let reportCount = new Map();
    let receiveMail = new Array(id_list.length).fill(0);
    let accountLock = [];
    
    // 1. [이용자id,신고자id] 형태로 이중 배열을 만든다.
    let arrReport = new Set(report); // 중복 제거
    arrReport = [...arrReport];
    arrReport = arrReport.map(v=>v.split(' '));

    // 2. 만들어진 이중배열을 순회하며 신고 횟수를 카운트 한다.
    arrReport.forEach((v)=>{
        if(reportCount.get(v[1]) != undefined){
            reportCount.set(v[1], reportCount.get(v[1]) + 1);
        } else{
            reportCount.set(v[1],1);
        }
    })
    
    // 3. 신고 횟수를 확인해 정지된 아이디 분류
    for ( item of reportCount) {
        if(item[1]>=k) accountLock.push(item[0])
    }
    
    // 4. 신고 정보 배열을 순회하며 메일 발송
    arrReport.forEach((v,i)=>{
        for(let j = 0; j < accountLock.length; j++){
            if(v[1] === accountLock[j]){
                let index = id_list.indexOf(v[0]);
                ++receiveMail[index];
            }
        }
        ++i;
    })

    return receiveMail;
}
