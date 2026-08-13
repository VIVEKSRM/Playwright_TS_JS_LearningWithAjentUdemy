const person={
    name:"Rahul",
    age:30,
    isActive:true,
    hobbies:["Sports","Cooking"],
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY"
    },
    text1 : function(){  //annonymous function, we can also use arrow function here, but we cannot use arrow function here because arrow function does not have its own this keyword, so we cannot access the properties of the object using this keyword in arrow function.
        return 'My name is '+this.name +' and I am '+this.age +' years old.';
    }
}
console.log('Test1 :- ' + person.text1());
console.log('Test2 :- ' + person.address.street);
console.log('Test3 :- ' + person.hobbies[0]);
console.log('Test4 :- ' + person.name + ', ' + person.age + ', ' + person.isActive + ', ' + person.hobbies + ', ' + person.address);

function Test1(){


    let a=9;
   const b=10;
   a=3;
    console.log(a);
    console.log(b); 
    console.log(a+b);
}
Test1();

function Test2(){
return ('Hello World');

}
console.log(Test2());


const Test3 = function(test){
    return ('Annunymous Function');
}
console.log(Test3()); 




//var is a globally scoped variable, so it will be accessible outside the function, so it will overwrite the value of x to 3.

function Test4(){
    var x=2;
    if(x==2){
        var x=3;  //var is function scoped, so it will be accessible outside the if block, so it will overwrite the value of x to 3.
        console.log(x); //3
    }
    console.log(x); //3
    return x;
}
console.log('Testing result of method Test4() for var variable: ' + Test4());



 //let is block scoped,
function Test5(){
    let x=2;
    if(x==2){
        let x=3;  //let is block scoped, so it will only be accessible within the if block
        console.log(x); //3
    }
    console.log(x); //2
    return x;
}
console.log('Testing result of method Test5() for let variable: ' + Test5());

// if we dont define any data type for any variable then by default it is a var.

