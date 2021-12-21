/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    // code block
    return a + b;
}
let sum = addTwoNumbers (3 , 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    // code block
    return a + b;
}
let sum1 = addTwoNumbers1 (3 , 5);
console.log(sum1);


// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a +b; 
let sum2 = addTwoNumbers1 (3 , 5);
console.log(sum2);

// Implicit Returns, if i want a function that just prints something to console,function that takes no parameteres 
const saySomething = message => console.log(message);
saySomething('Hello Neda!');
/* function that takes no parameteres i should use empty set of paranthesis to say it is a function*/
const sayHello = () => console.log('Hello!')


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is multiple line string!
    </p>`)
    console.log(returnMultipleLines());
    