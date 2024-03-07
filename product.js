const productImages = document.querySelectorAll(".product-images assets"); 
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => { 
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active'); 
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})
// toggle size buttons

const sizeBtns = document.querySelectorAll(''); 
let checkedBtn = 0; 

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})