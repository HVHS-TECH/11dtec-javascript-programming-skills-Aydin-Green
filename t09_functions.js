/********************* 
Name of task: 
Task 09 (Functions) 
By Aydin 
Starting date: 28/05/2025 
Purpose: To get my school work done
*********************/


//Variables
GetUserName()
GetUserAge()
GetUserPocketMoney()
GetCurrentYear()
alert ("Hello " +UserName+ " \nAs of " +CurrentYear+ " you are " +UserAge+ " years old \nYou were born in " +(CurrentYear-UserAge)+ "\nIn 10 years you'll be " +(10+UserAge)+ "\nYour current pocket money is " +UserPocketMoney+ "\nHalf of your money is " +(UserPocketMoney/2))
console.log ("Hello " +UserName+ " As of " +CurrentYear+ " you are " +UserAge+ " years old You were born in " +(CurrentYear-UserAge)+ " In 10 years you'll be " +(10+UserAge)+  " you have " +UserPocketMoney+ " dollars Half of your money is " +(UserPocketMoney/2))
/*********************
Main code
*********************/




/********************
Functions
********************/

function GetUserName() {
    var UserName = prompt ("What is your name") ;
console.log (UserName)
}

function GetUserAge() {
    var UserAge = prompt ("How old are you " + UserName + "?")
console.log (UserAge)
}

function GetUserPocketMoney() {
    var UserPocketMoney = prompt ("How much pocket money do you have?")
console.log (UserPocketMoney)
}

function GetCurrentYear() {
    var CurrentYear = prompt ("What year is it?")
console.log (CurrentYear)
}