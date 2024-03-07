// console.log("hello");
// age=23
// console.log(age);

// const student = {
//     fullName : "rahul",
//     age: 21,
//     isPass: true,
// };

// console.log(student["fullName"])

// const profile = {
//     fullName : "shradhakhapra",
//     posts : 195,
//     followers : 569,
// };

// //assign operators

// a=5;
// b=2;

// a+=4;//a=+4

// console.log("a+=", a )

//pracctice



//  let num = prompt("Enter a number")



// if(num%5===0){
//     console.log("it is multiple");
// }
// else{
//     console.log("it is not multiple");
// }

//for-of loop 

// let str="javascript";

// let size=0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }

// console.log("size=",size);

// //for-in loop 

// let students = {
//     name:"rahul kumar",
//     age : 20,
//     cgpa:7.4,
//     isPass:true,
// }

// for(let key in students){
//     console.log("key=",key,"value=",students[key]);
// }


// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log("even numbers =",i);
//     }
// }

// //practice 2

// let num = 5;
// do{
//     var i=prompt("Enter a number");
//  } 
//  while(i!=num);

//  console.log("correct answer");

 //template literls

//  let obj={
//     item:"pen",
//     price:10,
//  };

//  let output = `the cost of ${obj.item} is ${obj.price} rupees`;
//  console.log(output);

//  let str="012345";
//  console.log(str.slice(1,3));

//  function sum(x,y){
//    console.log(x+y);
//  }

//  //practice forEach loop

//  let array =[1,3,2,4,6];

// array.forEach(element => {
//    console.log(element*element);
//  });

//  //map

//  let nums=[43,25,12];

//  let newArr = nums.map((val) => {
//    return val*2;
//  });

//  console.log(newArr);

//  //filter

//  let arr=[1,2,3,4,5];

//  let evenArr = arr.filter((val) => {
//    return val%2===0;
//  });

//  console.log(evenArr);

//  //reduce method 

//  let arrays= [23, 56,32,12,78];

//  const outputs =arrays.reduce((prev,curr) => {
//    return prev < curr ? prev : curr;
//  });

//  console.log(outputs);


// //DOM//
// // console.dir(document.body);
// // console.log(document.body);

// // let headings = document.getElementsByClassName("headings")
// // console.dir(headings);
// // console.log(headings);

// // let div = document.querySelector("div");
// // console.dir(div);

// //practice1//

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students";

//practice2//

// let divs = document.querySelectorAll(".box");
// divs[0].innerText= "new unique value 1";
// divs[1].innerText= "new unique value 2";
// divs[2].innerText= "new unique value 3";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me !"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn)

//practice//

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me ";
// newBtn.style.color = " white";
// newBtn.style.backgroundColor = "green";

// document.querySelector("body").prepend(newBtn);

// //practice//

// let para = document.querySelector("p");

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// }

// btn1.addEventListener("click",() => {
//   console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click",() => {
//   console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//   console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",() => {
//   console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click",handler3);

// let modeBtn = document.querySelector("#mode");
// let currmode = "light";

// modeBtn.addEventListener("click",() =>{
//   if(currmode==="light"){
//     currmode = "dark";
//     document.querySelector("body").style.backgroundColor="black";
//   }
//   else {
//     currmode="light";
//     document.querySelector("body").style.backgroundColor="white";
//   }

//   console.log(currmode);
// });

// //class and object 

// const student = {
//   fullName : "auro",
//   marks : 97,
//   printMarks : function() {
//     console.log("marks =",this.marks);
//   },

// };

// const employee = {
//   calcTax(){
//     console.log("tax is 10%");
//   },
// };

// const karanArjun = {
//   salary : 3000,
//   calcTax(){
//     console.log("tax is 20%");
//   }
// };

// karanArjun.__proto__= employee;

// //if object and prototype have the same function then objects method will be used 

// //class

// class ToyotaCar {

//   constructor(brand,mileage){
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start () {
//     console.log("start");
//   }
//   stop(){
//     console.log("stop");
//   }

//   setBrand (brand) {
//     this.brand = brand ;
//   }
// }

// let fortuner = new ToyotaCar("fortuner",10); //Create a object 
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar ("lexus",15);
// lexus.setBrand("lexus");

// //inheritance 

// class Parent {
//   hello() {
//     console.log("hello");
// }
// }

// class Child extends Parent {}

// let obj =  new Child();

// class Person {
//   constructor() {
//     this.species = "homo sapiens";
//   }

//   eat (){
//     console.log("eat");
//   }

//   sleep(){
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//    constructor(branch){
//     super();//to invoke parent class constructor 
//       this.branch = branch ;
//    }
//   work() {
//     console.log("solve problems, build something");
//   }
// }

// let auroObj = new Engineer ("chemical engg");

// //if a child and parent have same method then child method will be used 

// //practice 1

// let DATA = "secret information";

// class User {
//   constructor(name,email) {
//     this.name = name ;
//     this.email = email;
//   }

//   viewData(){
//     console.log("data = ", DATA);
//   }
// }

// let student1 = new User("auro","auro@email.com");
// let student2 = new User("ram","RAM@email.com");

//callback

// function hello() {
//   console.log("hello");
// }

// setTimeout(() => {
//   console.log("hello");
// },4000);//timeout

// //synchronous callback 

// function sum(a,b) {
//   console.log(a+b);
// }

// function calculator(a,b,sumCallback) {
//   sumCallback(a,b);
// }

// calculator(11,2,sum);

//asynchronous 

// function getData(dataId,getNextData) {
//   setTimeout(() => {
//     console.log("data",dataId);
//     if(getNextData){
//       getNextData();
//     }
//   }, 2000);
// }
// //callback hell 
// getData(1,() =>{
//   getData(2,() =>{
//     getData(3);
//   });
// });

//promise 

// let promise = new Promise((resolve,reject) => {
//   console.log("i am a promise");
//   reject("some error occured");
// });

// function getData(dataId,getNextData) {
//   return new Promise((resolve,reject) =>{
//     setTimeout(() => {
//       console.log("data",dataId);
//       resolve("success");
//       if(getNextData){
//         getNextData();
//       }
//     }, 2000);
//   });
// }

//promise chain

function asyncFunc() {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log(" some data1");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res) => {
  console.log(res);
});

//easy method

function getData(dataId) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log(" data",dataId);
      resolve("success");
    }, 4000);
  });
}

//actual promise chain

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

//async await
async function getAllData() {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
}

//fetch api 

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() => {
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response);//JSON format
    let data = await response.json();
    factPara.innerText = data[0].text;
};

btn.addEventListener("click",getFacts);