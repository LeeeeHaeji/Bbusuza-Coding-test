function solution(order) {
    let latte = 0;
    order.map((v)=>{
      if(v.includes("latte")){
        latte ++;
      }
    })
    console.log(latte * 5000 + (order.length - latte) * 4500);
    return (latte * 5000 + (order.length - latte) * 4500);
}

solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])