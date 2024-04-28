function solution(absolutes, signs) {
    let arr = absolutes;
    for(let i = 0; i<absolutes.length; i++){
        if(!signs[i]){
            absolutes[i] -= absolutes[i]*2
        }
    }
    return arr.reduce((a,c)=> a + c ,0);
}
