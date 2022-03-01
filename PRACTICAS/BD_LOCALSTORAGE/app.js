let arrayDatos=[]
let arrayValidacion=[]

const formulario=document.querySelector('form')
const nombre=document.querySelector('#nombre')
const apellido1=document.querySelector('#apellido1')
const apellido2=document.querySelector('#apellido2')
const contrasena=document.querySelector('#contrasena')
const botonCerrar=document.querySelector('#cerrar')
const botonBorrar=document.querySelector('#borrar')

//2.VALIDAMOS LOS DATOS ****************************************** 

function validarNombre(nombre){
    if(nombre.trim()){
        if(nombre.length<10)
           arrayDatos.push(nombre)
           arrayValidacion.push('nombre')
    }
}

function validarApellido1(apellido1){
    if(apellido1.trim()){
        if(apellido1.length<10)
           arrayDatos.push(apellido1)
           arrayValidacion.push('apellido1')
    }
}
function validarApellido2(apellido2){
    if(apellido2.trim()){
        if(apellido2.length<10)
           arrayDatos.push(apellido2)
           arrayValidacion.push('apellido2')
    }
}
function validarContrasena(contrasena){
    if(contrasena.trim()){
        if(contrasena.length<10)
           arrayDatos.push(contrasena)
           arrayValidacion.push('contrasena')
    }
}






//1.LEEMOS EL FORMULARIO ************************************************************

window.document.addEventListener('change',(e)=>{
    e.preventDefault()

    if(e.target.matches('#nombre'))validarNombre(e.target.value)
    if(e.target.matches('#apellido1'))validarApellido1(e.target.value)
    if(e.target.matches('#apellido2'))validarApellido2(e.target.value)
    if(e.target.matches('#contrasena'))validarContrasena(e.target.value)
})

//3.GUARDANDO DATOS  *************************************************************** 

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

 for(let i=0; i<localStorage.length;i++){

    if(arrayValidacion.length==4 && localStorage.key(i)!=arrayDatos[3]){
       localStorage.setItem(`${arrayDatos[3]}`,JSON.stringify(arrayDatos))
       console.log(arrayDatos)
    
    }else if(localStorage.key(i)==arrayDatos[3]){
        console.log("La contraseña ya esta en uso")
    }else{
        console.log("Rellena todos los campos correctamente")
    }
 }

 nombre.value=""
 apellido1.value="" 
 apellido2.value=""
 contrasena.value=""
 arrayDatos.splice(0,4)



})
//6.IMPRESIÓN DATOS EN PÁGINA***********************************************
let data;

function impresionDatos(datos){
    data=JSON.parse(localStorage.getItem(`${datos}`))

   

    const contenido=document.querySelector('.contenido') 
    const nombreImprimir=document.createElement('h3') 
    const apellido1Imprimir=document.createElement('h3') 
    const apellido2Imprimir=document.createElement('h3') 

    contenido.style.width='100%' 
    contenido.style.border="2px solid orangered" 
    contenido.style.height="400px" 
    
    if(data){
    nombreImprimir.textContent=data[0] 
    apellido1Imprimir.textContent=data[1]
    apellido2Imprimir.textContent=data[2]
    }
   
    contenido.append(nombreImprimir,apellido1Imprimir,apellido2Imprimir)


}
impresionDatos()

//7.BORRAR DATOS **********************************************************************

window.addEventListener('click',(e)=>{

    if(e.target.matches('#cerrar')){
        window.location.reload()
    }

    if(e.target.matches('#borrar')){
        localStorage.removeItem(`${data[3]}`)
        const mensaje=document.createElement('h3')
        mensaje.textContent="Tus datos han sido eliminados"
        window.location.reload()
    }

})


//5.VERIFICAR USUARIO 

function verificarAcceso(contrasenaAcceso){
  
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)==contrasenaAcceso){
            impresionDatos(contrasenaAcceso)
        }
    }
}

//4.LEEMOS EL FORMULARIO  

window.addEventListener('change',(e)=>{
    e.preventDefault()

    if(e.target.matches('#contrasenaAcceso'))verificarAcceso(e.target.value)

})