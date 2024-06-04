const showHint = (str, type) => {
    if(str.length == 0){
        document.getElementById('textHint').innerHTML = '';
        return;
    }else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "gethint.php?q=" + str + "&type=" + type, true);
        xmlhttp.send();
    }
}