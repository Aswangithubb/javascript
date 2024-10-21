a=[
    [10,50],
    [20,60],
    [1,5],
    [15,25],
    [3,8],
    [100,500]
]

console.log(a);
console.log(a.flat());
// //1 print all numbers > 10 //50,20,60,15,100,500
console.log(a.flat().filter(num=>num>10));

//nested array
const nestedArray=[1,[2,[3,[4,[5]]]]]
console.log(nestedArray.flat(1));//output[ 1, 2, [ 3, [ 4, [Array] ] ] ]
console.log(nestedArray.flat(3));//outut[ 1, 2, 3, 4, [ 5 ] ]  
console.log(nestedArray.flat(Infinity));//output [ 1, 2, 3, 4, 5 ]

//to remove emoty slot in a array (we will use a flat())
const arr=[1, ,[2,3], ,[4,[5,6]]];
console.log(arr.flat());//output [ 1, 2, 3, 4, [ 5, 6 ] ]
