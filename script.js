
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

