/**
 wallpaper = 바탕화면 상태
 (0 = 세로 좌표, 0 =가로좌표)
 . = 빈칸, # = 파일
 S = start(lux, luy)
 E = end(rdx, rdy)
 드래그 한 거리 = (rdx - lux) + (rdy - luy)
 S(0,1) E(3,4)
 (3-0) + (4-1) 최소한의 이동거리
 return [lux,luy,rdx,rdy]
 ----------------------------------------
 *   .#...
     ..#..
     ...#.
 * 가장 작은 인덱스 파일, 가장 큰 인덱스 + 1
 * (?,1,?,4)
 * 파일이 존재하는 최초의 행 = 0
 * (0,1,?,4)
 * 파일이 존재하는 마지막 행 +1 = 3
 * (0,1,3,4)
 ----------------------------------------
 가장 작은 인덱스 파일 찾고 (?,!,?,?)
 파일이 존재하는 최초의 행 찾고 (!,!,?,?)
 가장 큰 파일 찾고 1 더해주고 (!,!,?,!)
 파일이 존재하는 마지막 행 찾고 index에 1 더하기 (!,!,!,!)
 
 테스트 2 〉	실패 (0.17ms, 33.4MB)
 테스트 3 〉	실패 (0.19ms, 33.5MB)
 테스트 8 〉	실패 (0.47ms, 33.5MB)
 테스트 12 〉	실패 (0.33ms, 33.6MB)
 테스트 15 〉	실패 (0.49ms, 33.6MB)
 테스트 18 〉	실패 (0.41ms, 33.4MB)
 테스트 26 〉	실패 (0.30ms, 33.4MB)
 테스트 27 〉	실패 (0.42ms, 33.5MB)
 테스트 28 〉	실패 (0.25ms, 33.6MB)
 테스트 30 〉	실패 (0.63ms, 33.4MB)
 
 */
 
 // function solution(wallpaper) {
 //     var answer = [];
 //     let minIndex;
 //     let firstRow;
 //     let maxIndex;
 //     let lastRow;
     
 //     for(let i = 0;i < wallpaper.length; i++){
 //         for(let j = 0; j < wallpaper[0].length; j++){
 //             // 최초 파일이 있는 행 구하기
 //             if(firstRow == null && wallpaper[i][j] == "#"){
 //                 firstRow = i;
 //             }
 //             // 마지막 파일이 있는 행 + 1 구하기
 //             if(wallpaper[i][j] == "#"){
 //                 lastRow = i+1;
 
 //             }
 //             // 가장 인덱스가 작은 파일 구하기
 //             if(wallpaper[i][j] == "#"){
 //                 if(minIndex == null){
 //                     minIndex = j;
 //                 }else if(minIndex > j){
 //                     minIndex = j;
 //                 }
 //             }
 //             // 가장 인덱스가 큰 파일에 + 1 구하기
 //             if(wallpaper[i][j] == "#"){
 //                 if(maxIndex == null){
 //                     maxIndex = j+1;
 //                 }else if(maxIndex < j){
 //                     maxIndex = j+1;
 //                 }
 //             }
 //         }
 //     }
 //     return [firstRow,minIndex,lastRow,maxIndex];
 // }
 
 function solution(wallpaper) {
     let minIndex=null;
     let firstRow=null;
     let maxIndex=null;
     let lastRow=null;
     
     for(let i = 0;i < wallpaper.length; i++){
         for(let j = 0; j < wallpaper[0].length; j++){
             // 최초 파일이 있는 행 구하기
             if(firstRow == null && wallpaper[i][j] == "#"){
                 firstRow = i;
             }
             // 마지막 파일이 있는 행 + 1 구하기
             if(wallpaper[i][j] == "#"){
                 lastRow = i+1;
 
             }
             // 가장 인덱스가 작은 파일 구하기
             if(wallpaper[i][j] == "#"){
                 if(minIndex === null || minIndex > j) {
                     minIndex = j;
                 }
             }
             // 가장 인덱스가 큰 파일에 + 1 구하기
             if(wallpaper[i][j] == "#"){
                 if(maxIndex === null || maxIndex < j + 1) {
                     maxIndex = j + 1;
                 }
             }
         }
     }
     return [firstRow,minIndex,lastRow,maxIndex];
 }
