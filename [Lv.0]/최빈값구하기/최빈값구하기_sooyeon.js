function solution(array) {
  let answer = 0;
  const obj = {};

  // 빈 객체에 입력 받은 배열의 값을 키, 나온 횟수를 값으로 할당
  array.map((item)=>{
    if(Object.keys(obj).includes(`${item}`)){
      obj[`${item}`] = obj[`${item}`] + 1;
    } else {
      obj[`${item}`] = 1;
    }
  })

  // 객체의 값만 모아서 내림차순 정렬
  const values = Object.values(obj);
  const sortValues = values.sort(function (a, b) { return b - a;})

  // 정렬된 값의 첫번째와 두번재 값이 같으면 최빈값이 2개로 -1 반환
  // 값이 다를 경우 key배열에서 최빈값에 해당하는 값을 가진 키를 찾아 출력
  if(sortValues[0] !== sortValues[1]){
    const key = parseInt(Object.keys(obj).find((item)=>obj[item] === sortValues[0]))
    answer = key
  } else {
    answer = -1;
  }

  return answer;
}

solution([1, 2, 3, 3, 3, 4])
solution([1, 1, 2, 2])