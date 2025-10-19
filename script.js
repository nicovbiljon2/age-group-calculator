const age = prompt("Please enter your age: ");

if(age <= 12) {
    console.log("Your age group is: Child!");
} else if(age <= 17) {
    console.log("Your age group is: Teenager!");
} else if (age <= 64) {
    console.log("Your age group is: Adult!");
} else {
    console.log("Your age group is: Senior!");
}
