var name = prompt("Enter Your name Please : ");
var gender = prompt("Enter Your gender :").toLowerCase();
var age = prompt("Enter Your age :)");

function ageChecker(age){
    while (age <= 0){
        if (age <= 0){
            alert("Sorry ! Your age is not valid please enter a valid one (Ex :32)");
            age = prompt("Enter Your age :");
        }
    }
}
age = ageChecker(age);





var greetingMsg = confirm("Would you love to see our greeting message ?");

if (greetingMsg == true && (set(gender) !== null)) {
    alert("Happy to have you here " + set(gender) + name + ".");
} else if(greetingMsg == true && (set(gender) == null)) {
    alert("Happy to have you here " + name + ".");
}









function set(gender) {
    if (gender == "male") {
        var temp = "Mr.";
    } else if (gender == "female") {
        var temp = "Ms.";
    } else {
        var temp = null;
    }
    return temp;
    }
   


    
   
    var firstQuestion = prompt("Do You face any problems fixing your schedule?Yes/No");
var secondQuestion = prompt("Do you know what ToDo list is ?Yes/No");
var thirdQuestion = prompt("Do you already like the website? (answer by Yes or No)");

var answerArr = [firstQuestion, secondQuestion, thirdQuestion];
for (var i = 0; i < answerArr.length; i++){
    if (answerArr[i].length == 0){
        answerArr[i] = "invalid";
    }
    console.log(answerArr[i]);
}
