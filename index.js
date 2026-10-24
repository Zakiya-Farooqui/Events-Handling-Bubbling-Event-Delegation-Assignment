// Question-1 
// Section 1 - Event Handling Basics
// 1. Handle a Button Click
// Create a button and use addEventListener() to display a message when the button is clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// Button Clicked!

let btn = document.querySelector("#btn")
let click = document.querySelector(".clicked")

btn.addEventListener('click' ,()=>{
    click.classList.remove("clicked")
})


// Question2
// 2. Change Text on Click
// Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button
// is clicked.
// Example:
// Before:
// Welcome to my website!
// After clicking the button:
// Thanks for visiting!


let changeTextBtn= document.querySelector("#change-text-btn")
let changeText= document.querySelector("#change-text")

changeTextBtn.addEventListener("click",()=>{
    changeText.textContent= "Thanks for visiting!"
})


// Question3

// 3. Handle a Mouseover Event
// Create a heading and use addEventListener() with the mouseover event to change its text when the
// mouse moves over it.
// Example:
// Before:
// JavaScript
// After mouseover:
// Mouse is over the heading!


let h2= document.querySelector("h2")

h2.addEventListener("mouseover", ()=>{
    h2.textContent= "Mouse is over the heading!"
})


h2.addEventListener('mouseleave',()=>{
    h2.textContent= "JavaScript"
})



// Question 4
// Section 2 - Event Object
// 4. Display the Clicked Element
// Create a button and use the event object to identify the element that was clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// BUTTON

btn.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
})

// Question 5

// 5. Display Mouse Coordinates
// Create a <div> and use a mousemove event to display the mouse coordinates using the event object's
// clientX and clientY properties.
// Example Output:
// X: 250
// Y: 180

let div= document.querySelector("div")
div.addEventListener('mousemove', (e)=>{
    console.log("Client X",e.clientX);
    console.log("Client Y",e.clientY);
})

// Question 6

// 6. Get the Value of an Input Using the Event Object
// Create an input field and use the event object's target.value to display the entered value.
// Example:
// Input:
// JavaScript
// Output:
// You typed: JavaScript

let input= document.querySelector("#text")

input.addEventListener("input",(e)=>{
console.log("You typed:",e.target.value);
})

// Question 7
// 7. Remove an Event Listener
// Create a button and attach a click event using addEventListener(). Create a separate function and use
// removeEventListener() to stop the click event when required.
// Example:
// Before removing the listener:
// Button clicked!
// After removing the listener:
// Clicking the button should no longer display the message.

let btn3= document.querySelector("#btn3")
let removebtn = document.querySelector("#removebtn");

function fun1(e){
console.log("Button Clicked!");
}

btn3.addEventListener('click',fun1)

removebtn.addEventListener('click',()=>{
    btn3.removeEventListener('click',fun1)  

})

// Question 8
// 8. Run an Event Only Once
// Create a button and use addEventListener() with the once option so that the event runs only the first
// time the button is clicked.
// Example:
// First click:
// Welcome!
// Second click:
// No message should be displayed
let btn4= document.querySelector("#btn4")


btn4.addEventListener('click', (e)=>{
    console.log("Welcome!");
},{once:true})


// Question 9
// 9. Stop Event Propagation
// Create a parent <div> containing a button. Add click events to both parent and button. Use
// stopPropagation() so that clicking the button does not trigger the parent's click event.
// Example:
// Without stopPropagation():
// Button clicked
// Parent clicked
// With stopPropagation():
// Button clicked

let btn5= document.querySelector("#btn5")
let parentClicked= document.querySelector("#parent-clicked")

parentClicked.addEventListener('click',(e)=>{
  console.log("parent clicked");
})
btn5.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("button clicked");
})

// Question 10

// 10. Demonstrate Event Bubbling
// Create a parent <div> containing a child <button>. Add click events to both elements and observe the order in which the events execute when the button is clicked.
// Example:
// HTML Structure:
// <div id="parent">
//  <button id="child">Click Me</button>
// </div>
// Expected Output:
// Button clicked
// Parent clicked


// document.querySelector("#parent").addEventListener('click', (e)=>{
//     console.log("Parent Clicked");
// })
// document.querySelector("#child").addEventListener('click',(e)=>{
//     console.log("Button Clicked");
// })

// Question 11
// 11. Demonstrate Event Capturing
// Create a parent <div> containing a button. Add click event listeners to both using the capturing phase
// and observe the order in which the events execute.
// Example:
// Expected Output:
// Parent clicked
// Button clicked

document.querySelector("#parent").addEventListener('click', (e)=>{
    console.log("Parent Clicked");
} , {capture:true})
document.querySelector("#child").addEventListener('click',(e)=>{
    console.log("Button Clicked");
},{capture:true})

// Question 12

// 12. Handle Multiple Buttons Using Event Delegation
// Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event
// delegation to identify which button was clicked.
// Example:
// HTML:
// <div id="buttons">
//  <button>HTML</button>
//  <button>CSS</button>
//  <button>JavaScript</button>
// </div>
// When JavaScript button is clicked:
// JavaScript button clicked


document.querySelector("#buttons").addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON")
    console.log(e.target.textContent + " button clicked");
})


// Question 13
// 13. Handle a Dynamic List Using Event Delegation
// Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of
// the clicked list item.
// Example:
// HTML:
// <ul id="skills">
//  <li>HTML</li>
//  <li>CSS</li>
//  <li>JavaScript</li>
// </ul>
// When CSS is clicked:
// You clicked: CSS

document.querySelector("#skills").addEventListener('click',(e)=>{
    if(e.target.tagName === "LI")
    console.log("You clicked: " + e.target.textContent);
})