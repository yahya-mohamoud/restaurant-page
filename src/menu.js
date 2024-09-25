
export function menu () {
  const content =  document.querySelector("#content")
  const menuBtn = document.querySelector(".btnTwo")

  menuBtn.addEventListener("click", () =>{
        const conDiv = document.createElement("div")
        conDiv.classList.add("conDiv")

        conDiv.innerHTML = `<h1>hello</h1>`
        content.appendChild(conDiv)
        
  })
}

