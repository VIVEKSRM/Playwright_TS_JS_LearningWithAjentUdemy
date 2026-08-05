import { expect, type Locator, type Page } from '@playwright/test';
let message1 : string = "Hello";
message1 = "bye";
console.log(message1);
let age1:number = 20;
console.log(age1);
let isActive : boolean = false;

let numberArry : number[] = [1,2,3];

let data : any = "this could be anything";
data =42;
function add(a:number,b:number): number  // first number is a variable type, second is b variable type and third one is return type of the whole function
{
    return a+b;
}

add(3,4);

let user: {name:string,age:number,location:string} = { name: "Bob",age:34,location:"delhi"};
// use is an object hence we have added these details :  user: {name:string,age:number,location:string} 
user.location = "hyderabad";















