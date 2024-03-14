// primitive datatype

/* 7 types : String (call by reference(copy is given)), Number, Boolean, Null(empty),
  Undefined,Symbols(used for making value unique), Bigint(scientific values, or vaery large number) */

  const score = 100  // for typescript we have to mention the type  like const score:Number = 100
  const scoreValue = 100.3  // no specific mentoning of float that all included in number
  const isLoggedIn = false
  const outSideTemp = null
  let userEmail;  // by default undefined we can also use it manually
  
  const id = Symbol('123')
  const anotherId = Symbol('123')
  //console.log(id === anotherId)   //false 

 const bigNumber = 346799187273663555555552222222222222222222222n  /*if the number is very big the the space of Number can't hold 
                                                                    applying n at end of the number make it a Bigint data type that
                                                                    that can hold that large number*/


  // reference type (non primitive data type)

    // Array , Objects, Functions

const heros = ["shaktiman","nagraj","doga"];// we give the value of array inside a [] bracket

let myobj = {                          //oject is defined in key pair we can also store it inside variable,datatype can be anythig 
     name :"deblina",                    // boolean , function,object, number etc
     age : 19  ,                         // written inside {}
}


//function(){}    // function defination

const myFunction = function(){
   // console.log("hello world");
}

console.log(typeof myFunction );  //  outSideTemp => type object (null)
                                    // finctiion return type is function(functio object) , object return types is object
                                    // symbol => return type is symbol
