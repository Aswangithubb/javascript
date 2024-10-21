//find total expense,maximum expense,minimum expense
var expenses=[12000,20000,34000,10000,28000,15000,50000]
var totalexp=0;
for (let i of expenses) {
   
totalexp+=i;
    
}
console.log(totalexp);

var maxexp=0;
for(let i of expenses){
    if(maxexp<i){
        maxexp=i;
    }
}
console.log("Maximum expenses" +maxexp);

var minexp=expenses[0];
for(let i of expenses){
    if(minexp>i){
        minexp=i;
    }
}
console.log("minimum expense" +minexp)