import "./style.css"
import muqmad from "./img/muqmad.png"
import hilib from "./img/hilib.png"
import soor from "./img/soor.png"
import pasta from "./img/pasta.png"
import digag from "./img/digag.png"

export function rendeMenu () {
    
    const content = document.querySelector("#content")
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("mainDiv")

    const titleDiv = document.createElement("div") 
    titleDiv.classList.add("titleDiv")

    const title = document.createElement("h1")
    title.innerText = "Menu Lists"
    titleDiv.appendChild(title)
    
    const lists = document.createElement("h2")
    lists.innerText ="Somali Traditional Food"
    titleDiv.appendChild(lists)

    mainDiv.appendChild(titleDiv)
    
    const mealOneDiv = document.createElement("div")
    mealOneDiv.classList.add("mealOneDiv")

    const mealOne = document.createElement("h3")
    mealOne.innerText = "Muqmad and Laxoox"
    mealOneDiv.appendChild(mealOne)

    const mealImg1 = document.createElement("img")
    mealImg1.src = muqmad;
    mealImg1.classList.add("muqmad")
    
    const mealOnePrice = document.createElement("p")
    mealOnePrice.innerHTML = "<p><strong>Price: $24.99</strong></p>"
    const description1 = document.createElement("P")
    description1.innerText = "This is one of the best  meals that  somali's eat, it's made of sliced and freid meat and laxoox is like bread baked flat"

    mealOneDiv.appendChild(mealImg1)
    mealOneDiv.appendChild(description1)
    mealOneDiv.appendChild(mealOnePrice)

    mainDiv.appendChild(mealOneDiv)
 
    const mealTwoDiv = document.createElement("div")
    mealTwoDiv.classList.add("mealTwoDiv")
    mainDiv.appendChild(mealTwoDiv)
    
    const mealTwo = document.createElement("h3")
    mealTwo.innerText = "Hilib and Baris"
    
    const mealImg2 = document.createElement("img")
    mealImg2.classList.add("hilib")
    mealImg2.src = hilib;

    const description2 = document.createElement("p")
    description2.innerText = "This is one of the best  meals that  somali's eat, it's made of sliced and freid meat and laxoox is like bread baked flat"

    const mealTwoPrice = document.createElement("p")
    mealTwoPrice.innerHTML = "<p><strong>Price: $34.99</strong></p>"

    mealTwoDiv.appendChild(mealTwo)
    mealTwoDiv.appendChild(mealImg2)
    mealTwoDiv.appendChild(description2)
    mealTwoDiv.appendChild(mealTwoPrice)

    mainDiv.appendChild(mealTwoDiv)

    const mealThreeDiv = document.createElement("div")
    mealThreeDiv.classList.add("mealThreeDiv")
    mainDiv.appendChild(mealThreeDiv)
    
    const mealThree = document.createElement("h3")
    mealThree.innerText = "Soor and Caano"
    
    const mealImg3 = document.createElement("img")
    mealImg3.classList.add("hilib")
    mealImg3.src = soor;

    const description3 = document.createElement("p")
    description3.innerText = "This is one of the best  meals that  somali's eat, it's made of sliced and freid meat and laxoox is like bread baked flat"

    const mealThreePrice = document.createElement("p")
    mealThreePrice.innerHTML = "<p><strong>Price: $14.99</strong></p>"

    mealThreeDiv.appendChild(mealThree)
    mealThreeDiv.appendChild(mealImg3)
    mealThreeDiv.appendChild(description3)
    mealThreeDiv.appendChild(mealThreePrice)

    mainDiv.appendChild(mealThreeDiv)

    const sndPart = document.createElement("div")
    sndPart.classList.add("sndPart")
    

    const other = document.createElement("h2")
    other.classList.add("other")
    other.innerText= "Other Popular Somali Dishes"
    sndPart.appendChild(other) 
    mainDiv.appendChild(sndPart)

    const mealFourDiv = document.createElement("div")
    mealFourDiv.classList.add("mealFourDiv")
    mainDiv.appendChild(mealFourDiv)
    
    const mealFour = document.createElement("h3")
    mealFour.innerText = "Pasta and Sugo"
    
    const mealImg4 = document.createElement("img")
    mealImg4.classList.add("hilib")
    mealImg4.src = pasta;

    const description4 = document.createElement("p")
    description4.innerText = "This is one of the best  meals that  somali's eat, it's made of sliced and freid meat and laxoox is like bread baked flat"

    const mealFourPrice = document.createElement("p")
    mealFourPrice.innerHTML = "<p><strong>Price: $24.99</strong></p>"

    mealFourDiv.appendChild(mealFour)
    mealFourDiv.appendChild(mealImg4)
    mealFourDiv.appendChild(description4)
    mealFourDiv.appendChild(mealFourPrice)

    mainDiv.appendChild(mealFourDiv)

    const mealFiveDiv = document.createElement("div")
    mealFiveDiv.classList.add("mealFiveDiv")
    mainDiv.appendChild(mealFiveDiv)
    
    const mealFive = document.createElement("h3")
    mealFive.innerText = "Digag"
    
    const mealImg5 = document.createElement("img")
    mealImg5.classList.add("hilib")
    mealImg5.src = digag;

    const description5 = document.createElement("p")
    description5.innerText = "This is one of the best  meals that  somali's eat, it's made of sliced and freid meat and laxoox is like bread baked flat"

    const mealFivePrice = document.createElement("p")
    mealFivePrice.innerHTML = "<p><strong>Price: $24.99</strong></p>"

    mealFiveDiv.appendChild(mealFive)
    mealFiveDiv.appendChild(mealImg5)
    mealFiveDiv.appendChild(description5)
    mealFiveDiv.appendChild(mealFivePrice)

    mainDiv.appendChild(mealFiveDiv)

    content.appendChild(mainDiv)
}