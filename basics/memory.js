//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// premative use stack (we gat copy of that memory)|

// example of stack

let user1="uk"

let user2=user1

user2="utkarsh"

console.log(user1)
console.log(user2)

// Reference (Non primitive)

// Array, Objects, Functions

// non premative use heap(we get refrence of that memory)

// example of heap

let detial = {
    email:"utkarsh@gmail.com",
    upi:"utkarsh@paytm.com"
}

let newdetail=detial

newdetail.email="utkarsh@hotmail.com"
newdetail.upi="utkarsh@ybl.com"

console.log(detial.email)
console.log(newdetail.email)