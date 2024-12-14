const div = document.querySelector('div')

const btn= document.querySelector('button')
const input= document.querySelector('input')
btn.addEventListener("click",()=>{
    let clr1="#"
    let clr2= "#"
    let color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    for(let i=0; i<6;i++){
        clr1 += color[Math.floor(Math.random()*16)]
    }

    for(let i=0; i<6;i++){
        clr2 += color[Math.floor(Math.random()*16)]
    }

    div.style.background= `linear-gradient( to right, ${clr1}, ${clr2})`;
let gradient = `linear-gradient( to right, ${clr1}, ${clr2})`


    input.value= gradient
})