// var vechile=["Bus","cycle","Car","bike"];
// console.log(vechile.sort());
// console.log(vechile.reverse());
// console.log(vechile.sort((a,b)=>a.localeCompare(b)));
// console.log(vechile.sort((a,b)=>b.localeCompare(a)));

var points=[40,100,1,5,25,10];
//ascending order the numbers
console.log(points.sort((a,b)=>a-b));
//descending order the numbers
console.log(points.sort((a,b)=>b-a));
//lowest number and highest
points.sort((a,b)=>a-b);
console.log("Lowest number",points[0])
console.log("Highest number",points[5]);



