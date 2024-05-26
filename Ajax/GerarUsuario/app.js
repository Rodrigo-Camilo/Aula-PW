//Link para pegar as informações: https://randomuser.me/

document.getElementById('randomizar-usuario').addEventListener('click', function() {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://randomuser.me/api/', true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            let user = data.results[0];
            let genero;
            if (user) {
                if (user.gender === "male") {
                    genero = "Masculino";
                } else if (user.gender === "female") {
                    genero = "Feminino";
                }

                let fullName = `${user.name.first} ${user.name.last}`;
                let email = user.email;""
                let foto = user.picture.large;
                let localizacao = `${user.location.country},\n ${user.location.state}, ${user.location.city}`
                let endereco = `${user.location.street.name}, ${user.location.street.number}`
                let idade = user.dob.age
                let celular = user.cell

                let userInfo = document.getElementById('user-info');
                userInfo.innerHTML = `<h2>Nome:${fullName}</h2>`
                userInfo.innerHTML += `<p><strong>Idade: </strong> ${idade} anos<p>`
                userInfo.innerHTML += `<p><strong>Genêro: </strong> ${genero}<p>`
                userInfo.innerHTML += `<p><strong>Celular: </strong> ${celular}<p>`
                userInfo.innerHTML += `<p><strong>Email: </strong> ${email}</p>`
                userInfo.innerHTML += `<p><strong>País, Estado e Cidade: </strong> ${localizacao}</p>`
                userInfo.innerHTML += `<p><strong>Endereço: </strong> ${endereco}</p>`
                userInfo.innerHTML += `<img src="${foto}" alt="Foto">`;
            } else {
                console.error('Erro: Usuário não encontrado na resposta da API.');
            }
        }
        if (this.readyState == 4 && this.status !== 200) {
            console.error('ERRO!');
        }
    };

    xhttp.send();
});
