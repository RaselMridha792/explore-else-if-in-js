const mark = 50;
if (mark >= 80){
    console.log("congratulation! you got A+");
}
else if ((mark < 80) || (mark > 70)){
    console.log("you have got A grade");
}
else if ((mark < 70) || (mark > 60)){
    console.log("you have got A-");
}
else if ((mark >=40)){
    console.log("you are passed in the exam and got D grade");
}
else{
    console.log("you are field in the exam");
}