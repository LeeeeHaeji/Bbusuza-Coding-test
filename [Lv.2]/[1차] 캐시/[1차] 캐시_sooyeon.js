function solution(cacheSize, cities) {
    let cache = []
    let runtime = 0
    
    if(cacheSize == 0)
        return cities.length * 5;
    
   cities.forEach((v)=>{
       
    let city = v.toLowerCase()
    
    if(cache.length < cacheSize && !cache.includes(city)){
        runtime += 5;
        cache.push(city);
    } else if(cache.length == cacheSize && !cache.includes(city)){
        runtime += 5;
        cache = cache.slice(1);
        cache.push(city);
    } else if(cache.includes(city))
    runtime += 1
    cache.splice(cache.indexOf(city),1);
    cache.push(city);    
 })
    return runtime;
}
