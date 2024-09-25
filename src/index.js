import "./style.css"
import { rendeMenu } from "./menu";
import { renderAbout } from "./about";

const content = document.querySelector("#content")
const menuBtn = document.querySelector(".btnTwo")
const aboutBtn = document.querySelector(".btnThree")

menuBtn.addEventListener("click", () => {
        content.innerHTML = ""
        rendeMenu()
})

aboutBtn.addEventListener("click", () => {
        content.innerHTML = ""

        renderAbout()
})