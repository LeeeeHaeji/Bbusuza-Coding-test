function solution(food) {
    let foodList = "";
    let foodFloor = food.map(v => {
        if(v % 2 !== 0){
            return v = v -1 ;
        } else {
            return v;
        }
    });
    for(let i = 1; i< foodFloor.length; i++){
        for(let j = foodFloor[i]; j>0; j = j - 2){
            foodList += i;
        }
    }
    return foodList + 0 + foodList.split("").reverse().join("");
}