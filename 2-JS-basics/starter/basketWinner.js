johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;


maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;

avgJohn = (johnScore1 + johnScore2 + johnScore3)/3;
avgMike = (mikeScore1 + mikeScore2 + mikeScore3)/3;
avgMary = (maryScore1 + maryScore2 + maryScore3)/3;

console.log('John\'s average score is ' + avgJohn + ' points');
console.log('Mike\'s average score is ' + avgMike + ' points');
console.log('Mary\'s average score is ' + avgMary + ' points');

if(avgJohn === avgMike){   
    if(avgMary === avgJohn){
        console.log('John, Mike and Mary draw with ' + avgJohn + ' points');
    }
    else if (avgMary > avgJohn){
        console.log('Mary wins with ' + avgMary + ' points');
    }
    else {
        console.log('John and Mike draw with ' + avgJohn + ' points');
    }
}
else if (avgJohn > avgMike){
    if(avgMary === avgJohn){
        console.log('John and Mary draw with ' + avgJohn + ' points');
    }
    else if (avgMary > avgJohn){
        console.log('Mary wins with ' + avgMary + ' points');
    }
    else{
        console.log('John wins with ' + avgJohn + ' points');
    }
}
else if (avgJohn < avgMike){ 
    if(avgMary === avgMike){
        console.log('Mike and Mary draw with ' + avgMary + ' points');
    }
    else if (avgMary > avgMike){
        console.log('Mary wins with ' + avgMary + ' points');
    }
    else{
        console.log('Mike wins with ' + avgMike + ' points');
    } 
}
