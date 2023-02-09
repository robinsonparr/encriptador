


function campoVacio(){

    alert("Ingresa el texto para encriptar o desencriptar.")

}



function encriptar() {

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("BotonesDerecha");
    let texto = document.getElementById("textIzq").value;


    if (texto.length!=0) {

        if (/[^a-zñ ]/.test(texto)) {
            

            alert("Escribe solo letras minusculas y sin acento")

        }else{

            sinMensaje.style.display= "none";
            salidaDetexto.style.display= "flex";
            contenedorBotonesDerecho.style.display= "flex";

            let cifradoText = texto.replace(/e/gm, "enter");
            cifradoText = cifradoText.replace(/i/gm, "imes");
            cifradoText = cifradoText.replace(/a/gm, "ai");
            cifradoText = cifradoText.replace(/o/gm, "ober");
            cifradoText = cifradoText.replace(/u/gm, "ufat");

            document.getElementById("textAreaDerecha").innerHTML = cifradoText;

        }
 

    }else{
       
        campoVacio();
    }

}

function copy() {
    let texto = document.getElementById("textAreaDerecha");
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado")
}


function desencriptar(){

    let sinMensaje = document.getElementById("sinMensaje");
    let salidaDetexto = document.getElementById("salidaDetexto");
    let contenedorBotonesDerecho = document.getElementById("BotonesDerecha");
    let texto = document.getElementById("textIzq").value;


    if (texto.length!=0) {

        sinMensaje.style.display= "none";
        salidaDetexto.style.display= "flex";
        contenedorBotonesDerecho.style.display= "flex";

        let cifradoText = texto.replace(/enter/gm, "e");
        cifradoText = cifradoText.replace(/imes/gm, "i");
        cifradoText = cifradoText.replace(/ai/gm, "a");
        cifradoText = cifradoText.replace(/ober/gm, "o");
        cifradoText = cifradoText.replace(/ufat/gm, "u");

        document.getElementById("textAreaDerecha").innerHTML = cifradoText;

    }else{

        campoVacio();
    }

}