function solution(n, lost, reserve) {
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    lost = lost.filter(v => !reserve.includes(v));
    reserve = reserve.filter(v => !lost.includes(v));

    reserve.forEach(v => {
        if (lost.includes(v - 1)) {
            lost = lost.filter(i => i !== v - 1); // 왼쪽 학생에게 빌려줌
        } else if (lost.includes(v + 1)) {
            lost = lost.filter(i => i !== v + 1); // 오른쪽 학생에게 빌려줌
        }
    });

    return n - lost.length;
}

//테스트 케이스 통과 못함......... 둘 다 안돼서.. 눈물만 흘리는중....
