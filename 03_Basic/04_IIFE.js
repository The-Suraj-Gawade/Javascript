//immediately invoked function Expressions (IIFE)
(function fun(){
    console.log("DB cconnected");   
})();//give ; to end the function

// (defination)(execution)// global scope pollution having problem to remove it use iife
(
    ()=>{
        console.log("db connected");
        
    }
)()





//*********************************************************************************************** */

/*Javascript Execution Contact

1st ->execute global ececution context
->Global Execution Constaxt:

->Function Execution Context:

->Eval Execution context:

phases:
->memory creation phase/creation phase
->Execution phase
->

*/