//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myJob = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// primitive DataType saved in stack memory while non-primitive Datatypes saved in Heap memory
//and when we access or modify any primitve datatype we get their copy not a a actual vlau so it can remain unchange while in heap memory it will chaged the value directly that is we get the reference of that value 

let score1=score
score1=999
console.log(score1)
console.log(score)



let myJob2=myJob;
myJob2.name="Aditya"

console.log(myJob.name)
console.log(myJob2.name)