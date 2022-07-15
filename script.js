//variables
let allBtn = document.querySelector('#all')
let catBtn = document.querySelector("#cat")
let dogBtn = document.querySelector("#dog")
let fishBtn = document.querySelector("#fish")
let root = document.querySelector('.row')
let catImages = document.querySelectorAll('[alt=cat]')
let dogImages = document.querySelectorAll('[alt=dog]')
let fishImages = document.querySelectorAll('[alt=fish]')
let allImages = document.querySelectorAll('.gallery__img')


//cats filter
catBtn.addEventListener("click", function () {
    root.innerHTML = ''
    for (let i = 0; i < catImages.length; i++) {
        root.appendChild(catImages[i])
    }
})

//dogs filter
dogBtn.addEventListener("click", function () {
    root.innerHTML = ''
    for (let i = 0; i < dogImages.length; i++) {
        root.appendChild(dogImages[i])
    }
})

//fish filter
fishBtn.addEventListener("click", function () {
    root.innerHTML = ''
    for (let i = 0; i < fishImages.length; i++) {
        root.appendChild(fishImages[i])
    }
})

//all filter
allBtn.addEventListener("click", function () {
    root.innerHTML = ''
    for (let i = 0; i < allImages.length; i++) {
        root.appendChild(allImages[i])
    }
})