function solution(cards1, cards2, goal) {
    let count=0;
    let arr1 = cards1;
    let arr2 = cards2;
    for(let i = 0; i < goal.length; i++)
    {
        if(goal[i]===arr1[0])
        {
            count++;
            arr1 = arr1.slice(1);
        } else if(goal[i]===arr2[0])
        {
            count++;
            arr2 = arr2.slice(1);
        }
    }
    if (count===goal.length)
    {
        return "Yes"
    } else{
        return "No"
    }
}
