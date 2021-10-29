const input = document.getElementById('emailI');

const expresiones = {

    	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
    }

    const campos = {
        correo:false,
    };
    const validarFormulario = (e) => {

        if(e.target.name == "correo"){

            if(expresiones.correo.test( e.target.value)){
                showElements("correo")
    
            }else{
                hideElements("correo")
    
            }
        }
        
    }
    function showElements (campo){
        
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
        
    };

    function hideElements (campo){
        
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    };



    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);


    window.addEventListener("load",function(){


        $("#agregarId").click(function(e){ 

            e.preventDefault();
         
            if(campos.correo){
                $("#agregarId").unbind('click').click();
        
            }else{
                
                document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
                setTimeout(() => {
        
                    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
                
                }, 3000);
                }
         
         });
        
    });
    