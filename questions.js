// var arr=[10,24,5,43,50,17,2];
// check whether the element(2) is present or not
// var element=2;
// flag=0;
// for (let i of arr) {
//     if(i==element){
//         flag=1;
//         break;
//     }
    
// } 
// console.log(flag==1?"number is found":"number is not found");

//array output sum- array values
var arr=[4,5,6];
sum=15;
for (let i in arr){
    arr[i]=sum-arr[i];
}
console.log(arr);//[11,10,9]