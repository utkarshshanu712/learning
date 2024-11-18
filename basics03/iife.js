// Immeditiately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB connected`)
}

)();
(function coffe(){
    console.log(`uk`)
})();

((name) => {
    console.log(`My Name is ${name}`);
})(`utkarsh`);
