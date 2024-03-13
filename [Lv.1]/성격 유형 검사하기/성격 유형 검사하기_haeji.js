function solution(survey, choices) {
    var answer = '';
    let data = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0};
    
    for(i=0; i<survey.length; i++){
        if(choices[i] < 4){
            switch(choices[i]){
                case 1:
                    data[survey[i][0]] += 3;
                    break;
                case 2:
                    data[survey[i][0]] += 2;
                    break;
                case 3:
                    data[survey[i][0]] += 1;
                    break;
            }
        } else {
            switch(choices[i]){
                case 5:
                    data[survey[i][1]] += 1;
                    break;
                case 6:
                    data[survey[i][1]] += 2;
                    break;
                case 7:
                    data[survey[i][1]] += 3;
                    break;
                default:
                    data[survey[i][1]] += 0;
            }
        }
    }

    // 1번지표
    if(data.R < data.T){
        answer += 'T'
    } else {
        answer += 'R'
    }
    // 2번지표
    if(data.C < data.F){
        answer += 'F'
    } else {
        answer += 'C'
    }
    //3번지표
    if(data.J < data.M){
        answer += 'M'
    } else {
        answer += 'J'
    }
    //4번지표
    if(data.A < data.N){
        answer += 'N'
    } else {
        answer += 'A'
    }

    return answer;
}
