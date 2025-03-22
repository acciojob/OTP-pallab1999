const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code,idx)=>{
    code.addEventListener("input",(event)=>{
        if(event.target.value.length === 1 && idx < codes.length - 1){
            codes[idx+1].focus();
        }
    })
    code.addEventListener("keydown",(event)=>{
        if(event.key === 'Backspace'){
            if(idx > 0){
                event.target.value = '';
                codes[idx-1].focus();
            }
        }
    })
})
