/**
case 1
cachesize = 3
cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
    [1]   [2]    [3]    [4]    [5]     [6]     [7]     [8]    [9]      [10]
    Jeju Pangyo Seoul  NewYork LA      Jeju    Pangyo  Seoul  NewYork  LA
                        
    (5)  (5)    (5)    (5)     (5)     (5)     (5)     (5)    (5)      (5)
1  jeju  jeju   jeju   NewYork NewYork NewYork Pangyo  Pangyo Pangyo   LA
2        Pangyo Pangyo Pangyo  LA      LA      LA      Seoul  Seoul    Seoul 
3               Seoul  seoul   seoul   Jeju    Jeju    Jeju   NewYork  NewYork

case 2
cachesize = 3
cities = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
    [1]   [2]    [3]   [4]  [5]     [6]   [7]    [8]     [9]
    jeju pangyo seoul jeju pangyo  seoul  jeju   pangyo  seoul
                      *hit *hit    *hit   *hit   *hit    *hit
    (5)  (5)    (5)   (1)  (1)     (1)    (1)    (1)     (1)
1  jeju  jeju   jeju  jeju* jeju   jeju   jeju*  jeju    jeju
2        pangyo pangy pangy pangy *pangy  pangy  pangy*  pangy 
3               seoul seoul seoul  seoul *seoul  seoul   seoul*


*/
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    if(cacheSize === 0){
        return answer = cities.length * 5
    }
    
    for(let i of cities){
        i = i.toLowerCase();
        if(cache.includes(i)){
            // cache.splice(cache.indexOf(i),1);
            cache = cache.filter((v)=> v !== i)
            cache.push(i);
            answer += 1;
        }else{
            if(cache.length < cacheSize){
                cache.push(i);
            }else{
                cache.shift();
                cache.push(i);
            }
            answer += 5;
        }        
    }
    
    return answer;
}
