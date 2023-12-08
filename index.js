console.log("Hello world"); //This is a statement that expresses an action to be carried out...i.e,for this we want to log a message 'hello world'(the message is a string) on the console,
   //VARIABLES:
    let name='Mr.Bytes';
    console.log(name);
   //we use the let keyword to declare a varriable.
   //RULES:
   //you cannot use a reserved word e.g let, if, 
   //ensure you use meaningful and descriptive variable labels/names/
    //you cannot start a variable name with a number
    //cannot include a space or hyphen (-)
    //e.g
    let firstName='Augastine';
    let lastName='Mulu';
    let FirstName;
    //Variable names are case sensitive, so the 2 above are different, so always use camel notation; which is small letter and second name i caps like [firstName]
    //The modern best practice is to declare each variable on a separate single line,,not oe line separating with commas.
    
    //CONSTANTS:

let interestRate=0.5;
interestRate=9; //initial value can be changed e.g here from 0.5 to 9
console.log(interestRate);
//when we don't want a variable to change, we do the following i.e we use a constant as it can't change

const compoundRate=7; // We cannot re-assign a constant, so if you wish to re-assign a variable, only use let....
 //initial value cannot be changed e.g here from 0.5 to 9,, so no need for compoundRate=7;
console.log(compoundRate);

//VALUES that we can assign to variables i.e TYPES (Primitives and Reference types);
//the Primitve/Value types are: String, numbers, Booleans, Undefined and null,,,shown below;

let dogName='Kyla';//string literal
let dogAge= 40;//number literal
let isApproved=false;//Boolean literal e.g if purchase order is approved, let it be shipped, which will be True boolean
let dogFirstName=undefined;//undefined literal
let selectedColor=null;//null

console.log(dogName);
console.log(dogAge);
console.log(isApproved);
console.log(dogFirstName);
console.log(selectedColor);

//REFERENCE variable TYPES explained below::
//They include Objects, Arrays, and functions
//an object is like a real object e.g a person is an object, the give them attributes
//...let name='Augastine';
//...let age=50;

//the above will be:
let person={
    personName: 'Augastine',
    personAge: 50
};

console.log(person);


