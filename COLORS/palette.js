const containerOne = document.querySelector(".containerOne")
const btn = document.getElementById("btn")

const paletteBoxes = 42

const generatePalette = () => {
    containerOne.innerHTML = ""
    for (let x = 0; x < paletteBoxes; x++) {
    
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        

        const colorOne = document.createElement("li");
        colorOne.classList.add("colorOne");
        colorOne.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hexValue">${randomHex}</span>`
       
        colorOne.addEventListener("click", () => copyColor(colorOne, randomHex));
        containerOne.appendChild(colorOne);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hexValue");
    
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.classList.add("icon-clone")
        colorElement.innerHTML = ""
        setTimeout(function() {
            colorElement.innerText = hexVal;
            colorElement.classList.remove("icon-clone")
          },  1000);
        // setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!"));
}

btn.addEventListener("click", generatePalette);