import {reviews} from "../data/reviews.js"

const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#myButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')

})

//grab the reviews

console.log(reviews)

//create and empty card
const myTarget = document.querySelector("#cards")

for (let x = 0; x < reviews.length; x++) {

    //create a section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')

    for (let step = 0; step<reviews[x].stars; step++) {
        const myStar = document.createElement('img')
        myStar.src = "./images/star-svg.svg"
        myRating.appendChild(myStar)
    }
       

    //build the figure with child elements
    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)

    //add a new card to a page
    myTarget.appendChild(mySection)


}


// inject right year
const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear()