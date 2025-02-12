function solution(sizes) {
    
    let w = []
    let h = []
    
    sizes.forEach((v)=>{
        if(v[0]<v[1]){
           let temp = v[0];
           v[0] = v[1];
           v[1] = temp;
        }
        w.push(v[0]);
        h.push(v[1]);
    })

   return  Math.max(...w) * Math.max(...h)
}


// 과거의 나
function solution(sizes) {
    const w  = [];
    const h = [];

    sizes.forEach(item => {
        return item.sort((a,b)=>a-b,0)
    });

    for(let i = 0; i < sizes.length; i++){        
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }
    return (Math.max(...w) * Math.max(...h));
}

