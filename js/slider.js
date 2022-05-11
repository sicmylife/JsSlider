var imagenes=["atanagildo","ataulfo","ervigio","leovigildo","recesvinto","sisebuto"];

window.onload=inicio;
var actual=Math.floor(Math.random()*imagenes.length-1);
var crono;

function inicio() {
    for(let k=0;k<imagenes.length;k++){
        document.querySelector("#bolitas").insertAdjacentHTML
        ('beforeend',`<div class="bolita" jab="${k}"></div>`);
        document.querySelectorAll(".bolita")[k].onclick=acceder;
    }
    cambiarImagen();
    crono=setInterval(cambiarImagen,2000);
  
}

function acceder(){
    clearInterval(crono)
    actual=this.getAttribute("jab");
    colorearBolitas()
    actualizarImagen();
    crono=setInterval(cambiarImagen,2000);
}

function cambiarImagen(){
    actual++;
    if(actual>=imagenes.length){
        actual=0;
    }
   actualizarImagen();
    colorearBolitas();

}
function actualizarImagen(){
    document.querySelector("#contenedor").innerHTML=
    `<img src="img/slider_${imagenes[actual]}.png">`;
}

function colorearBolitas(){
    for(let k=0;k<imagenes.length;k++){
        document.querySelectorAll(".bolita")[k].style.backgroundColor=null;
    }
    document.querySelectorAll(".bolita")[actual].style.backgroundColor="orange";
}
    
   

