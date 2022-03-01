import {ctx} from './app.js'

class Jugador{
    constructor(posX,posY,width,height,velocidad){
        this.posX=posX 
        this.posY=posY 
        this.width=width 
        this.height=height 
        this.velocidad=velocidad 

    }
    dibujar(){
        ctx.fillStyle="white" 
        ctx.fillRect(this.posX,this.posY,this.width,this.height)
    }
    update(direccion,tiempoDelta){
       if(direccion=='down')
       this.posY+=this.velocidad * tiempoDelta
       if(direccion=='up')
       this.posY-=this.velocidad * tiempoDelta
       if(direccion=='downStop')
       this.posY+=this.velocidad * 0 
       if(direccion=='upStop')
       this.posY-=this.velocidad * 0
    }
    mover(recojoDelta){
        
        document.addEventListener('keydown',(e)=>{
            console.log(e.key)
            if(e.key=='ArrowDown' && this.posY<=400){
                this.update('down',recojoDelta)
            }
            if(e.key=='ArrowUp' && this.posY>0){
                this.update('up',recojoDelta)
            }
          
        })


        document.addEventListener('keyup',(e)=>{
            if(e.key=="ArrowDown"){
                this.update('downStop')
            }
            if(e.key=='ArrowUp'){
                this.update('upStop')
            }
        })
    }



}

export let jugador=new Jugador(20,200,20,100,0.03)