// Loader

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList
      .add("loader-hide")

  },1200)

})


// Typing

const words = [
  "WEB",
  "HTML",
  "CSS",
  "JAVASCRIPT"
]

let index = 0

const typing =
document.getElementById("typing")

setInterval(() => {

  typing.textContent =
  words[index]

  index++

  if(index >= words.length){
    index = 0
  }

},2000)


// Partículas

const particles =
document.getElementById("particles")

for(let i = 0; i < 60; i++){

  const particle =
  document.createElement("div")

  particle.classList.add("particle")

  particle.style.left =
  Math.random() * 100 + "%"

  particle.style.animationDuration =
  10 + Math.random() * 20 + "s"

  particle.style.opacity =
  Math.random()

  particles.appendChild(particle)
}


// Tilt Cards

document
.querySelectorAll(".tilt")
.forEach(card => {

  card.addEventListener("mousemove",(e)=>{

    const rect =
    card.getBoundingClientRect()

    const x =
    e.clientX - rect.left

    const y =
    e.clientY - rect.top

    const rotateX =
    ((y / rect.height)-0.5) * -15

    const rotateY =
    ((x / rect.width)-0.5) * 15

    card.style.transform =
    `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    `
  })

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
    "perspective(1000px) rotateX(0) rotateY(0)"
  })

})