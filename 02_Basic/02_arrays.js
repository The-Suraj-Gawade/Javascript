const marvel_heros=["thor","capame","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// all_heros=marvel_heros.concat(dc_heros)

// console.log(all_heros);

// const all_heros = [...marvel_heros,...dc_heros]

const anotherarry=[1,3,34,5,[1,3,5,6,7],6,[1,2,4,[4,5,6]]]

const real_another_array =anotherarry.flat(Infinity)
// console.log(real_another_array)



console.log(Array.isArray("suraj"))
console.log(Array.from({name:"suraj"}))//used for the make array directly insert the name or any number

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));



