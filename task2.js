// BMI Calculator and Health Category
var weightKg = 75;
var heightMetter = 1.73;
var bmi = weightKg / (heightMetter * heightMetter);

if (bmi < 18.5){
    console.log("you are under weight");
}
else if ((bmi >= 18.5) && (bmi <= 24.9)){
    console.log("you are normal");
}

else if ((bmi >= 25) && (bmi <= 29.9)){
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}