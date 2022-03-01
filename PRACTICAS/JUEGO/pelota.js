import { ctx } from "./app.js"
import { jugador } from "./jugador.js"


class Bola{
    constructor(posX,posY,radio,direccionX,direccionY,velocidad,body,container,nivelMarcador,vidasMarcador,nivel,vidas){

        this.posX=posX 
        this.posY=posY 
        this.radio=radio 
        this.direccionX=direccionX 
        this.direccionY=direccionY 
        this.velocidad=velocidad
        this.body=document.querySelector('body') 
        this.container=document.createElement('div') 
        this.nivelMarcador=document.createElement('h1') 
        this.vidasMarcador=document.createElement('h1')
        this.nivel=nivel 
        this.vidas=vidas

     } 

     dibujar(){
         ctx.beginPath() 
         ctx.arc(this.posX,this.posY,this.radio,0,2*Math.PI) 
         ctx.fillStyle="rgba(255,255,255)"
         ctx.fill()
     } 

     mover(delta){
         this.posX+=this.velocidad * this.direccionX * delta
         this.posY+=this.velocidad * this.direccionY * delta
     }
     colisiones(){
         if(this.posX>780)
         this.direccionX=-1
         if(this.posX<15){
             this.posX=400 
             this.vidas-=1
             if(this.vidas<1)
                 window.location.reload()
             }
         if(this.posY>500)
             this.direccionY=-1 
         if(this.posY<20)
            this.direccionY=1

        if(this.posX<jugador.posX + 20 && 
           this.posY>=jugador.posY && 
           this.posY< jugador.posY + 100){
             
             this.direccionX=1
           
            }
         
         }


      aceleracion(){
          
        this.body.append(this.container)
        this.container.append(this.nivelMarcador,this.vidasMarcador)
          
        
        
        setInterval(()=>{
             this.velocidad+=1 
             this.nivel+=1
           },10000)
      
      }

      renderizarMarcador(){
          this.nivelMarcador.textContent=`Nivel : ${this.nivel}` 
          this.vidasMarcador.textContent=`Vidas : ${this.vidas}`
      }
 }
    
    


export let bola=new Bola(400,200,10,1,1,1,null,null,null,null,0,3) 
bola.aceleracion()