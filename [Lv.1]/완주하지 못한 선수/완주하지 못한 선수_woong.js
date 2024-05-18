function solution(participant, completion) {
    var answer = '';
    // participant.sort()
    // completion.sort()
    
    // console.log(participant.indexOf(completion[2]));
    // for(let i = 0; i < completion.length; i++){
    //     if(participant.lastIndexOf(completion[i] == -1)){
    //          answer = participant[i]
    //     }
    // }
    
    // for(let i = 0; i < participant.length; i++){
    //     if(participant.includes(completion[i])){
    //         console.log(participant[i])
    //     }
    // }
    // return participant[0];
    
    // let obj = {...participant}
    // let obj2 = {...completion}
    // console.log(obj,obj2)
    // let obj3 = Object.assign(obj, obj2);
    // console.log(obj3)
    
    // Map을 사용하는건 맞는 것 같으니 중복되는 문제를 해결하자 
   //  let map1 = new Map();
   //  // console.log(map1)
   //  completion.map((v,i)=>{
   //      map1.set(i,v);
   //  })
   //  // console.log(map1)
   //  answer = participant.filter(v => {
   //     for(let mapValue of map1.values()){
   //      if(mapValue === v){
   //         return false
   //     }          
   // }
   //     return true
   // })
   //  return answer.toString()
    
//     Map에 넣고 값이 존재하면 지우는 방식으로 중복과 완주 선수를 걸러보자.
    
// 실패.. Key value가 필요하지 않으니 Map 말고 Set을 사용해보자
    // let map1 = new Map();
    // participant.map((v,i)=>{
    //     map1.set(i,v);
    // })
    // for(const [key, value] of map1.entries()){
    //         if(completion.includes(value)){
    //             map1.delete(key)
    //        }else{
    //             answer = value
    //        }
    // }
    // return answer
    
    // Set은 중복을 허용하지 않아서 set1에 "mislav"가 담기지 않는다.다시 Map으로 돌아간다.
    // let set1 = new Set(participant)
    // let set2 = new Set(completion)
    // console.log(set1)
    // console.log(set2)
    // for(const value of set2){
    //     set1.delete(value);
    // }
    // return set1.values().next().value

    const map1 = new Map();
    for(let key of participant){
        map1.set(key, (map1.get(key) || 0) + 1);
    }
    // console.log(map1)
    for (let key of completion) {
        map1.set(key, map1.get(key) - 1);
    }
    // console.log(map1)
    for (let [key,value] of map1){
        if(value !== 0){
            return key
        }
    }
    // console.log(map1)
}
