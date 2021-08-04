"use strict"

//first task
const user = {
    name: "John",
    surname:"Smith"
}
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

// second task
let salaries = {
    John: 100,
    Ann: 160,  
    Pete: 130,
    Sum : function (){
        return this.John + this.Ann + this.Pete;
    }
  };

 Object.values(salaries).forEach(values => console.log(values))
 console.log(salaries.Sum());

//  let result = 0;
//  for (let value in salaries) {
//      result += salaries[value];result
//  }
//  console.log(result);

 //third task
 let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function newMenu(object)  {
    for (let key in object) {
        if  (typeof object[key] === "number"){
            object[key] = object[key]*2;
        }
    }
    return object;
  } 
console.log(newMenu(menu));

//fourth task 

function isEmpty(object){
    for (const key in object) {
        return false;
    }
    return true;
}

let schedule = {name:"Ilham"};
console.log(isEmpty(schedule));




// function isEmpty(object){
//     if(Object.keys(object) === undefined){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

//  let schedule = {name:"Ilham"};
//  console.log(isEmpty(schedule));





let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      return this;
    }
  };

  ladder.up().up().down().up().showStep();
  console.log(ladder);