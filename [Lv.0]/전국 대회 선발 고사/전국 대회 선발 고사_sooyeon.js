function solution(rank, attendance) {
const ranker = rank
let attendanceStudents = rank.filter((v)=> attendance[rank.indexOf(v)] === true)
const sortedAndCut = attendanceStudents.sort().slice(0,3)

console.log(sortedAndCut[2])
console.log(ranker.indexOf(sortedAndCut[0]))

console.log((10000 * sortedAndCut[0]) + (100 * sortedAndCut[1]) + sortedAndCut[2])
return ((10000 * ranker.indexOf(sortedAndCut[0])) + (100 * ranker.indexOf(sortedAndCut[1])) + ranker.indexOf(sortedAndCut[2]))
}

solution([3, 7, 2, 5, 4, 6, 1],[false, true, true, true, true, false, false])
solution([1, 2, 3]	,[true, true, true])

solution([6, 1, 5, 2, 3, 4],[true, false, true, false, false, true])
