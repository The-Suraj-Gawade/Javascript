//singleton

//object literals
// Object.create 

const mySymbole=Symbol("key1")//how to add symbol in the object
const JsUser ={
    name:"suraj",
    "full name":"suraj gawade",
    age:17,
    email:"surajgawadeemail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    [mySymbole]:"myKey1"//use int the [] breses


}

console.log(JsUser.email)


console.log(JsUser["email"])

console.log(JsUser["full name"]);

console.log(JsUser[mySymbole]);

JsUser.email="suraj@chat"

// Object.freeze(JsUser)
JsUser.email="suraj@chatgpt"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hellow js user");
    
}

console.log(JsUser.greeting());



