/********************* 
Name of task: 
Task 07 (If) 
By Aydin 
Starting date: 15/05/2025 
Purpose: To get my school work done
*********************/


//Variables
var UserName = prompt ("What is your name") ;
console.log (UserName)
var UserAge = prompt ("How old are you " + UserName + "?")
console.log (UserAge)
var UserPocketMoney = prompt ("How much pocket money do you have?")
console.log (UserPocketMoney)
var CurrentYear = prompt ("What year is it?")
console.log (CurrentYear)
alert ("Hello " +UserName+ " \nAs of " +CurrentYear+ " you are " +UserAge+ " years old \nYou were born in " +(CurrentYear-UserAge)+ "\nIn 10 years you'll be " +(10+UserAge)+ "\nYour current pocket money is " +UserPocketMoney+ "\nHalf of your money is " +(UserPocketMoney/2))
console.log ("Hello " +UserName+ " As of " +CurrentYear+ " you are " +UserAge+ " years old You were born in " +(CurrentYear-UserAge)+ " In 10 years you'll be " +(10+UserAge)+  " you have " +UserPocketMoney+ " dollars Half of your money is " +(UserPocketMoney/2))
if (UserPocketMoney >= 2) {
    alert ("you can afford a bar of chocolate")
} else {
    alert ("you can't afford a bar of chocolate")
}
/*********************
Main code
*********************/

  


/********************
Functions
********************/