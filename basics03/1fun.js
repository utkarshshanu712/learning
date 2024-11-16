//function//
function say(){
console.log("u");
console.log("k");
}

say()
//() this is for execution//
            //parameters//
// function add(num1,num2){
//     if (typeof num1==='number'&& typeof num2==='number')
//    {console.log (num1+num2);}

//     else{return "error: Both arguments must be numbers.";}

// }
// //add()// this is an empty argument 
// add(3,3)//arguments//
// let result=add(3,4)

// console.log("result:",result)

function add (num1,num2){
    let result=num1+num2
    return result


}
let result=add(3, 5)
console.log("result;",result)


function login(username="sam"){
    if(username===undefined){
        console.log("naam dal naam")
        return
    }
    return `${username}just logged in`
}


console.log(login())