
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiarTexto = document.querySelector("#btnCopiarTexto");
var figureResultado = document.querySelector("#ocultar-figure");
var txtEncriptar = document.querySelector("#txt-encriptar");

function display() {



    if (txtEncriptar.value.length > 0) {


        figureResultado.style.visibility = "hidden";
        btnCopiarTexto.style.visibility = "visible"; 
        document.getElementById("muneco").style.display = "none";



    } else {

        figureResultado.style.visibility = "visible";
        btnCopiarTexto.style.visibility = "hidden";
        document.getElementById("muneco").style.display = "block";

    }


}

// Al comienzo el boton debe estar oculto:
display();

function mostrarResultado(textoAMostrar) {

    var textoResultado = document.querySelector("#txt-resultado");
    textoResultado.textContent = textoAMostrar;
    display();
    txtEncriptar.value = "";

}

function encriptar() {

    var txtAEncriptar = txtEncriptar.value;
    var txtEncriptado = "";
    // Uzamos el metodo replaceAll() para eliminar todas las repeticiones de e, i, a, o, u en el texto.
    txtEncriptado = txtAEncriptar.replaceAll("e", "enter");
    txtEncriptado = txtEncriptado.replaceAll("i", "imes");
    txtEncriptado = txtEncriptado.replaceAll("a", "ai");
    txtEncriptado = txtEncriptado.replaceAll("o", "ober");
    txtEncriptado = txtEncriptado.replaceAll("u", "ufat");

    mostrarResultado(txtEncriptado);
    
}

function desencriptar() {

    var txtADesencriptar = txtEncriptar.value;

    if (!txtADesencriptar.length) {

        return 0;

    }

    console.log(txtADesencriptar);
    var txtDescenpcriptado = "";

    txtDescenpcriptado = txtADesencriptar.replaceAll("enter", "e");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("imes", "i");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ai", "a");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ober", "o");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ufat", "u");

    mostrarResultado(txtDescenpcriptado);

}

function copiarTexto() {

    var textoResultado = document.querySelector("#txt-resultado").value;

    navigator.clipboard.writeText(textoResultado).then(accepted => {

        var textoResultado = document.querySelector("#txt-resultado");
        textoResultado.textContent = textoAMostrar;

    }, rejected => {

        console.log("No se pudo copiar al portapapeles");

    });

}


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiarTexto.addEventListener("click", copiarTexto);
