let mydate = new Date()
console.log(mydate.toLocaleDateString())
// it gives in format of this 1/2/1923

console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toJSON())

console.log(mydate.toDateString('en-IN',{timeZone: 'Asia/Kolkata'}));

let createnewdate= new Date("01-02-2023")
console.log(createnewdate.toLocaleDateString())

let stamp = Date.now('en-IN',{timeZone:' Aisa/Kolkata'})
let global = Date.now()
console.log(createnewdate.getTime())
console.log(stamp,global)

let newDate = new Date()

console.log(newDate.getMonth(),newDate.getFullYear(),newDate.getTimezoneOffset())