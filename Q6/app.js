"use strict";
/*

#45_Questions_Tasks_List - Question no: 6

Stripping Names: Store a person’s name, and include some whitespace
characters at the beginning and end of the name. Use "\t" (tab) and "\n"
new line) at least once. Print the name once, so the whitespace around the name is displayed.
Then print the name after stripping the white spaces.

*/
// in this variable we add some whitespace on person name
let personName = "\t\n     Ahmed   \t\n";
// Getting Results with console.log
console.log(personName);
// in this console.log we have to clean whitespace so here we are using .trim() property
console.log(personName.trim());
