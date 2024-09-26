import "./style.css"
import { rendeMenu } from "./menu";
import { renderAbout } from "./about";
import { renderHome } from "./home";

const content = document.querySelector("#content")
const menuBtn = document.querySelector(".btnTwo")
const aboutBtn = document.querySelector(".btnThree")
const homeBtn = document.querySelector(".btnOne")
menuBtn.addEventListener("click", () => {
        content.innerHTML = ""
        rendeMenu()
})

aboutBtn.addEventListener("click", () => {
        content.innerHTML = ""

        renderAbout()
})

homeBtn.addEventListener("click", () => {
        content.innerHTML = ""

        renderHome()
})

renderHome()