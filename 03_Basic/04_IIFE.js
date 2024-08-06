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

1st ->execute global ececution context//Always made 
->#javascript is single threaded

->Global Execution Constaxt:

->Function Execution Context:

->Eval Execution context:used in the eval mangus

phases:
->memory creation phase/creation phase
->Execution phase
->

#Steps of the js code execution#
1)Global Execuiton
    ->allocated in the this pointer / only this 

2)Memory Phase:
    ->all variable declared as undefined
    ->if function is there in the name of the function contain the function def

3)Execution Phase:
    ->allocation all variable to the values if there given
    ->if there is function then create a new Execution context /threads
        ->if function call is occured then again impliment the step2 and step 3
        ->function return value to Global Execution contect
    ->global execution contact will delete after the execution

Call Stack:
    Global EC add in the stack always
    


*/