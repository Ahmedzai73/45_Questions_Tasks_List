/*

#45_Questions_Tasks_List - Question no: 3

Name Cases: Store a person’s name in a variable, and then print that person’s name in
lowercase, uppercase, and titlecase.

*/
var personName = "Ahmed";
// this is lowercase fonts
console.log("Lowercase:", personName.toLowerCase());
// THIS IS UPPERCASE FONTS
console.log("UPPERCASE:", personName.toUpperCase());
// This is Titlecase Fonts
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
