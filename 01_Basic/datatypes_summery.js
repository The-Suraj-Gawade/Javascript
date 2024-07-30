// #Primitive

//7 types: String, Number ,Boolean, null(empty), undefined(not having idea about the value but variable is declared and memory is allocated), Symbol(make to Unique),BigInt

const score =100
const scorevalue= 100.3
const islogInn=false
const outsidetemp=null
let usermail=undefined;

const id =Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid);

const bigNumber= 348748974789446554566n //bigInt represent n

console.log(bigNumber);






//Type of Javascript is Dynamics or dynamics?


// #Reference type(Non Primitive) : arrays, Object, Functions

const heros=["iron","cap","thay"]
let myObj={
    name:"suraj",
    age:21,// this is the object within the {}
}
//this is the function also return type is object function
const myFunction=function(){
    console.log("hello tomme");
}

console.log(typeof(5n));
console.log(typeof(myObj));
console.log(typeof(myFunction));
