const matriz = [
    //[Letra,Numero,Simbolo,Punto}
    [1, 2, 3, 0],//E0
    [1, 4, 0, 0],//E1=Letras
    [0, 2, 0, 5],//E2=Numeros
    [0, 0, 3, 0],//E3=Simbolo
    [4, 4, 0, 0],//E4=Identificador
    [0, 6, 0, 0],//E5=PosFlotante
    [0, 6, 0, 0]];//E6=Flotante

const expresionLetra = /^[a-z]|^[A-Z]/
const expresionNumero = /^[0-9]*$/
const simbolos = ['+', '-', '*', '/', '%', '=', '>', '<', '(', ')', '{', '}', '"', ';','“','”'];
const palabrasReservadas = ["variable", "entero", "mientras", "hacer", "si", "sino", "decimal", "boolean", "cadena"];
const palabrasBoolean = ["VERDADERO", "FALSO"];
const operador = ['+', '-', '*', '/', '%', '=', '>', '<', '>=', '<=', '=='];
const simbolosCompuestos=['>=', '<=', '=='];
const agrupacion = ['(', ')', '{', '}'];
const signos = ['"', ';','“','”'];
var numeroDePalabra = 0;
var caracterDePalabra = 0;

module.exports = function leer(text) {
    var palabra = text.split(/\s+\n*/);
    if(numeroDePalabra==palabra.length){
        numeroDePalabra=0;
    }
    if (caracterDePalabra != 0) {
        palabraAAnalizar = palabra[numeroDePalabra].substr(caracterDePalabra);
        estado = 3;
    } else {
        var palabraAAnalizar = palabra[numeroDePalabra];
    }
    
    numeroDePalabra++;
    var estado;
    console.log(palabraAAnalizar+"pala");
        console.log(caracterDePalabra+"cala");
    for (i = 0; i < palabraAAnalizar.length; i++) {
        
        var caracter = palabraAAnalizar[i];
        if (i == 0) {
            estado = 0;
        }
        if (expresionLetra.test(caracter) == true) {
            estado = matriz[estado][0];

        } else if (expresionNumero.test(caracter)) {
            estado = matriz[estado][1];

        } else if (comparacionSimbolos(caracter)) {
            
            var aux = estado;
            estado = matriz[estado][2];
            if (i == 0 && i < palabraAAnalizar.length - 1) {
                numeroDePalabra--;
                if (comparacionSimbolos(palabraAAnalizar.substr(i+1))) {
                    console.log(caracter+palabraAAnalizar.substr(i+1));
                    if(comparacionSimbolosCompuestos(caracter+palabraAAnalizar.substr(i+1))){
                        if(i==palabraAAnalizar.length - 2){
                            numeroDePalabra++;
                            caracterDePalabra=0;
                        }else{
                            caracterDePalabra=i+2;
                        }
                        palabraAAnalizar = caracter + "" + palabraAAnalizar[i + 1];
                        return finalizarPalabra(palabraAAnalizar, estado);
                    }else{
                        caracterDePalabra = caracterDePalabra+1;
                    
                    return finalizarPalabra(palabraAAnalizar.charAt(0),estado);
                    }
                    
                } else {
                    console.log("log"+palabraAAnalizar.charAt(0))
                    caracterDePalabra = caracterDePalabra+1;
                    
                    return finalizarPalabra(palabraAAnalizar.charAt(0),estado);
                }


            } else if (i == 0) {
                caracterDePalabra=0;
                return finalizarPalabra(palabraAAnalizar, estado);
            } else {
                console.log(caracterDePalabra+"cccc")
                numeroDePalabra--;
                caracterDePalabra = caracterDePalabra+i;
                
                return finalizarPalabra(palabraAAnalizar.substr(0, i), aux);
            }

        } else if (caracter == ".") {
            estado = matriz[estado][3];
        } else {
            estado = 0;
        }
        //Simbolo

        if (estado == 0) {
            return "Error"
            break;
        }
        if (i === palabraAAnalizar.length - 1) {
            caracterDePalabra = 0;
            return finalizarPalabra(palabraAAnalizar, estado);

        }
    }
}

function finalizarPalabra(palabraAAnalizar, estado) {
    if (estado == 4) {
        return [palabraAAnalizar,"Identificador"];
    } else if (estado == 5) {
        return [palabraAAnalizar,"Error"];
    } else if (estado == 6) {
        return [palabraAAnalizar,"Flotante"];
    } else {
        return regresar(palabraAAnalizar, estado);

    }
}

function regresar(palabra, estado) {

    switch (estado) {
        case 1:
        
            for (k = 0; k < palabrasReservadas.length; k++) {
                if (palabrasReservadas[k] == palabra) {
                    return [palabra,"Palabra Reservada"] ;
                }
            }
            if (palabrasBoolean[1] == palabra || palabrasBoolean[0] == palabra) {
                return [palabra,"Boolean"];
            } else {
                return [palabra,"Identificador"];
            }
        case 2:
            return [palabra,"Numero"];
        case 3:
            for (k = 0; k < operador.length; k++) {
                if (operador[k] == palabra) {
                    return [palabra,"Simbolo de Operador"];
                }
            }
            for (k = 0; k < agrupacion.length; k++) {
                if (agrupacion[k] == palabra) {
                    return [palabra,"Simbolo de Agrupacion"];
                }
            }
            for (k = 0; k < signos.length; k++) {
                if (signos[k] == palabra) {
                    
                    return [palabra,"Signo"];
                }
            }
    }


}
function comparacionSimbolos(texto) {
    for (j = 0; j < simbolos.length; j++) {
        if (simbolos[j] === texto) {
            return true;
        }
    }
    return false;
}
function comparacionSimbolosCompuestos(texto) {
    for (l = 0; l < simbolosCompuestos.length; l++) {
        if (simbolosCompuestos[l] === texto) {
            return true;
        }
    }
    return false;
}
