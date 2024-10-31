// let array1 =[0,1,2,3,4,5,6]

// let array2=[,"utkarsh","kumar","king"]

// console.log(array1+array2)
// console.log(array1[2])

// let array3=new Array(array1+array2)
// console.log(array3)

// array1.push(23)
// array1.pop()
// array1.unshift(9)
// array1.shift()
// console.log(array3[0])
// console.log(array2.includes("kumar"))
// console.log(array2.indexOf("kumar"))
// console.log(array1)
// console.log(array2)
// //////////////slice,splice///////

// let array4=array1.slice(1,3)
// console.log(array1,array4)

// let array5=array1.splice(1,3)
// console.log(array1,array5)

///add///new arrar////push//concat//spread

 let man1=['utkarsh','kumar','king','uk',[12,13,14,15]] 
 let man2=[1,2,3,4,5]

// man1.push(man2)
// console.log(man1)

// // console.log(man1[4][3])

let man3= man1.concat(man2)
console.log(man3)

let man4=[...man1,...man2]
console.log(man4)

let man5=man3.flat(Infinity)
console.log(man5)

console.log(Array.isArray("uk"))
console.log(Array.from("uk"))
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))