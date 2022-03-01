const botonGrabar=document.getElementById('botonGrabar') 
const botonParar=document.getElementById('botonParar') 


let Reconocimiento=window.webkitSpeechRecognition || window.SpeechRecognition  
let recognition=new Reconocimiento() 

recognition.lang="es-Es"
recognition.continuous=true 

//RESULTADOS EN PANTALLA ********************************************************

const body=document.querySelector('body') 


const dibujaPantalla=function(frase){
    let color; 

    //pintamos segun color  
    if(frase=="Rojo.")color="red"
    if(frase=="Verde.")color="green"
    if(frase=="Amarillo.")color="yellow"
    if(frase=="Azul.")color="blue"
    if(frase=="Negro.")color="black" 

    //si falla el color pone uno por defecto 

    if(frase!="Rojo." || 
       frase!="Verde." || 
       frase!="Amarillo." || 
       frase!="Azul." || 
       frase!="Negro."){
           color="orangered"
       }

    localStorage.setItem('colorActual',color)


    body.style.backgroundColor=color 
    body.style.backgroundColor=window.innerWidth
    body.style.backgroundColor=window.innerHeight
}

// PERSISTENCIA DE DATOS EN LOCALSTORAGE  

window.addEventListener('DOMContentLoaded',()=>{
    let colorGuardado=localStorage.getItem('colorActual') 

    body.style.backgroundColor=colorGuardado; 
    body.style.width=window.innerWidth 
    body.style.height=window.innerHeight
})

//EVENTO  

recognition.onstart=function(){
    console.log("Microfono funciona perfectamente")
}

recognition.onresult=function(event){
    const results=event.results; 
    const frase=results[results.length-1][0].transcript 
    console.log(frase) 
    dibujaPantalla(frase)
}

botonGrabar.addEventListener('click',()=>{
    recognition.start()
})

botonParar.addEventListener('click',()=>{
    recognition.abort()
})