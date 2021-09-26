//VARIABLES
let forwardBtn = document.querySelector('.forward')
let backBtn = document.querySelector('.back')
let imageContainer = document.querySelector('.image-container')
let btnContainer = document.querySelector('.btn-container')
let imgWidth = document.querySelector('img').clientWidth
let totImages = document.querySelectorAll('img').length

let sum = 0;

let max = (-imgWidth) * (totImages - 2);

//EVENT LISTENERS
forwardBtn.addEventListener('click', () => {
    if (sum < max) {
        imageContainer.style.transform = `translateX(0px)`;
        sum = 0
    } else {
        imageContainer.style.transform = `translateX(${ sum - imgWidth }px)`;
        sum -= imgWidth;
    }
})

backBtn.addEventListener('click', () => {
    if (sum === 0) {
        imageContainer.style.transform = `translateX(${ max - imgWidth }px)`;
        sum = max - imgWidth
    } else {
        imageContainer.style.transform = `translateX(${ sum + imgWidth }px)`;
        sum += imgWidth
    }
})

