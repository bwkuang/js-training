var calculateTipJohn = function(billValue){
    if(billValue < 50) {return billValue * 0.2;}
    else if (billValue >= 50 && billValue <= 200) {return billValue * 0.15;}
    else {return billValue * 0.1;}
}

var calculateFinalBillJohn = function(billValue){
    return billValue + calculateTipJohn(billValue); 
}

var calculateTipMark = function(billValue){
    if(billValue < 100) {return billValue * 0.2;}
    else if (billValue >= 100 && billValue <= 300) {return billValue * 0.1;}
    else {return billValue * 0.25;}
}

var calculateFinalBillMark = function(billValue){
    return billValue + calculateTipMark(billValue); 
}

var billJohn = [124, 48, 268];
var billMark = [77, 375, 110, 45];

var tipsJohn = new Array();
var finalBillsJohn = new Array();
var tipsMark = new Array();
var finalBillsMark = new Array();


var fillTipJohn = function(){
    for(var i=0; i < billJohn.length ;i++)
    tipsJohn.push(calculateTipJohn(billJohn[i]));
}

var fillTipMark = function(){
    for(var i=0; i < billMark.length ;i++)
    tipsMark.push(calculateTipMark(billMark[i]));
}

var fillFinalBillJohn = function(){
    for(var i=0; i < billJohn.length ;i++)
    finalBillsJohn.push(calculateFinalBillJohn(billJohn[i]));
}

var fillFinalBillMark = function(){
    for(var i=0; i < billMark.length ;i++)
    finalBillsMark.push(calculateFinalBillMark(billMark[i]));
}

var calculateAvg = function(myArray){
    avg =0;
    for(var i=0; i < myArray.length ;i++){
        avg += myArray[i];
    }
    
    return avg / myArray.length;
}

var printHighestTips = function(){
    var avgJohn = calculateAvg(tipsJohn);
    var avgMark = calculateAvg(tipsMark);
    if(avgJohn > avgMark){
        console.log("John tips more with an avg of " + avgJohn);
    }
    if(avgJohn < avgMark){
        console.log("Mark tips more with an avg of " + avgMark);
    }
    else{
        console.log("John and Mark tip the same with an avg of " + avgMark);
    }
}

fillTipJohn(billJohn);
fillTipMark(billMark);
fillFinalBillJohn();
fillFinalBillMark();

console.log(tipsJohn);
console.log(finalBillsJohn);
console.log(tipsMark);
console.log(finalBillsMark);
printHighestTips();