function solution(cacheSize, cities) {
    var answer = 0;
    let LRU_cache = [];
    
    for(i=0; i<cities.length; i++){
        cities[i] = cities[i].toLowerCase();
        let idx = LRU_cache.indexOf(cities[i])
        // console.log(`idx : ${idx}`)
        // console.log(`cities : ${cities[i]}`)
        // console.log(LRU_cache)
        
        if(idx > -1){
            // 캐시 안에 존재 할 경우
            let update = LRU_cache.splice(idx,1);
            LRU_cache.push(...update);
            answer++;
        } else {
            if(LRU_cache.length === cacheSize){
                if(cacheSize > 0){
                    LRU_cache.shift();
                    LRU_cache.push(cities[i]); 
                }
            } else {
                LRU_cache.push(cities[i]);
            }
            answer += 5;
        }

        // console.log(`[ ${LRU_cache} ] ${answer}`)
        // console.log('-------------------')
    }

    return answer;
}
