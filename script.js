//alert
function myFunction() {
  alert("welcome to strings methods");
}



//strin trim
function val() {
  let text1 = " once i will become coder";
let text2 = text1.trim();
document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;


}

//length
function num(){
  let text5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo2").innerHTML = text5.length;
}

//slice
function slice (){
let text = "Apple, Banana, Kiwi";
let part = text.slice(0,13);
document.getElementById("demo3").innerHTML = part; 
}

//substring
function substring() {
  let str = "Apple, Banana, Kiwi";
document.getElementById("demo4").innerHTML = str.substring(7,13);
}


//substr 
function substr() {
  let str = "apple,orange,pineapple";
  document.getElementById("demo5").innerHTML = str.substr(0)
}

//replace 
function replace() {
  let text = document.getElementById("demo6").innerHTML; 
  document.getElementById("demo6").innerHTML =
  text.replace("hi","hello");
}

//replaceall
function replaceall() {
    let text = "I LIKE TO LEARN CODE. BUT CODE IS DIFFICULT TO WORK."
    text = text.replaceAll("CODE","PROGRAM");
document.getElementById("demo7").innerHTML = text;
}


//uppercase
function uppercase() {
  let text = document.getElementById("demo8").innerHTML;
  document.getElementById("demo8").innerHTML =
  text.toUpperCase();
}

//lowercase
function lowercase() {
  let text = document.getElementById("demo9").innerHTML;
  document.getElementById("demo9").innerHTML =
  text.toLowerCase();
}

//string concat
function concat() {
  let text1 = "Hello";
 let text2 = "World!";
 let text3 = text1.concat(" ",text2);
 document.getElementById("demo10").innerHTML = text3;
}

//trimstart 
function trimstart(){
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

document.getElementById("demo11").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}

//trimend
function trimend (){
let text1 = "     Hello World!    ";
let text2 = text1.trimEnd();

document.getElementById("demo12").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
}


//padstart
function padstart() {
  let text = "5";
  text = text.padStart(4,"0");
  document.getElementById("demo13").innerHTML = text;
}

//padend
function padend() {
  let text = "5";
text = text.padEnd(4,"0");
document.getElementById("demo14").innerHTML = text;
}

//charat
function charat() {
  var text = "HELLO WORLD";
document.getElementById("demo15").innerHTML = text.charAt(0);
}

//charCodeAt
function charCodeAt () {
  let text = "HELLO WORLD";
document.getElementById("demo16").innerHTML = text.charCodeAt(0);
}

//split
function split() {
  let text = "a,b,c,d,e,f";
const myArray = text.split(",");
document.getElementById("demo17").innerHTML = myArray[0];
}