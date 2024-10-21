a=[10,11,12,13,14];
function square(num) {//num=10
    return num**2
}
    console.log(a.map(num=>num*num));//num=10 10*10
    
    //multiply with 1
var number=[65,44,12,4];

console.log(number.map(num=>num*10))
//return new array with the square root of the elements
const numbers=[4,9,16,25]
console.log(numbers.map(num=>Math.sqrt(num)))

//create an array,if number >=5 than do number+1 else number -1
b=[1,2,3,4,5,6,7]

console.log(b.map(num=>num>=5?num+1:num-1));