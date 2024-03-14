// main.js
document.addEventListener('DOMContentLoaded', function() {
// Función para ajustar dinámicamente el ancho del input según el texto ingresado
function ajustarAnchoInput() {
    var input = document.getElementById('textoCuadroInput');
    var textoIngresado = input.value;
    var textoWidth = getTextWidth(textoIngresado, '16px sans-serif'); // Ajusta la fuente según tu estilo
    input.style.width = textoWidth + 'px';
}

// Función para obtener el ancho del texto
function getTextWidth(text, font) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

// Llama a la función para ajustar el ancho del input cuando se modifica el texto
document.getElementById('textoCuadroInput').addEventListener('input', ajustarAnchoInput);


//encriptar el texto     
function encriptarTexto() {
    var textoIngresado = document.getElementById('textoCuadroInput').value.toLowerCase();
    console.log('Texto ingresado:', textoIngresado);
    var textoEncriptado = '';

    // Verificar si el texto ingresado contiene caracteres no permitidos
    var caracteresPermitidos = /^[a-z ]+$/;
    if (!caracteresPermitidos.test(textoIngresado)) {
        console.log('Caracteres no permitidos');

        // Mostrar los caracteres no permitidos
        var caracteresNoPermitidos = textoIngresado.match(/[^a-z ]/g);
        console.log('Caracteres no permitidos:', caracteresNoPermitidos);

        // Caracteres no permitidos, mostrar mensaje y enfocar infoTexto
        var infoTexto = document.getElementById('infoTexto');
        infoTexto.style.border = '2px solid red'; // Puedes ajustar el estilo de resaltado aquí
        infoTexto.focus();
        return; // Detener la ejecución si hay caracteres no permitidos
    } else {
        console.log('Caracteres permitidos, continuando...');
    }

    for (var i = 0; i < textoIngresado.length; i++) {
        var letra = textoIngresado[i];
        switch (letra) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += letra;
        }
    }

    var textoMostrar = document.getElementById('textoMostrar');
    textoMostrar.innerHTML =  textoEncriptado;
    textoMostrar.style.display = 'block';

    // Mostrar el botón de copiar
    var copiarBoton = document.getElementById('copiarBoton');
    copiarBoton.style.display = 'block';

    // Ocultar otros elementos
    var muñeco = document.querySelector('.muñeco');
    muñeco.style.display = 'none';

    var error = document.getElementById('error');
    error.style.display = 'none';

    var ingresar = document.getElementById('ingresar');
    ingresar.style.display = 'none';

    // Borrar el texto pegado en el input
    document.getElementById('textoCuadroInput').value = '';

    // Obtener el nombre del botón y mostrarlo
    var nombreBoton = document.getElementById('darkBlueButtonText');
    nombreBoton.innerHTML = 'Encriptar';

    // Si el proceso continúa, puedes restablecer el estilo del infoTexto
    var infoTexto = document.getElementById('infoTexto');
    infoTexto.style.border = 'none';

}


// Desencriptar el texto
function desencriptarTexto() {
// Obtener el elemento con el ID 'textoMostrar'
var textoMostrarElement = document.getElementById('textoMostrar');

// Verificar si el elemento existe
if (textoMostrarElement) {
// Obtener el valor del cuadro de texto encriptado
var textoEncriptado = textoMostrarElement.innerText;

// Reemplazar las palabras encriptadas con las originales
var textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');


// Mostrar el texto desencriptado en la consola para depuración
console.log('Texto Desencriptado:', textoDesencriptado);
textoMostrar.innerHTML =  textoDesencriptado;

// Mostrar el texto desencriptado en el cuadro de texto original
document.getElementById('textoCuadroInput').value = textoDesencriptado;


// Ocultar el botón de copiar
var copiarBoton = document.getElementById('copiarBoton');
copiarBoton.style.display = 'block';

// Ocultar el texto encriptado
textoMostrarElement.style.display = 'block';

// Mostrar otros elementos
var muñeco = document.querySelector('.muñeco');
muñeco.style.display = 'none';

var error = document.getElementById('error');
error.style.display = 'none';

var ingresar = document.getElementById('ingresar');
ingresar.style.display = 'none';

// Borrar el texto pegado en el input
document.getElementById('textoCuadroInput').value = '';

// Obtener el nombre del botón y mostrarlo
var nombreBoton = document.getElementById('lightBlueButtonText');
nombreBoton.innerHTML = 'Desencriptar';
}
}

// Copiar el texto al portapapeles
function copiarTexto() {
    var textoMostrar = document.getElementById('textoMostrar');
    var textoEncriptado = textoMostrar.innerText.trim();

// Extraer solo el texto encriptado
    var soloTextoEncriptado = textoEncriptado.replace('Texto Encriptado: ', '');

    var textarea = document.createElement('textarea');
    textarea.value = soloTextoEncriptado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Asignar el texto encriptado al cuadro de texto original
// document.getElementById('textoCuadroInput').value = soloTextoEncriptado;


    // Puedes dar alguna indicación de que se ha copiado, por ejemplo:
   // alert('Texto copiado al portapapeles: ' + soloTextoEncriptado);
}

// Función para aplicar estilos según la resolución
function ajustarEstilos() {
    var anchoPantalla = window.innerWidth;

    // Ejemplo: si el ancho de la pantalla es menor o igual a 600px
    if (anchoPantalla <= 600) {
        document.getElementById('rectangulo').style.width = '90vw';
        document.getElementById('rectangulo').style.height = '60vh';
        // Agrega más ajustes según sea necesario
    } else {
        // Restaura los estilos para pantallas más grandes
        document.getElementById('rectangulo').style.width = '25vw';
        document.getElementById('rectangulo').style.height = '80vh';
        // Restaura otros estilos según sea necesario
    }
}

// Llama a la función cuando la ventana se carga y se redimensiona
window.addEventListener('load', ajustarEstilos);
window.addEventListener('resize', ajustarEstilos);

});