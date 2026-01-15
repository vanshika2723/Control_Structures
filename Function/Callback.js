function greet(name,callback)
{console.log("hello"+name);


callback();}
function farewell(){
    console.log("keep it up")
}
greet("alice",farewell)