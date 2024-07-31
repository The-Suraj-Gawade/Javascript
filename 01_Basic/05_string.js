const name="suraj"
const repocount=50
// console.log(name+repocount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// new method of the printing the value

const gamename=new String ('suraj-gawade-spg')//new type of the edecled the string
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("s"));

const newString=gamename.substring(0,4)
console.log(newString);
const anothestring=gamename.slice(-8,4)
console.log(anothestring);

 const namestring = "    suraj      ";
 console.log(namestring.trim());//trime the spaces

 const url ="https://suraj.com/suraj%20gawade"
 console.log(url.replace("%20","-"));//replace character



 console.log(gamename.split("-"))





