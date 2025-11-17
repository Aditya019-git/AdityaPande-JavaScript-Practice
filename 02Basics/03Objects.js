// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

//object literal way 
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",         //bydefault keys are treated as string but if we declare them as a string we need to access them 
                                              // like line no 22
    [mySym]: "mykey1",                      // value need to be placed in [] brackets for symbol representation 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());