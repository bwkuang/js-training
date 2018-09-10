var john = {
    firstName: 'John',
    mass: 150,
    height: 1.8,
    calculateBmi: function() { this.bmi = this.mass / (this.height * this.height); }
}


var mark = {
    firstName: 'Mark',
    mass: 150,
    height: 1.8,
    calculateBmi: function() { this.bmi = this.mass / (this.height * this.height); }
}

var printHighestBmi = function(person1, person2){
    var msg;

    person1.calculateBmi();
    person2.calculateBmi();

    if(person1.bmi > person2.bmi) {
        msg = person1.firstName + " has the highest BMI with BMI=" + person1.bmi;
    }else if(person1.bmi < person2.bmi) {
        msg = person2.firstName + " has the highest BMI with BMI=" + person2.bmi;
    } else{
        msg = person1.firstName + " and " + person2.firstName + " have the same BMI with BMI=" + person2.bmi;
    }

    return msg;
}
console.log(printHighestBmi(john, mark));