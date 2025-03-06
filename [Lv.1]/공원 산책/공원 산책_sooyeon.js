function solution(park, routes) {
    let arr = []; 
    let current = [];  
    let w;
    let h = park.length;     
        
    for(let i = 0; i<h; ++i){
        arr[i] = park[i].split("");
    }
  
    w = arr[0].length;
    
    for(let i =0; i<h; ++i){
       for(let j = 0; j<w; ++j){
           if(arr[i][j]=="S"){
              current = [i,j]
               break;
           }
       } 
    }
  
    routes.forEach((v)=>{
        let move = v.split(" ");
        let direction = move[0];
        let distance = move[1];
        let isValid = true;
        
        switch(direction){
              case 'E':
                  if(current[1]+distance >= w) isValid = false;
                  else{
                      for(let i = 1; i<=distance; ++i){
                          if(arr[current[0]][current[1]+i] == "X"){
                              isValid = false;
                              break;
                          }
                      }
                      if(isValid) current[1] += distance;
                  }
                  break;
              case 'W':
                  if(current[1]-distance < 0) isValid = false;
                  else{
                      for(let i = 1; i<=distance; ++i){
                          if(arr[current[0]][current[1]-i] == "X"){
                              isValid = false;
                              break;
                          }
                      }
                      if(isValid) current[1] -= distance;
                  }
                  break;
              case 'S':
                  if(current[0]+distance >= h) isValid = false;
                  else{
                      for(let i = 1; i<=distance; ++i){
                          if(arr[current[0]+i][current[1]] == "X"){
                              isValid = false;
                              break;
                          }
                      }
                      if(isValid) current[0] += distance;
                  }
                  break;
              case 'N':
                  if(current[0]-distance < 0) isValid = false;
                  else{
                      for(let i = 1; i<=distance; ++i){
                          if(arr[current[0]-i][current[1]] == "X"){
                              isValid = false;
                              break;
                          }
                      }
                      if(isValid) current[0] -= distance;
                  }
                  break;
        }
    
    })
    
    return current;
}
