import "./style.css"
import { rendeMenu } from "./menu";

const menuBtn = document.querySelector(".btnTwo")

about()

menuBtn.addEventListener("click", () => {
        rendeMenu()
})