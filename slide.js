const CIR_LIS=document.querySelectorAll('.circles li')
const SLI_BX=document.querySelector('.bx')
const SLI_LIS=SLI_BX.querySelector('li')
let index=0
let timer=null
let current=0
listenCirClicked(CIR_LIS)
autoplay()


function rmActive(item){
    for(let j=0;j<item.length;j++){
        item[j].classList.remove('active')
    }
}
function listenCirClicked(item){
    for(let i=0;i<item.length;i++){
        item[i].addEventListener('click',function(){
            rmActive(item)
            this.classList.add('active')
            index=i
            goto(SLI_BX,index)
        })
    }
}

function goto(item,index){
    current= -12.5*index
    item.style.transform="translateX("+ current +"%)"
}
function autoplay(){
    timer=null
    timer=setInterval(function(){
    index++
    if(index==8){
        index=0
    } 
    rmActive(CIR_LIS)
    CIR_LIS[index].classList.add('active')
    goto(SLI_BX,index)
   },1000)
}