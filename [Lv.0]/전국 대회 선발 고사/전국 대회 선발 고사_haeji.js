function solution(rank, attendance) {
    var answer = 0;
    let rank_sort = [];
    let a = 0, b = 0, c = 0;
    
    attendance.map((v,i) => {
        if(v === true){
            rank_sort.push(rank[i]);
        }
    })
    
    rank_sort.sort((a,b) => (a-b))

    a = rank.indexOf(parseInt(rank_sort[0]));
    b = rank.indexOf(parseInt(rank_sort[1]));
    c = rank.indexOf(parseInt(rank_sort[2]));

    return answer = 10000 * a + 100 * b + c;
}
