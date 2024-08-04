function sayMyname(){
    console.log("suraj");
}

// sayMyname();

function add(number1,number2){
    return number1+number2
}

const result=add(3,4);
// console.log(result);

// function loginUser(username)
// {
//     if (username===undefined) {
//         console.log(`please enter a username`);
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser());
function loginUser(username)
{
    if (!username) {
        console.log(`please enter a username`);
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser("suraj"));



function calculatcartPrice(val1,valu2,...num1){//... is the rest operator in js use to access the multiple values
    return num1
}

// console.log(calculatcartPrice(200,400,500,5655))

const user={
    username:"suraj",
    price : 199
}
function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)

// handleObject({
//  username:"suraj",
// price:199})

function returnSecondvalue(getArray){
    return getArray[0]
}

console.log(returnSecondvalue([100,200,13,45,45,4,54,5,4]));
