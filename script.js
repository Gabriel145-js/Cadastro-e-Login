addEventListener('DOMContentLoaded', function(){
    
    //Botao on off para tema escuro ou claro

    const checkboxToggle = document.getElementById('checkbox-toggle')
    const labelToggle = document.querySelectorAll('.label-toggle')
    document.body.classList.add('meu-body')
    const meuBody = document.querySelector('.meu-body')
    const navBar = this.document.querySelector('.navBar')

    checkboxToggle.addEventListener('change',function(){
        if(checkboxToggle.checked){
            meuBody.style.background= "#000000"; 
            navBar.style.backgroundColor = '#000000';
        } else {
            meuBody.style.background = ""; 
            navBar.style.backgroundColor = '';
        }
    })

    


})
