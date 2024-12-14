const div = document.querySelector('div')

const btn= document.querySelector('button')
const input= document.querySelector('input')
btn.addEventListener("click",()=>{
    let clr="#"
    let color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    for(let i=0; i<6;i++){
        clr += color[Math.floor(Math.random()*16)]
    }

    div.style.background= clr
    input.value= clr
})