/**
 각 유저 한 번에 한 명의 유저 신고 (신고 횟수 제한 없음)
 동일 유저에 대한 신고 횟수는 1회 처리
 K번 이상 신고된 유저 = 정지
 return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수
 신고자 피의자  k=2
 muzi frodo
 frodo += 1
 apeach frodo
 frodo += 2 , muzi,apeach
 frodo neo
 neo += 1 
 muzi neo
 neo += 2 , frodo, muzi
 apeach muzi 
 muzi += 1
 
 신고당한 카운트
 신고한 유저가 k번 신고되어 정지된 카운트
 
 * 유저 id : [신고한 유저id1,신고한 유저id2]
 * 신고한 유저id가 k번 신고되었으면 +1  
 */
 
 function solution(id_list, report, k) {
     var answer = [];
     let obj = {};
     let villainCount = {};
             
     report.map((v)=>{
         const complaint = v.split(" ")[0];
         const villain = v.split(" ")[1];
         // 키가 빈값일 때만 값을 빈배열로
         if(obj[complaint] == null){
             obj[complaint] = [];    
         }
         // 같은 값 중복 제거
         if(obj[complaint].includes(villain)){
             return;
         }else{
             obj[complaint].push(villain);    
         }
     })
     // 객체 값 돌면서 신고 횟수 카운트
     Object.values(obj).flat().map((v)=>{
         if(villainCount[v] == null){
             villainCount[v] = 0;
             villainCount[v] += 1;   
         }else{
             villainCount[v] += 1;      
         }
     })
     // 신고 누적 횟수 k 이하 삭제
     id_list.map((v)=>{
         if(villainCount[v] < k){
             delete villainCount[v] 
         }
     })
     // 신고 누적 횟수 k 이상 유저가 내가 신고한 사람이 몇명인지
     const villainName = Object.keys(villainCount); // 신고 누적된 유저 이름만 담긴 배열
     // console.log(villainName)
     id_list.map(v => {
         if(obj[v] == null){
             obj[v] = [];
         }
         
         answer.push(obj[v].filter(v => villainName.includes(v)).length);
     });
 
     return answer;
 }
