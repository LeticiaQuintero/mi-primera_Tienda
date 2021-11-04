//pedir un numero al usuario
var numero = Number (prompt ("dame un numero"))


var resto = numero %2


if (resto ==0){
    alert( "es par" )
}
else if ( resto == 1){
    alert ( "es impar")
}

else{
    alert (" no es numero")
}