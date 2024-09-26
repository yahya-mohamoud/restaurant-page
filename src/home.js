
export function renderHome () {
    const content = document.querySelector("#content")
    
    const home = document.createElement("div")
    home.classList.add("home")

    const homeDiv = document.createElement("div")
    homeDiv.classList.add("homeDiv")
    
    const resName = document.createElement("h1")
    resName.classList.add("resName")
    resName.innerText = "Dhaqansoor Somali Cusine"
    homeDiv.appendChild(resName)
    
    const about = document.createElement("div")
    about.classList.add("homeAbout")
    const homePara = document.createElement("p")
    homePara.classList.add("homePara")
   
    homePara.innerText = `Welcome to Dhaqansoor Somali, where culinary excellence meets warm hospitality. Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias qui nulla, dolor harum minus nesciunt consectetur eaque laborum molestiae, aliquid explicabo sed itaque accusantium quis! Eaque cupiditate pariatur odit!`
    homeDiv.appendChild(homePara)

    const homeHrs = document.createElement("div")
    homeHrs.classList.add("homeHrs")
    const line = document.createElement("hr")
    homeDiv.appendChild(line)
    const hrsH3 = document.createElement("h2")
    hrsH3.classList.add("hrsH3")
    hrsH3.innerText = "Working Hours"
    homeHrs.appendChild(hrsH3)
    homeDiv.appendChild(homeHrs)

    const hrsParag = document.createElement("ul")
    hrsParag.innerHTML = ` <ul>
                                <li><strong>Monday:</strong> 6am-9pm</li>
                                <li><strong>Tuesday:</strong> 6am -9pm</li>
                                <br>
                                <li><strong>Wednesday:</strong>2am-12pm</li>
                                <li><strong>Thrusday:</strong>12am-12pm</li>
                                <br>
                                <li><strong>Saturday:</strong>6am-9pm</li>
                                <li><strong>Sunday:</strong>6am-9pm</li>
                                <br>
                                <li><strong>Friday:</strong>Unavailable</li>
                            </ul>
                            `
    homeDiv.appendChild(hrsParag)
    const line2 = document.createElement("hr")
    homeDiv.appendChild(line2)
    const location = document.createElement("div")
    location.classList.add("location")
    const locaTitle = document.createElement("h2")
    locaTitle.classList.add("locaTitle")
    locaTitle.innerText = "Location"
    location.appendChild(locaTitle)
    
    const placeNm = document.createElement("p")
    placeNm.classList.add("placeNm")
    placeNm.innerText = `121 wadada suuqa,  
                        jidka 20ka,
                         bari aduunka`
    location.appendChild(placeNm)
    
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const conTt = document.createElement("h2")
    conTt.classList.add("conTt")
    conTt.innerText = "Contact Us"
    homeDiv.appendChild(conTt)

    const contDiv = document.createElement("div")
    contDiv.classList.add("contDiv")

    contDiv.innerHTML = `<p>Email us:</p>
                         <p>dhaqansor@dhaqansoor.com</p>
                         <p>Phone call:</p>
                         <p> +321 2231 2322</p>

                         <p>vist us at our locations</p>`
    homeDiv.appendChild(contDiv)
    homeDiv.appendChild(location)
    
    home.appendChild(homeDiv)
    content.appendChild(home)
}
