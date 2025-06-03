/********************* 
Name of task: 
Task 09 (Functions) 
By Aydin 
Starting date: 28/05/2025 
Purpose: To get my school work done
*********************/
var UserName,UserAge,UserPocketMoney,CurrentYear = "test";

//Variables
GetUserName()
GetUserAge()
GetUserPocketMoney()
GetCurrentYear()
alert(`Hello ${UserName}\nAs of ${CurrentYear} you are ${UserAge} years old\nYou were born in ${(CurrentYear - UserAge)} In 10 years you'll be ${(10 + UserAge)}\nYour current pocket money is ${UserPocketMoney}\nHalf of your money is ${(UserPocketMoney / 2)}`)
console.log(`Hello ${UserName}\nAs of ${CurrentYear} you are ${UserAge} years old\nYou were born in ${(CurrentYear - UserAge)}In 10 years you'll be ${(10 + UserAge)}\nYour current pocket money is ${UserPocketMoney}\nHalf of your money is ${(UserPocketMoney / 2)}`)
/*********************
Main code
*********************/




/********************
Functions
********************/

function GetUserName() {
    UserName = prompt("What is your name");
    console.log(UserName)
}

function GetUserAge() {
    UserAge = prompt("How old are you?")
    console.log(UserAge)
}

function GetUserPocketMoney() {
    UserPocketMoney = prompt("How much pocket money do you have?")
    console.log(UserPocketMoney)
}

function GetCurrentYear() {
    CurrentYear = prompt("What year is it?")
    console.log(CurrentYear)
}