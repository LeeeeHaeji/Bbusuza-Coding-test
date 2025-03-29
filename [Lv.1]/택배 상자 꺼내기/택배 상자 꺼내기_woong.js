function solution(n, w, num) {
    var answer = 0;
    let arr = [];
    let arr2 = [];
    let location = false;
    const nArray = new Array(n).fill().map((v,i)=>i+1)
    
    nArray.map((v,i)=>{
        if(location == false){
            arr2.push(v);
            if(arr2.length == w){
                location = true;
                arr.unshift(arr2);
                arr2 = [];
            }
        }else{
            arr2.unshift(v);
            if(arr2.length == w){
                location = false;
                arr.unshift(arr2);
                arr2 = [];
            }
        }
    })
    arr.unshift(arr2);
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length != w && location){
            while(arr[i].length < w){
                arr[i].unshift("dummy");
            }
        }
        // else if(arr[i].length != w && !location){
        //     while(arr[i].length < w){
        //         arr[i].push("dummy");
        //     }
        // }
    }
    let row;
    let col;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(num) >= 0){
            // console.log(i)
            row = i;
            // console.log(arr[i])
            // console.log(arr[i].indexOf(num))
            col = arr[i].indexOf(num);
        }
    }
    
    for(let i = 0; i <= row; i++){
        if(arr[i][col] >= 1){
            console.log(arr[i][col])
            answer+=1
        }
    }
        
    return answer;
}