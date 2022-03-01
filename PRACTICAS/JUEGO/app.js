import { jugador } from "./jugador.js"
import {bola} from './pelota.js'

const canvas=document.querySelector('canvas') 
export const ctx=canvas.getContext('2d')  

const body=document.querySelector('body') 
const container=document.querySelector('.container')

canvas.width=800 
canvas.height=500 

canvas.style.border="8px solid white" 

body.style.display="flex"
body.style.justifyContent="center" 
body.style.alignContent="center" 
body.style.backgroundColor="gray" 

container.style.backgroundColor="black"


const perfectFrameTime=1000/60 
let deltaTime=0; 
let lastTimestamp=0 

function start(){
    requestAnimationFrame(animate)
}

function animate(timestamp){
    requestAnimationFrame(animate)
    deltaTime=(timestamp-lastTimestamp)/perfectFrameTime 
    lastTimestamp=timestamp

    canvas.width=800 
    canvas.height=500 


      
    jugador.dibujar()
    jugador.update()
    jugador.mover(deltaTime)

    bola.dibujar()
    bola.mover(deltaTime)
    bola.colisiones()
    bola.renderizarMarcador()

}
start()