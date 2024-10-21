//print all vowels in the string
str="hai hello";
vowels=['a','e','i','o','u','A','E','I','O','U'];
console.log(Array.from(str));
Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));
//find the vowels in an array using array method
const strings=["hello",'how','are',"you"];

const vowelscount=strings.map(str=>Array.from(str).filter(char=>'aeiouAEIOU'.includes(char).length));
console.log("NUMBER OF VOWELS IN EACH STRING:",vowelscount);

//[rollno, name, class, markofmaths, markofphy,markofchem]
arr=[
    [1,'manu',12,45,65,70],
    [2,'amal',10,67,86,75],
    [3,'sara',12,86,87,90],
    [4,'vimal',10,86,56,93],
    [5,'shaju',12,56,61,70],
    [6,'kavita',10,55,56,60],
]

//1 sort the student in descending order of markofmaths
console.log(arr.sort((a,b) =>  b[3]-a[3]));

//2 find all students who are in class 10th
const stud = arr.filter(student => student[2]==10);
console.log(stud);


//3 print the names of all students
 const name=arr.map(student =>student[1]);
console.log(name);


//4 print the details of kavita
const detials=arr.find(name => name[1]=="kavita");
console.log(detials);

//5 print 1st student who has least mark in physics 
const studentWithLeastPhy = arr.reduce((min, student) => student[4] < min[4] ? student : min, arr[0]);
console.log("1st Student with Least Mark in Physics:", studentWithLeastPhy);
//6 Find which student have highest mark in Chemistry
//7 Is amal is present or not?
//8 print all students total marks in physics
//9 Display only 10th std students names one by one 
//10 Is there any student who are studing in 11th std?