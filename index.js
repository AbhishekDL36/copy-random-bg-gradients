const div = document.querySelector('div')

const btn= document.querySelector('button')
const input= document.querySelector('input')



const inputCount= document.querySelector('select')

let count= 0


inputCount.addEventListener("change",(e)=>{


count= e.target.value
console.log(count)
})


btn.addEventListener("click",()=>{
    let clr1="#"
    let clr2= "#"
    let clr3="#"
    let clr4= "#"

    let color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    

    for(let i=0; i<6;i++){
        clr1 += color[Math.floor(Math.random()*16)]
    }

    for(let i=0; i<6;i++){
        clr2 += color[Math.floor(Math.random()*16)]
    }

    for(let i=0; i<6;i++){
        clr3 += color[Math.floor(Math.random()*16)]
    }

    for(let i=0; i<6;i++){
        clr4 += color[Math.floor(Math.random()*16)]
    }

    if(count==1){

        div.style.background= clr1;
        input.value= `background-color: ${ clr1}`
    
    }

    if(count==2){

        div.style.background= `linear-gradient( to right, ${clr1},${clr2})`;
        let gradient = `linear-gradient( to right, ${clr1},${clr2})`
        
        
        input.value= gradient
    }

    if(count==3){

        div.style.background= `linear-gradient( to right, ${clr1},${clr2},${clr3})`;
        let gradient = `linear-gradient( to right, ${clr1},${clr2},${clr3})`
        
        
        input.value= gradient
    }

    if(count==4){

        div.style.background= `linear-gradient( to right, ${clr1},${clr2},${clr3},${clr4})`;
        let gradient = `linear-gradient( to right, ${clr1},${clr2},${clr3},${clr4})`
        
        
        input.value= gradient
    }

})

let copyBtn= document.querySelector(".btn2")

copyBtn.addEventListener("click", () => {
    const code = input.value;

    
    navigator.clipboard.writeText(code).then(() => {
        alert(`Gradient code copied: ${code}`);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
});

