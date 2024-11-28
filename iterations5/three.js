// //  
// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greet = "hello world!"

// for (const hi of greet) {
//     console.log(`each char is ${hi}`)
// }
//  Maps

const map = new Map()
map.set('In',"India")
map.set("fr","france")

console.log(map)

for (const [key,value] of map) {
    console.log(key,"--" ,value);
    
}