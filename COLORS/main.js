const colors = [
    "green", 
    "red", 
    "orange",
    "yellow",
    "blue",
    "rgba(133,122,200)", 
    "#f15025"
];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomColor(){
    return  Math.floor (Math.random() * colors.length) 
}

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()

    document.body.style.backgroundColor = colors[randomColor]

    color.textContent = colors[randomColor]
})