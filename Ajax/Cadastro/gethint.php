<?php
    //vetor de nomes
    $n[] = "Rodrigo";
    $n[] = "Yan";
    $n[] = "Isabela";
    $n[] = "Rebeca";

    //vetor de cpf
    $c[] = "543.234.123-42";
    $c[] = "321.421.453-76";
    $c[] = "214.654.864-64";
    $c[] = "454.454.412-43";
    
    //vetor de rg
    $r[] = "18.901.921-2";
    $r[] = "53.354.356-4";
    $r[] = "84.465.398-7";
    $r[] = "94.954.456-2";
       

    //função para exibir sugestões de dados
    function recomendar($vetor) {
        
        $q = $_REQUEST["q"];

        $dica = "";

        if($q != ""){
            $q = strtolower($q);
            $len=strlen($q);
            foreach($vetor as $dado){
                if (stristr($q, substr($dado, 0, $len))){
                    if ($dica == "")
                        $dica = $dado;
                    else
                        $dica .= ", $dado";
                }
            }
        }

        echo $dica === "" ? "Nenhuma sugestão" : $dica;
    }

    //Recuperar tipo de dado da sugestão 
    $type = $_GET['type'];

    //Verifica o tipo de dado e chama a função
    if ($type == 'nome'){
        recomendar($n); //vetor de nome
    } else if ($type == 'cpf'){
        recomendar($c); //vetor de cpf
    } else if ($type == 'rg'){
        recomendar($r); //vetor de rg
    }

?>