function solution(t, p) {
    let str = t;
    let size = p.length;
    let count = 0;
    
    while(str.length > size-1){
        let num = str.slice(0,size);
       if(num <= p) ++count;
       str = str.slice(1);
    }
        
    return count;
}
