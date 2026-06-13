console.log("sadik");
console.log(document);
console.dir(document);

document.body.children[0].children.innerHTML
var testElement = document.body.children[0]
console.log(testElement);
testElement.innerHTML = "Group4 DOM discussion"
testElement.innerHTML = "First day of DOM discussion"

// !getElementById***************************************
let example = document.getElementById("kebede")
console.log(example);
console.log(example.className);
example.className = "blue"

var testElement = document.body.children[2]
console.log(testElement);
// or
var testOr = document.getElementById("abebe")
console.log(testOr);
console.log(testOr.className);
testOr.className = "blue"
// document.getElementById("abebe").className = "red" // you can with out clg and in one line

let r = document.getElementById("submitButton")
console.log(r);
console.log(r.className);
r.className = "red"

// ! querySelector ************************************
// dot is must if it is class(".class")
// # is must if it is id ("#id")
// No need of either ./# if it is TagName("li") 
let f = document.querySelector("#kp")
console.log(f);
let h = document.querySelector(".rip")
console.log(h);

let k = document.querySelectorAll(".rip")
console.log(k);

document.querySelector(".rip").className = "yt"
document.querySelectorAll(".rip").className = "all" // ???????????????

let a = document.querySelectorAll("li")
console.log(a);
a[2].className = "pink"           //???????? how all by one

// !getElementByClassname***************************************
let get = document.getElementsByClassName("rup")
console.log(get);
console.log(get[0]);
console.log(get.item(0));
console.log(get[1]);
console.log(get.item(1));
let name = document.getElementsByTagName("li")
console.log(name );
name[3].className = "pink"

// ! getElementsByTagName**************************************

