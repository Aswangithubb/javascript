expr ='23*76+97';
try{
    console.log('try block');
    console.log(eval(expr));
    
    
}
catch(error){
    console.log('catch block');
    console.log('error message: ' + error);
    expr='23*76+97';
    console.log(eval(expr));//1845
    //runtime error solved
    
    
    
}
finally{
    console.log('finally block');
    console.log('always executed');
    
    
}