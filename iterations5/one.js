let myarray=["bat","super","spider"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(`${element} man`)
}
//  break and continue

for (let index = 0; index <= 20; index++) {
    if (index===5) {
        console.log(`Detected ${index}`)
        break
        
    }
    console.log(`${index} this is value of i`)
    
}
for (let index = 0; index <= 20; index++) {
    if (index===5) {
        console.log(`Detected ${index}`)
        continue
        
    }
    console.log(`${index} this is value of i`)
    
}