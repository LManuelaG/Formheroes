//scope de las variables de JS

//almacenando una etiqueta HTML en una variable en JS
//hago esto para poder controlar esa etiqueta desde la logica de JS

let productNamebox=document.getElementById("name")
let productLastnamebox=document.getElementById("lastname")
let productEmailbox=document.getElementById("email")
let productUserbox=document.getElementById("user")
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
})
