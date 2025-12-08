//Odd or Even Program
let num = 10
function isOddOrEven()
{
    for(let i = 0;i<=num;i++)
    {
        if(i%2===0)
        {
            console.log(i+" is a even number")
        }
        else
        {
            console.log(i+" is a odd number")
        }
    }
}
isOddOrEven()
//positive or negative or zero program
function numberType(number)
{
    if(number>0){
        console.log("Positive number and greater than zero")
    }
    else if(number<0){
        console.log("Negative number and lesser than zero")
    }
    else
    {
        console.log("Neutral number and is equal to zero")
    }
}
numberType()
console.log(numberType(10))
console.log(numberType(-1))
console.log(numberType(0))
Student grades program JS
function studentGrade(score)
{
   switch (score) 
   {
    case 100:
        console.log("The grade is A")
        break;
    case 90:
        console.log("The grade is B")
        break;
    case 80:
        console.log("The grade is C")
        break;
    case 70:
        console.log("The grade is D")
        break;
    case 60:
        console.log("The grade is E")
        break;
    default:
        console.log("The grade is F")
        break;
   }
}
console.log(studentGrade(70))
//if-else and switch case prg using JS
let browserName = "Chrome"
function launchBrowser(){
    if(browserName==="Chrome")
    {
        console.log("The browser is a : "+browserName)
    }
    else
    {
        console.log("The browser is not a : "+browserName)
    }
    return launchBrowser;
}
console.log(launchBrowser(browserName))
//switch case program
let testType = "regression"
function runTests(){
   switch(testType) 
   {
   case "smoke":
    console.log(testType+" is the type of testing")
    break
    case "sanity":
    console.log(testType+" is the type of testing")
    break
    case "regression":
    console.log(testType+" is the type of testing")
    break
    default:
    console.log(testType+" smoke is the type of testing ")
    break
   }
   return runTests
}
console.log(runTests(testType))
different ways of function declaration using JS
//Function declaration
function userProfile(name)
{
    name = "Kaviya"
    console.log("Hello "+name+"!")
    return userProfile
}
userProfile()
//Arrow Function
const double = (number) => number*2;
return console.log(double(10))
//Anonymous Function
setTimeout(() => {console.log("This message is delayed by 2 seconds")}, 2000)
//Callback Function
function getUserData(callback)
{
    setTimeout(function() 
    {
       const user = {name : "kaviya", age: 24}
       callback(user)
    }, 3000)
}   
getUserData(function(user)
{
    console.log("the user information is ",user)
})


