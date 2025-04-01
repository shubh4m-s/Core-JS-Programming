// let keyword : block scoped
let x = 10;
{
  let y = 5;
}
console.log(x);

//const keyword: constant declares the constant value, means it points to the memory location of the variable, that's the reason it can't be changed., it's also block scoped.

var z = 10; 
{
  const z = 10;
}
console.log(z);