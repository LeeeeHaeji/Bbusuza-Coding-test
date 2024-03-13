function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const arrLength = rows > cols ? rows : cols;

  const rect = new Array(arrLength).fill(0);
  for(let i = 0; i < arrLength; i++){
    rect[i] = new Array(arrLength).fill(0);
  }

  for(i = 0; i < rows; i++){
    for(j = 0; j < cols; j++){
      rect[i][j] = arr[i][j];
    }
  }

  return rect;
}


solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]])
solution([[57, 192, 534, 2], [9, 345, 192, 999]])
solution([[1, 2], [3, 4]])
