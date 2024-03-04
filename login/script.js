document.addEventListener('DOMContentLoaded', function(){
    let usuario; 
    let senha;

    const nome = 'user';
    const pass = '123';
    
    const form = document.querySelector('.login');

    function validacao (){

        if (usuario === nome && senha === pass){
        console.log('entrou')
        
    }
        else{
            const p = document.createElement('p')
            p.classList.add('msgError')
            p.textContent = "Usuario ou senha incorretos."
            form.appendChild(p)
            
            setTimeout(function(){
                form.removeChild(p)
            },4000)
        }

    }


    function prevenirEnvio(envio){
        envio.preventDefault();
        
        usuario = document.getElementById('usuario').value; 

       senha = document.getElementById('senha').value


      
       validacao();

       document.getElementById('usuario').value = ""
       document.getElementById('senha').value = ""
    }

    
    

   
    form.addEventListener('submit', prevenirEnvio)
})
