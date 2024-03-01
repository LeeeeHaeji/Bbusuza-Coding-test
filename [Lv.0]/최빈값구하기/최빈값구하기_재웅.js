function solution(array) {
    let result = 0;
    let obj = {};
      array.map((value)=>{
        if(Object.keys(obj).includes(value.toString())){
            obj[value] = obj[value] + 1;
        }else{
            obj[value] = 1;
        }
      })
    const values = Object.values(obj).sort((a,b)=>b-a)
    
    if(values[0]!==values[1]){
          return parseInt(Object.keys(obj).find((key)=>obj[key]===values[0]))
    }else{
         return result = -1
    }
}
