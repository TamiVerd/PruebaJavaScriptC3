/* obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000] */

/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento. */

//'lunes', 'miercoles', 'viernes', 'sabado', 'domingo'

function decuentosMyJ(dia, total){
    if (dia == ('martes', 'jueves')){  //debe reconocer dias como string y deben ser iguales a martes/jueves
         return (total * 0.80)          //se hace el decuento
    } else {
        (dia !== ('martes', 'jueves'))  // debe reconocer dias como string y deben ser distintos de martes/jueves
        return 'Hoy no aplica descuendo'                                 // para no hacer el descuento
    }
}
// ingresar dia y total de compra para hacer o no hacer el decuento
console.log (decuentosMyJ('martes', 3400))
console.log (decuentosMyJ('viernes', 5400))

/* Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento. */
// 
var productos = [10000, 500, 650, 8000]
let cantidad = (productos.length)
let productosord = [productos.sort()]
let mayor = productosord[productosord.length-1]
return mayor

console.log (productosord)
console.log (cantidad)
console.log (mayor)

function descuento5p(cantidad, productos) {
    if (cantidad > 3)(mayor >= 10000) {                      //verificar si hay mas de 3 productos
        let productosord = (productos.sort())  //ordenar productos con .sort
        let mayor = productosord[productosord.length-1]   // definir lugar del numero mayor (-1)

    } else {
        return 'no corresponde descuento'      //Si no cumple las condiciones no aplica descuento
    }
}

/* Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba. */


/* Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso. */

var array = [200,5500,900,7000,500,300]
let largo = (valores.length)
let valoresordenados = [valores.sort()]

function productomas(array)
    let valores = array.sort()
    let mayorp = valores[valores.length -1]
    return mayorp


    // no lo alcance a terminar pero hice lo que pude con lo que hemos practicado