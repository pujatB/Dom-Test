// If a user hovers over a h2 tag replace the words inside it to contain a greeting

let heading2 = document.querySelector('.heading2');
console.log(heading2);
heading2.addEventListener('mouseover', () => {
    heading2.textContent = 'Welcome To Our Website';
})

heading2.addEventListener('mouseout', () => {
    heading2.textContent = 'Free Class';
})



