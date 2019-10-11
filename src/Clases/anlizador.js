const matriz = [
    [1, 2, 3, 0],
    [1, 4, 0, 0],
    [0, 2, 0, 5],
    [0, 0, 0, 0],
    [4, 4 ,0 ,0],
    [0, 6, 0, 0],
    [0, 6, 0, 0]];

const expresionLetra = /^[a-z][A-Z]/
const expresionNumero = /^[0-9]*$/
const simbolos = ['+', '-', '*', '/', '%', '=', '>', '<', '(', ')', '{', '}', '"', ';'];
const palabrasReservadas = ["variable", "entero", "mientras", "hacer", "si", "sino", "decimal", "boolean", "cadena"];
const palabrasBoolean = ["VERDADERO", "FALSO"];
const operador = ['+', '-', '*', '/', '%', '=', '>', '<', '>=', '<=', '=='];
const agrupacion = ['(', ')', '{', '}'];
const signos = ['"', ';'];
var numeroDePalabra = 0;

module.exports = function leer(text) {

    var palabra = text.split(" ");
    console.log("numero"+numeroDePalabra);
    var palabraAAnalizar = palabra[numeroDePalabra];
    console.log(palabra[numeroDePalabra]);
    numeroDePalabra++;
    console.log(palabraAAnalizar.length);
    var estado;
    for ( i = 0; i < palabraAAnalizar.length; i++) {
        var caracter = palabraAAnalizar[i];
        
        if (i == 0) {
             estado = 0;            
        }
        console.log(estado);
        if (/^[a-z][A-Z]*/.test(caracter) == true) {
            estado = matriz[estado][0];
            
        } else if (expresionNumero.test(caracter)) {
            estado = matriz[estado][1];
            
        
        } else if (comparacionSimbolos(caracter)) {
            estado= matriz[estado][2];
            
        
        } else if(caracter=="."){
            estado = matriz[estado][3];
            
        
        }
        if(i===palabraAAnalizar.length-1 && estado != 0){
            console.log(estado);
            return regresar(palabraAAnalizar,estado);
        }
        if(estado== 0){
            return "Error"
            break;
        }
    }
}

function regresar(textoReconstruir,estado) {
    var palabraReconstruida = textoReconstruir.charAt[0];
    for(i=1; i < numeroDePalabra; i++) {
        palabraReconstruida = palabraReconstruida + textoReconstruir.charAt[i];
    }
    switch(estado){
        case 1: 
        for(i=0; i < palabrasReservadas.length; i++) {
            if(palabrasReservadas[i] == palabraReconstruida){
                return "El token es una Palabra Reservada";
            }
        }
        if(palabrasBoolean[1]== palabraReconstruida || palabrasBoolean[0]== palabraReconstruida){
            return "El token es un Boolean";
        } else {
            return "El token es un identificador";        
        }
        case 2: 
            return "El token es un Numero";
        case 3:
                for(i=0; i < operador.length; i++) {
                    if(operador[i] == palabraReconstruida){
                        return "El token es un Simbolo de Operador";
                    }
                } 
                for(i=0; i < agrupacion.length; i++) {
                    if(agrupacion[i] == palabraReconstruida){
                        return "El token es un Simbolo de Agrupacion";
                    }
                } 
                for(i=0; i < signos.length; i++) {
                    if(agrupacion[i] == palabraReconstruida){
                        return "El token es un Signo";
                    }
                }
    }
   /* 
    for(i=0; i < palabrasReservadas.length; i++) {
        if(palabrasReservadas[i] == palabraReconstruida){
            return "El token es una Palabra Reservada";
        }
    }
    if(palabrasBoolean[1]== palabraReconstruida || palabrasBoolean[0]== palabraReconstruida){
            return "El token es un Boolean";
    } else if(/^[0-9]*$/.test(palabraReconstruida)) {
            return "El token es un Numero";
    }
    
    return "El token es un identificador";
}*/

function comparacionSimbolos(texto) {
    for (i = 0; i < simbolos.length; i++) {
        if (simbolos[i] === texto) {
            return true;
        }
    }
    return false;
}
}

