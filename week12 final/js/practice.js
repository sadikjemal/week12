// console.log("sadik");
// console.log(document);
// console.dir(document);

// document.body.children[0].children.innerHTML
// var testElement = document.body.children[0]
// console.log(testElement);
// testElement.innerHTML = "Group4 DOM discussion"
// testElement.innerHTML = "First day of DOM discussion"

// // !getElementById***************************************
// let example = document.getElementById("kebede")
// console.log(example);
// console.log(example.className);
// example.className = "blue"

// var testElement = document.body.children[2]
// console.log(testElement);
// // or
// var testOr = document.getElementById("abebe")
// console.log(testOr);
// console.log(testOr.className);
// testOr.className = "blue"
// // document.getElementById("abebe").className = "red" // you can with out clg and in one line

// let r = document.getElementById("submitButton")
// console.log(r);
// console.log(r.className);
// r.className = "red"

// // ! querySelector ************************************
// // dot is must if it is class(".class")
// // # is must if it is id ("#id")
// // No need of either ./# if it is TagName("li") 
// let f = document.querySelector("#kp")
// console.log(f);
// let h = document.querySelector(".rip")
// console.log(h);

// let k = document.querySelectorAll(".rip")
// console.log(k);

// document.querySelector(".rip").className = "yt"
// document.querySelectorAll(".rip").className = "all" // ???????????????

// let a = document.querySelectorAll("li")
// console.log(a);
// a[2].className = "pink"           //???????? how all by one

// // !getElementByClassname***************************************
// let get = document.getElementsByClassName("rup")
// console.log(get);
// console.log(get[0]);
// console.log(get.item(0));
// console.log(get[1]);
// console.log(get.item(1));
// let name = document.getElementsByTagName("li")
// console.log(name );
// name[3].className = "pink"

// // ! getElementsByTagName**************************************
// let fr = document.getElementsByTagName("p")
// console.log(fr);


// // live DOM Object


// // !Indirectly select 
// let ul= document.getElementById("main")
// console.log(ul);
// console.log(ul.firstChild);  //#text  ?????????
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// let li = document.getElementById("io")
// console.log(li);

// console.log(li.parentElement);

// console.log(li.previousSibling);  // #text
// console.log(li.previousElementSibling.previousElementSibling);
// console.log(li.nextElementSibling.nextElementSibling);

// // Using nth child method (like  css) it starts y 1 not 0
//  let hp = document.querySelectorAll(".rip:nth-child(2)")  //??????????????????
//  console.log(hp);
//  hp.className = "red"

// //  !HTML element update
// let  liElemt = document.createElement("li")
//     console.log(liElemt);
// let parent =document.getElementById("main")
// console.log(parent);
// parent.appendChild(liElemt)    // add at the end
// liElemt.innerText = "Hi Group4"


// let  liElemts = document.createElement("li")
// let parent =document.getElementById("main")
// parent.prepend(liElemts)
// parent.prepend = "Hi Evangadi"  // add at top
//   //?????????????/
 

// //   or
// let yu = document.getElementsByClassName("")


// !Indirectly selection
// console.log(document.getElementById("main").firstElementChild);//first element
// console.log(document.getElementById("main").lastElementChild); ///last element

// console.log(document.getElementById("kp2").parentElement); // parent
// console.log(document.getElementById("kp2").previousElementSibling); // previous  / br why?
// console.log(document.getElementById("kp2").nextElementSibling); // next  / br why?

// console.log(document.querySelectorAll(".rip:nth-child(1)"));   // by using nth child

// ! Updating the HTML
// textContent
// let el = document.getElementById("kp1")
// console.log(el);
// el.textContent = "MedLife"

// CreateElement
// let someParagraph = document.createElement("p");
// console.log(someParagraph);
// someParagraph.textContent = "keep it up"
// document.body.appendChild(someParagraph);

let someLi = document.createElement("li");
// console.log(someLi);
let parent = document.getElementById("main")
parent.appendChild(someLi)

someLi.innerText = "Hi Evangadi INC"
// parent.prepend(someLi)

// someParagraph.innerText = "<h2>Test</h2>"   // read all as text
// someParagraph.innerHTML  = "<h1>innerHTML</h1>"  
// // someParagraph.innerHTML = "<i>Test</i>"      // change styling

// someParagraph.outerHTML = " <h6>oute rHTML</h6>"

// // ! to remove the element
// let removeMulat = document.getElementById("kp4")
// parent.removeChild(removeMulat)

// //! Adding and removing class
let byReference = document.getElementById("kp2")
byReference.before(someLi)
byReference.after(someLi)

// Adding attributes
 console.log(someLi.className = "cName"); // can replace class
  console.log(someLi.classList = "cList")
 console.log(someLi.className = "jyut kjhuy");  // can replace multiple class
console.log(someLi.classList = "hhhhhh mkk");

// console.log(someLi.className.add("aque"));  // not working
someLi.classList.add("aque")  // className is not work for this case
console.log(someLi.className);  // only showing
console.log(someLi.classList);  // use array like showing

someLi.classList.remove("mkk")  // remove class 
console.log(someLi.classList); 

someLi.classList.toggle("sadik")  // add if pre. not and remove if pre. present
console.log(someLi.classList);  

// ! relate with ID
let relateId = document.getElementById("kp2")
console.log(relateId.id);
relateId.id = "newkp";
console.log(relateId.id);

// has attribute
console.log(someLi.hasAttribute("hrf"));  //true or false
console.log(someLi.hasAttribute("id")); 

console.log(someLi.getAttribute("class"));

// !setAtrribute
someLi.setAttribute("class", "addingClassWith")
console.log(someLi.classList);


// ! IMP adding
let imageElement = document.createElement("img")
 console.log(imageElement);
 imageElement.setAttribute("src","c:\Users\sadik\OneDrive\Desktop\General\image\sdew.jpg")
someLi.appendChild(imageElement)
imageElement.setAttribute("width", "250px")

imageElement.removeAttribute("width")   // to remove attribute

// Css property altering

someLi.style.backgroundColor = "green"
someLi.style.color = "white"
someLi.style. fontSize = "30px"

// TODO:event ***************************************** 
// !on HTML  (1st method)
let tekparent = document.getElementById("main")
function changeColor(){
    tekparent.style.color = "red";
    tekparent.style.backgroundColor = "yellow"
}

function removeColor(){
    tekparent.style.color = "";
    tekparent.style.backgroundColor = "";
}
function changeThroughJs1(){
      tekparent.style.color = "aque";
    tekparent.style.backgroundColor = "black";
}
function changeThroughJs2(){
      tekparent.style.color = "black";
    tekparent.style.backgroundColor = "red";
}

//! only in js (2nd method)
let btn4 = document.getElementById("btn-4")
btn4.onclick = changeThroughJs1 ;

// !addEvent listener method (3rd method)
let btn5 = document.getElementById("btn-5") 
btn5.addEventListener("click",changeThroughJs2 )
