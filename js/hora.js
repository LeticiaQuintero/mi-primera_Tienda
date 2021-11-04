function actualizar(){  //definimos la funcion 
    var hoy = new Date()

    var segundos = hoy.getSeconds()

    var minutos  = hoy.getMinutes()
    var horas = hoy.getHours()
    var dia = hoy.getDate()
    var mes = hoy.getMonth()
    var año = hoy.getFullYear()

    mes = mes + 1
    
    if (minutos<10){
        minutos ="0" + minutos 
    } //solo si los minutos son menores a 10 le cambiamos el valor de minutos agrgando un 0 
    if (segundos<10){ 
        segundos = "0" + segundos
    } // solo si segundos es menor a 10 le cambiamos el valor de segundos agregando un 0 
    if (horas>12){ //solo si horas es mayor a 12 le pedimos que le reste 12 para tener el formato de 12 horas 
        // el orden de los condicionales permite saber que instrucciones se deben realizar antes 
        var horas = horas-12
    if(horas<10){ // despues de convertir el formato de horas ahora si se compara si es menor a 10 y cambiamos el valor agregando 0
        
            horas = "0" + horas
        }
        var  hora = horas + ":" + minutos +":" + segundos + "pm" // despues de ser calculado cada uno de los valores lo guardamos en un string que guardamos con el nombre de hora
        var horas = horas + 12 //le sumamos 12 para que regrese al valor original y no entre al otro condicional
        console.log(horas) 
    }
    else { //las instrucciones dentro de este condicional solo se ejecuta si no se cumple la condicion del primer if, es decir si horas es mas chico que 12 
        var  hora = horas + ":" + minutos +":" + segundos + "am"
        
    }
    if (dia<10){
        var dia = "0" + dia
    }
    if(mes<10){
        var mes = "0" + mes
    }
var fecha = dia+"/" +mes+ "/" + año
var fechacompleta = document.querySelector(".Fecha")
var horaCompleta = document.querySelector(".Hora")
horaCompleta.innerText = hora
fechacompleta.innerText = fecha

setTimeout(actualizar,1000)

}
actualizar()


