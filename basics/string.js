const name ="utkarsh "
const surname="kumar"

console.log(name + surname+" king ")
console.table([name,surname,'king'])
// do not use this this is old syntyax

console.log(`Hello my Name is ${name} and my Surname is ${surname} and tittle is king `)
// use this

let gamename = new String("utkarsh kumar")
console.log(gamename)
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.fontsize(45))

let New =gamename.substring(0,4)
console.log(New)

let New1=gamename.slice(-6,2)
console.log(New1)

const url ="utkarsh20.com"

console.log(url.replace ('20',30))
const word=gamename.split(" ")
console.log(word[1])

