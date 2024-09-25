import "./about.css"
import restBg from"./img/restBg.png"

    const content = document.querySelector("#content")
    const aboutBtn = document.querySelector(".btnThree")
    

    export function renderAbout () {
        const aboutHead =document.createElement("div")
        aboutHead.classList.add("aboutHead")
        aboutHead.setAttribute("style", `background-image: url(${restBg})`)
        const aboutTitle = document.createElement("div")
        aboutTitle.classList.add("aboutTitle")

        const aboutHeader = document.createElement("h1")
        aboutHeader.classList.add("aboutUs")

        aboutHeader.innerText = "About Us"
        aboutTitle.appendChild(aboutHeader)

        const paraOne = document.createElement("p")
        paraOne.classList.add("paraOne")
        paraOne.innerText = `Welcome to Dhaqansoor restaurant, where culinary excellence meets warm hospitality. Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests.` 
        aboutTitle.appendChild(paraOne)

        aboutHead.appendChild(aboutTitle)

        const journey = document.createElement("h2")
        journey.classList.add("journey")
        journey.innerText = "Our Journey"
        aboutTitle.appendChild(journey)

        const journeyPara = document.createElement("p")
        journeyPara.classList.add("journeyPara")
        journeyPara.innerText = `Founded in 2032, Dhaqansoor began as a dream to create a place where people could come together to enjoy delicious food in a welcoming atmosphere. Our founder,Hebel, envisioned a restaurant that would not only serve great meals but also become a cornerstone of the community.`
        aboutTitle.appendChild(journeyPara)

        const workHrs = document.createElement("h3")
        workHrs.classList.add("workHrs")
        workHrs.innerText = `Our Working Hours`
        aboutTitle.appendChild(workHrs)

        const hrsDiv = document.createElement("div")
        hrsDiv.classList.add("hrsDiv")
        hrsDiv.innerHTML = `
                            <h4>Saturday to Thrusday </h4>
                            <p> <i>8am morning to 10pm evening</i></p>
                            <h4>Friday</h4>
                            <p><i>6am to 12pm</i></p>`
        aboutTitle.appendChild(hrsDiv)

        const address = document.createElement("div")
        address.classList.add("address")
        address.innerHTML = `<h3>Our Address </h3>
                              <address>
                                visit Us at: <br>
                                    wadada suuqa <br>
                                    jidka 20ka, Bari <br>
                                    Aduunka
                                </address>`
       aboutTitle.appendChild(address) 
       
       content.appendChild(aboutHead)
    }