// reduce()-function apply to all array and return a single value.
a=[1,2,3,4,5,6,7,8,9,10]
console.log(a.reduce((n1,n2) => n1+n2));
console.log(a.reduce((n1,n2) => n1>n2?n1:n2));//highest
console.log(a.reduce((n1,n2) => n1<n2?n1:n2));//lowest

//reduceRight() - function apply to all array elements 
 //and returns a single value(It will first value)

 arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    [3,'ponnu',100],
    [4,'Manu',100],
    [5,'anu',300],
]
// //who got the minimum value
console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));//chinnu first value
console.log(arr.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));//manu last value
