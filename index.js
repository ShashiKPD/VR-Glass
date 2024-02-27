
const body = document.body
const prod1 = document.getElementById("prod-1")
const prod2 = document.getElementById("prod-2")
const heroImg = document.getElementById("hero-img")
const prod1Src = "./assets/VR-wearing-Man-cropped.png"
const prod2Src = "./assets/VR-headset.png"


prod1.addEventListener('click',(event)=>{ 
    heroImg.src = prod1Src;
})

prod2.addEventListener('click',(event)=>{
    heroImg.src = prod2Src;
})
console.log("Hello Shashi")