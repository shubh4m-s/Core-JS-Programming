//charAt() - returns the char at specified index of the string.

let str = "HELLO WORLD"; 
console.log(str.charAt(6));

//charCodeAt() - returns the code of the char at particular index

console.log(str.charCodeAt(6));

//at() - returns character at the specified index
//the differnce between at() and charAt() is that at() allows negative index

console.log(str.at(7));

//for extracting the part of the string there are 3 methods
//substring(start, end) and slice(start, end)

console.log(str.substring(4, 7));
console.log(str.slice(5, 7));

