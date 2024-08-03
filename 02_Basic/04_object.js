// onject singleton

const tinderUser =new Object()
tinderUser.id ="123abc"
tinderUser.name ="sur"
// console.log(tinderUser);

const regularUser ={
    email:"some@gamil",
    fullname:{
        firstname:"some",
        lastname:"another"
    }
}
// console.log(regularUser.fullname.lastname)

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 ={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
// console.log(obj3)

const user =[
    {

    },
    {
        id:1,
        email:"hs$mdfn"
    },
    {

    }

]

user[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('false'));

const course ={
coursename:"jsinhidni",
price:"555",
co_instructor:"i am"

}
const {co_instructor:ci}=course

console.log(ci);



