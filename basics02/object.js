// // //object///
// // // singleton//

// // //litrels//
// // let mysym = Symbol("key")
// // let obj1={
// //     Name: "utkarsh",
// //     [mysym]:"key",
// //     age:"18",
// //     city:"gaya",
// //     "full name":"utkarsh kumar"
// // }
// // console.log(obj1)
// // console.log(obj1.Name)
// // console.log(obj1["Name"])
// // console.log(obj1["full name"])
// // console.log(obj1[mysym])

// // obj1.city="pryagraj"
// // // Object.freeze(obj1)
// // obj1.city="gaya"
// // console.log(obj1.city)

// // obj1.greet= function(){

// //     console.log(`hello,${this.Name}`);
// // }
// // console.log(obj1.greet());

// //singleton//

// const tinder = new Object()
// // singleton
// const tinderuser={}
// // non singleton
// max=1000
// min=1
// tinder.id=Math.round(Math.random()*(max-min+1)+min)
// tinder.name="harsh"
// tinder.isloggedin=false
// console.log(tinder)
// console.log(tinderuser)

// tinderuser.detial={
//     id:tinder.id,
//     fullname:{
//         firstname:"harsh",
//         lastname:"kumar"
//     }

// }
// console.log(tinderuser.detial.fullname.firstname)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}
console.log(obj1)
const obj3={obj1,obj2}
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

const obj5={...obj1,...obj2}

