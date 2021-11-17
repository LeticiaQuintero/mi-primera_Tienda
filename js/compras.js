/*/solicitar los datos con un promt
var costo = Number (prompt("precio del producto")//el prompt arroja strings)

var unidad = Number (prompt("precio por unidad"))

var TOTAL = costo * unidad
alert(TOTAL)*/

var preciopastel30 = Number(prompt("precio del pastel para 30 personas"))
/*var unidades = Number(prompt("numero de pasteles"))
var totalpastel30 = preciopastel30 * unidades

var preciopastel20 = Number(prompt("precio del pastel para 20 personas"))
var unidad = Number(prompt("numero de pasteles"))
var totalpastel20 = preciopastel20 * unidad

var preciopastel15 = Number(prompt("precio del pastel para 15 personas"))
var Unidaeds = Number (prompt("numero de pasteles"))
var totalpastel15 = preciopastel15 * Unidaeds

var total = totalpastel15 + totalpastel20 +totalpastel30

var carritodeCompras = document.getElementById("compras")
carritodeCompras.innerText = total
//seleccionar el div de html que se va a imprimir//*/
var formulario = document.querySelector("#compras")
console.log(formulario)
var precios = [350, 270, 180]
console.log(precios[0])
formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault()
    console.log("presiona el botón")
    var cantidad_productos = document.getElementById("cantidad_productos").value
    console.log(cantidad_productos)

})



