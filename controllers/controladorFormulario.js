//scope de las variables de JS

//almacenando una etiqueta HTML en una variable en JS
//hago esto para poder controlar esa etiqueta desde la logica de JS

let productNamebox=document.getElementById("name")
let productPricebox=document.getElementById("price")
let productDescriptionbox=document.getElementById("description")
let productPhotobox=document.getElementById("photo")
let productReviewbox=document.getElementById("review")
let productBrandbox=document.getElementById("brand")
let productformButtonbox=document.getElementById("formButton")

//COMO DETECTO UN EVENTO EN JS?
//1.Una vez tenga una variable que 
//almacena la etiqueta sobre la cual querio escuchar el evento 

//2.La funcion o metodo propio del JS (perro guardian)

productformButtonbox.addEventListener("click",function(evento){

    evento.preventDefault()
    //logica que deseo activar si el eventose detecto con exito 
    console.log("acaban de darle clic al formulairo")

    //como capturar el valor de un input de un formulario?
    let nombreproducto=productNamebox.value
    let precioproducto=productPricebox.value
    let descripcionproducto=productDescriptionbox.value
    let fotoproducto=productPhotobox.value
    let reseñaproducto=productReviewbox.value
    let marcaproducto=productBrandbox.value

    //mostrando los valores capturados 

    console.log(nombreproducto,precioproducto,descripcionproducto,fotoproducto,marcaproducto,reseñaproducto)
})
