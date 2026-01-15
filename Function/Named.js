function printnum(){
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    
}
printnum()



//Parameter

function hello(name){
    console.log(name)

}

hello("vanshika")//argument




//Default Parameter

function Hii(name="Guest"){
   
    console.log("hello"+name)
}
Hii("trisha")
Hii()


//Return Keyword

function Multiply(a,b){
    return a*b
}
let a=Multiply(4,5)
console.log(a)