//nested array
//print all elements, whose values are less than 10
/*a=[
    [1,2],
    [10,22],
    [3,6],
    [5,9],
    [19,18]
]
for(i of a){
    for(j of i){
        if(j<10){
            console.log(j);
        }
    
        
    }
    
    
}
//print pairs whose sum=12
var arr=[2,3,4,5,6,7,8,9,10]
sum=12
counter=1;
for(i of arr){
    counter++;
    for(j of arr){
        if(j+i==sum){
            console.log(`pairs are(${i},${j})`);

    }
}  
}*/
//[id,name,designation,location,salary,experience]
/*
employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1008,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name 
for(i of employee){
    
        console.log(i[1]);
        

}
//2 Print total number of employee

   // console.log(employee.length);


    

//3 Print developer employee details
for(i of employee){
    if(i[2]=="Developer"){
        console.log(i);
        
    }
}
//4 Print all employee details whose salary > 30000
for(i of employee){
    if(i[4]>30000)
        console.log(i);
        
}
//5 Print details of employee Laisha
for(i of employee){
    if(i[1]=="Laisha"){
        console.log(i);
        
    }
}
*/
// Nested array data for customers - details Id, name, place, email, amount
const customerData = [
    [3000, 'John Doe', 'New York', 'john.doe@email.com', 1000],
    [3001, 'Alice Smith', 'Los Angeles', 'alice.smith@email.com', 1200],
    [3002, 'Bob Johnson', 'Chicago', 'bob.johnson@email.com', 800],
    [3003, 'Emily Davis', 'San Francisco', 'emily.davis@email.com', 1500],
    [3004, 'David Lee', 'Houston', 'david.lee@email.com', 1100],
    [3005, 'Sophia Chen', 'Miami', 'sophia.chen@email.com', 900],
    [3006, 'Michael Wilson', 'Seattle', 'michael.wilson@email.com', 1300],
    [3007, 'Emma Brown', 'Dallas', 'emma.brown@email.com', 950],
    [3008, 'Daniel Miller', 'Boston', 'daniel.miller@email.com', 1050],
];

// // Questions for the customer data
// // 1. Print the names of all customers.
// for(i of customerData){
//     console.log(i[1]);
    
// }
// // 2. How many customers are there in the dataset?
// console.log("total number of customers are" +customerData.length);
// // 3. Provide details for customers from the city "Chicago."
// // for(i of customerData){
// //     if(i[2]=="Chicago")
// //         console.log(i);
        
// }
// // 4. Display details for customers with a transaction amount greater than 1000.
// for(i of customerData){
//     if(i[4]>1000){
//         console.log(i)
//     }
// }
// // 5. Retrieve the details of the customer named "David Lee."
// for(i of customerData){
//     if(i[1]=="David Lee"){
//         console.log(i);
//         break;
//     }
// }
// // 6. How many customers have a transaction amount between 900 and 1100?
// for(i of customerData){
//     if(i[4] >900){
//         if(i[4]<1100){
//             console.log(i)
//         }
//     }
// }
// 7. Provide details for customers who are not from New York.
for(i of customerData){
    if(i[2]!="New York"){
        console.log(i)
    }

    
}

// 8. Print the average transaction amount for all customers.
for(i of customerData){
    average+=i[4];
    console.log(average);
    

}
