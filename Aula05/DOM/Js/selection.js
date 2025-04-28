function selectById(){
    const titulo = document.getElementById("titulo");  //seleciona o elemento pelo id
    console.log(titulo);
}

function selectByClass(){
    const paragrafo = document.getElementsByClassName("paragrafo"); //seleciona o elemento pela classe
    console.log(paragrafo);
}

function selectByTag(){
    const tagName = document.getElementsByTagName("li"); //seleciona o elemento pela tag
    console.log(tagName);
}


selectById();
selectByClass();
selectByTag();