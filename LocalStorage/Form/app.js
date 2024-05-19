//Fiz o que os 3 exercicios pedia em 1 só!!

document.querySelector('#button').addEventListener('click', function() {
    let nome = document.forms["meuForm"]["nome"].value;
    let sobrenome = document.forms["meuForm"]["sobrenome"].value;
    let idade = document.forms["meuForm"]["idade"].value;
    let email = document.forms["meuForm"]["email"].value;
    let telefone = document.forms["meuForm"]["telefone"].value;
    
    function verificar(n, s, i, em, t) {
        
        let val = document.getElementById("valido");
        
        try{
            if (n == null || n == ""){
                throw "O nome deve ser preenchido"
            }
            
            if (s == null || s == ""){
                throw "O sobrenome deve ser preenchido"
            }
            
            if (i == null || i == ""){
                throw "A idade deve ser preenchida"
            } else if (i < 0 || i > 115){
                throw "Idade inválida"
            }

            if (em == null || em == ""){
                throw "O email deve ser preenchido"
            } else if (email.indexOf("@") < 1) {
                throw "O email deve conter um @"
            }

            
            if (t == null || t == ""){
                throw "O telefone deve ser preenchido"
            } else if (t.length != 11){
                throw "O telefone deve ter 11 números"
            }

            return true;
            
            

        } catch (err) {
            val.style.color = "#FF0000";
            val.innerHTML = "Erro: " + err;
            return false;
        } // fim catch
        
    } // fim function
    
    //verificar(nome, sobrenome, idade, email, telefone)
    if(verificar(nome, sobrenome, idade, email, telefone) == true) {
        let val = document.getElementById("valido");
        let nomeP = document.getElementById("nomeP");
        let sobrenomeP = document.getElementById("sobrenomeP");
        let idadeP = document.getElementById("idadeP");
        let telefoneP = document.getElementById("telefoneP");
        let emailP = document.getElementById("emailP");
        val.style.color = "#02B126";
        let user = {
            userName: nome,
            userLastName: sobrenome,
            userAge: idade,
            userEmail: email,
            userPhone: telefone
        };

        localStorage.setItem("nomeStorage", user.userName);
        localStorage.setItem("sobrenomeStorage", user.userLastName);
        localStorage.setItem("idadeStorage", user.userAge);
        localStorage.setItem("emailStorage", user.userEmail);
        localStorage.setItem("telefoneStorage", user.userPhone);
        nomeP.textContent = localStorage.getItem("nomeStorage");
        sobrenomeP.textContent = localStorage.getItem("sobrenomeStorage");
        idadeP.textContent = localStorage.getItem("idadeStorage");
        telefoneP.textContent = localStorage.getItem("telefoneStorage");
        emailP.textContent = localStorage.getItem("emailStorage");
        val.innerHTML = "Usuário cadastrado!";
    };
});