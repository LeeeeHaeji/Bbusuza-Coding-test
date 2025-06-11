function solution(people, limit) {
  let boat = 0;
  
  people = people.sort((a, b) => b - a);
  
  let start = 0;
  let end = people.length - 1;
  
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      end -= 1;
    }
    start += 1;
    boat += 1;
  }
  return boat;
}
