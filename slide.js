const CIR_LIS=document.querySelectorAll('.circles>li')
for(let i=0;i<CIR_LIS.length;i++){
    CIR_LIS[i].addEventListener('click',function(){
        // console.log(this.parentNode.children.className="a")
        for(let j=0;j<CIR_LIS.length;j++){
            CIR_LIS[j].classList.remove('active')
        }
        this.classList.add('active')
    })
}
