/**
 * Created by michael on 9/30/14.
 */
alert("This is the first assignment in relation to the conversion of Sparky\'s age");
//User is asked to enter Sparky's age
var age = prompt("Please enter Sparky\'s age to see how old he is in dog years");
//Sparky's age is calculated in dog years
var dogYears = Number(age) * 7;
//result of calculation is diplayed in console
console.log("Sparky is " + age + " human years, which is " + dogYears + " in dog years.");
//result of calculation is then displayed in document and visible to user
document.write("Sparky is " + age + " human years, which is " + dogYears + " in dog years.");
//alert indicating that we are moving to the second assignment
alert("On to the second assignment!");
//prompt user for number of attendees
var attendees = prompt("I heard you had a pizza party. That\'s always a fun time! How many people were there?");
//prompt user for number of slices per pie
var slicesPerPie = prompt("How many slices are in a single pizza?");
//prompt user for number of pizzas that were ordered
var numberOfPie = prompt("Okay, thanks! Now, how many pizzas were ordered ?");
//calculate how many many slices of pie each person ate
var piePerAttendee = (Number(slicesPerPie) * Number(numberOfPie)) / Number(attendees);
//push the result of equation to console and to the user's visible page
console.log("Each person ate " + piePerAttendee + " slices of pizza at the party.");
document.write(" Each person ate " + piePerAttendee + " slices of pizza at the party.");
//assign remainder the value of the equation
var remainder =  (numberOfPie * slicesPerPie) % attendees;
//Push the result to the console and the page visible to the user
console.log("Sparky got " + remainder + " slices of pizza");
document.write(" Sparky got " + remainder + " slices of pizza");


