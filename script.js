function eliminarBRDeParrafos() {
    var parrafos = document.getElementsByClassName('miTexto');
    for (var i = 0; i < parrafos.length; i++) {
        var brs = parrafos[i].getElementsByTagName('br');
        while (brs.length > 0) {
            brs[0].parentNode.removeChild(brs[0]);
        }
    }
}

function verificarTamaño() {
    if (window.innerWidth < 769) { // Ajusta este valor según tus necesidades
        eliminarBRDeParrafos();
    }
}


function encriptarTexto(){
    const div = document.getElementById('conteImg');
    const div2 = document.getElementById('conteTyb');
    div2.classList.remove("contenedor__tyb");
    div.classList.add('ocultar__contendor__imgh2p');
    div2.classList.add('mostrar__contenedor__tyb');
    let texto = document.getElementById('caTexto').value;
    
    // reglas de encriptación
    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Aplicar las reglas de encriptación 
    let textoEncriptado = texto.replace(/[eioua]/g, letra => reglasEncriptacion[letra]);
    console.log("Texto encriptado:", textoEncriptado);

    let elementoTexto = document.getElementsByClassName('texto__incriptado')[0];

    elementoTexto.innerHTML = textoEncriptado;
    document.getElementById('caTexto').value = "";
    return textoEncriptado;
    

}

function copiarTexto(){
    let textoEncriptado = document.getElementById('texto_incrip');
    let buton = document.getElementById('buton_copiar');

    navigator.clipboard.writeText(textoEncriptado.textContent);
    buton.textContent = 'Copiado';


}

function desencriptarTexto() {

     let textoEncriptado = document.getElementById('caTexto').value;
    const reglasDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    console.log(textoEncriptado);
    console.log("Texto desencriptado:", textoEncriptado);
    // Aplicar las reglas de desencriptación al texto encriptado
    let textoDesencriptado = textoEncriptado;
    for (let palabraEncriptada in reglasDesencriptacion) {
        let expresionRegular = new RegExp(palabraEncriptada, 'g');
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, reglasDesencriptacion[palabraEncriptada]);
    }
    let elementoTexto = document.getElementsByClassName('texto__incriptado')[0];
    elementoTexto.innerHTML = textoDesencriptado;
    document.getElementById('caTexto').value = "";
    return textoDesencriptado;
}

window.addEventListener('resize', verificarTamaño);
window.addEventListener('load', verificarTamaño);


