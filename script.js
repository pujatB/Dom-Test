
//2.2 If a user hovers over a h2 tag replace the words inside it to contain a greeting

let heading2 = document.querySelector('.heading2');
console.log(heading2);
heading2.addEventListener('mouseover', () => {
    heading2.textContent = 'Welcome To Our Website';
})

heading2.addEventListener('mouseout', () => {
    heading2.textContent = 'Free Class';
})



// 2.1. Changes heading background colour
document.querySelector("h1").addEventListener("click",()=>{
    document.querySelector("h1").style.backgroundColor = "cyan"
})


//  Changes heading background colour back to normal
document.querySelector("h1").addEventListener("mouseout",()=>{
    document.querySelector("h1").style.backgroundColor = "white"
})

// 2.3 If someone types a letter whilst viewing the webpage a new paragraph should be created 
// and that letter should be added to it.
document.addEventListener("keydown",e=>{
    let newElement = document.createElement("p");
    let section = document.querySelector("section")
    newElement.textContent = e.key;
    section.append(newElement);

})

// 2.4 If someone clicks on one of the navigation items the styling of the connecting paragraph should change to be more bold and be a larger font size. If they click again on the same navigation item, the paragraph should revert to original styling.
let navLinks = document.getElementsByClassName("nav-item");
navLinks[0].addEventListener("click",()=>{
        let home = document.getElementById("home").classList.toggle("pDecorate");
})
navLinks[1].addEventListener("click",()=>{
    let about = document.getElementById("about").classList.toggle("pDecorate");
})
navLinks[2].addEventListener("click",()=>{
    let classes = document.getElementById("classes").classList.toggle("pDecorate");
})
