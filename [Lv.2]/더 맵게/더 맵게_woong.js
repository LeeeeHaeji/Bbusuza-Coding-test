/*
K 이상으로 만들기 위한 횟수 리턴
배열을 다 돌아도 K이상이 안되면 -1 리턴
while 스코빌 길이
sort 오름차순
배열 제일 앞 + 그 다음 인덱스 × 2
sum += 1
만약 K보다 작다면
Pop
배열 제일 앞 + 전에 더했던 수  × 2
만약 K보다 크거나 같다면 break 
function solution(scoville, K) {
    var answer = 0;
    let mixed = 0;
    scoville = scoville.sort((a,b)=>a-b);
    console.log(scoville.at(-1))
    while(scoville.length){
        if(mixed < K){
         mixed += scoville[0] + scoville[1] * 2;
         scoville.shift();
         scoville.shift();
         answer += 1;
         }else{
             return answer;   
         }
    }
    return -1;
} */
class MinHeap {
    constructor(){
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        // 부모보다 작으면 스왑하면서 위로 올림 (Heapify Up)
        while(currentIndex > 0 && this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]){
            // 스왑
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
            this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
            // 현재 인덱스를 부모로 갱신 (위로 올라감)
            currentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    pop(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        
        while(currentIndex * 2 + 1 < this.heap.length){
            /* 왼쪽 오른쪽 자식 중에서 더 작은 쪽의 인덱스를 고르는 코드 
            왼쪽 자식 인덱스: currentIndex * 2 + 1 
            오른쪽 자식 인덱스: currentIndex * 2 + 2 둘 다 있을 경우 → 더 작은 값을 가진 쪽 선택
            */

            let minChildIndex = currentIndex * 2 + 2 < this.heap.length &&
            this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] 
            ? currentIndex * 2 + 2 
            : currentIndex * 2 + 1;
            
            if(this.heap[currentIndex] < this.heap[minChildIndex]){
                break;
            }
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            currentIndex = minChildIndex;
        }
        return minValue
    }
    peek(){
        return this.heap[0];
    }
}


function solution(scoville, K){
    let answer = 0;
    let minHeap = new MinHeap();
    for (const value of scoville){
        minHeap.push(value);
    }
    
    while(minHeap.size() >= 2 && minHeap.peek() < K){
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixedScov = first + second * 2;
        minHeap.push(mixedScov);
        answer++;
    }
    return minHeap.peek() >= K ? answer : -1;
}

