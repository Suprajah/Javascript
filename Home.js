console.log('Hello');
//alert('heyy'); 
//how to write a comment inline

//variables
var b = 'pie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

/*
var age = prompt('whats your age?');
document.getElementById("some_text").innerHTML = age;
*/

//numbers in JS

var num1 = 5; //5.7 etc
num1 = num1 + 1; //num1++ or num1+= 1 decrement num1-- or num -= 1;

console.log(num1*2); // num1/2, 

// divide /, multiply *, remainder %,
console.log(num1%5) //6 mod 5


/* Functions in JS
1. Create function
2. Call function
*/

//definition
function fun(){
    console.log('This is a function');
}

fun();

/* function that takes your name and says hi <name> */

function hello(){
    var name = prompt(" what's your name?");
    console.log("From hello function");
    alert("Hello "+ name);
}
//hello();

// Arguments in functions
function sumNumbers(num1, num2){
    var result = num1 + num2
    console.log(result);
}

sumNumbers(10,20);
