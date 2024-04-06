document.querySelector('#button').addEventListener('click', function() {
    function verificar() {
        
        let val = document.getElementById("valido");

        try{
            let nome = document.forms["meuForm"]["nome"].value;
            if (nome == null || nome == ""){
                throw "O nome deve ser preenchido"
            }

            let sobrenome = document.forms["meuForm"]["sobrenome"].value;
            if (sobrenome == null || sobrenome == ""){
                throw "O sobrenome deve ser preenchido"
            }

            let idade = document.forms["meuForm"]["idade"].value;
            if (idade == null || idade == ""){
                throw "A idade deve ser preenchida"
            } else if (idade < 0 || idade > 115){
                throw "Idade inválida"
            }

            let email = document.forms["meuForm"]["email"].value;
            if (email == null || email == ""){
                throw "O email deve ser preenchido"
            } else if (email.indexOf("@") < 1) {
                throw "O email deve conter um @"
            }

            let telefone = document.forms["meuForm"]["telefone"].value;
            if (telefone == null || telefone == ""){
                throw "O telefone deve ser preenchido"
            } else if (telefone.length != 11){
                throw "O telefone deve ter 11 números"
            }

            return true;
            
            

        } catch (err) {
            val.style.color = "#FF0000";
            val.innerHTML = "Erro: " + err;
            return false;
        } // fim catch

    } // fim function
    
    verificar()
    if(verificar() == true) {
        let val = document.getElementById("valido");
        val.style.color = "#02B126";
        val.innerHTML = "Usuário cadastrado!";
    };
});