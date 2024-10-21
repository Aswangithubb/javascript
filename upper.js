str='luminar';
console.log(str.toUpperCase());
//convert to array using Array.from()

console.log(Array.from(str).map(char=>char.toUpperCase()));
Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char));