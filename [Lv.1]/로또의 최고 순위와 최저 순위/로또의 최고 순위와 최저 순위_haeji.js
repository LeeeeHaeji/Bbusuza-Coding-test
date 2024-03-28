function solution(lottos, win_nums) {
    let rank = [6,6,5,4,3,2,1]
    
    let min_cnt = win_nums.filter(v => lottos.includes(v)).length
    let zero_cnt = lottos.filter(v => v === 0).length;

    let max_cnt = min_cnt + zero_cnt;
    
    return [rank[max_cnt], rank[min_cnt]];
}
