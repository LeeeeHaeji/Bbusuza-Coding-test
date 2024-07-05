function solution(numbers, hand) {
    var answer = '';
    let right = '#';
    let left = '*';
    const pos = {
        right: [3, 6, 9, '#'],
        left: [1, 4, 7, '*'],
        middle: [2, 5, 8, 0]
    }
    
    for(i of numbers){
        if(pos.right.includes(i)){
            right = i;
            answer += 'R'
        } else if(pos.left.includes(i)){
            left = i;
            answer += 'L'
        } else {
            let mid_pos = pos.middle.indexOf(i);
            let dis_right = 0;
            let dis_left = 0;
            
            if((pos.right.indexOf(right) === -1)&&(pos.left.indexOf(left) === -1)){
                dis_right = Math.abs(pos.middle.indexOf(right) - mid_pos);
                dis_left = Math.abs(pos.middle.indexOf(left) - mid_pos);
            }else if(pos.right.indexOf(right) === -1){
                dis_right = Math.abs(pos.middle.indexOf(right) - mid_pos);
                dis_left = Math.abs(pos.left.indexOf(left) - mid_pos)+1;
            }else if(pos.left.indexOf(left) === -1){
                dis_right = Math.abs(pos.right.indexOf(right) - mid_pos)+1;
                dis_left = Math.abs(pos.middle.indexOf(left) - mid_pos);
            }else {
                dis_right = Math.abs(pos.right.indexOf(right) - mid_pos)+1;
                dis_left = Math.abs(pos.left.indexOf(left) - mid_pos)+1;
            }

            // console.log(`i: ${i}, mid pos: ${mid_pos}`);
            // console.log(`right: ${right}, right pos: ${pos.right.indexOf(right)}`);
            // console.log(`left: ${left}, left pos: ${pos.left.indexOf(left)}`);
            // console.log(`dis_left: ${dis_left}, dis_right: ${dis_right}`);
            
            if(dis_right < dis_left){
                right = i;
                answer += 'R'
            } else if (dis_right > dis_left){
                left = i;
                answer += 'L'
            } else {
                if(hand === 'right'){
                    right = i;
                    answer += 'R'
                }else {
                    left = i;
                    answer += 'L'
                }
            }
        }
        // console.log(`left: ${left}, right: ${right}`)
        // console.log('----------------------')
    }

    return answer;
}
