const username={
    user :"suraj", 
    price:99,

    welcomeMassage:function(){
        console.log(`${this.user},welcome to website`);
        console.log(this)

    }

}

// username.welcomeMassage()

// console.log(this)//in the broweser global value is the window so output give it the window
function temp(){
    console.log(this)
}
// temp();

const arrow =() =>{
    let username ="suraj"
    console.log(this)
}
// arrow()

//pure arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(56445,8745));

const addTwo=(num1,num2)=> num1+num2 //implicit return

// console.log(addTwo(56445,8745));


