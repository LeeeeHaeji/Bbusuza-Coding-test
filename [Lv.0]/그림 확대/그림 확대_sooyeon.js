function solution(picture, k) {
    let answer=[]
    picture.forEach(v => {
        const repeat = [...el].map( v => v.repeat(k)).join('')
        for(let i=0; i<k; i++){
            answer.push(repeat)
        }
    })
    return answer
}
