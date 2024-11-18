const user={
    name: "utkarsh kumar",
    price:999,

welcomeMessage: function(){
console.log(`${this.name},welcome to my website:`)

}
}
user.welcomeMessage()
user.name="sam"
user.welcomeMessage()

function one(){
    let username="kaalu"
    console.log(this)
}

// one()

const chai=()=>{
    let username="shanu"
    console.log(this.username)
}

// chai()

const addtwo =(num1,num2)=>{
    return (num1+num2)*100
}
console.log(addtwo(3,4))

//impleset return//

const addthree =(num3,num4) => (num3 +  num4)
const addfour=({name:"uk"})
console.log(addfour.namename)


