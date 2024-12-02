// let name= prompt ("whats your name?");
// if(name=="matias"||name=="mati"){
// alert (`hello ${name} osorio`);
// } else{ alert(`hello ${name}`)}

const input1= document.querySelector(".input1");
const input2= document.querySelector(".input2");
const formulario= document.querySelector(".formulario");

input2.addEventListener("click",(e)=>{
    if(input1.value=="lepidoptera"){
        formulario.innerHTML=`felicidades, no sos un pelotudo`
    }
    else{formulario.innerHTML=`le erraste`}
})

let insectos={
// reino,filo,subfilo,clase,orden
    mariposa:["Animalia"," Arthropoda"," Hexapoda"," Insecta "," Lepidoptera"],
    araña: ["Animalia"," Arthropoda"," Chelicerata"," Arachnida"," Araneae"], 
    abeja: ["Animalia"," Arthropoda"," no tiene subfilo"," Insecta"," Hymenoptera"],
    hormiga: ["Animalia"," Arthropoda"," Hexapoda"," Insecta"," Hymenoptera"]
}

const bicho= document.querySelector(".bicho");
const boton= document.querySelector(".submit");
const formulario2=document.querySelector(".formulario2");

console.log(insectos["mariposa"][0])
boton.addEventListener("click",(e)=>{
    if (bicho.value=="mariposa"){
        formulario2.innerHTML=insectos["mariposa"]
    }
    else if (bicho.value=="araña"){
        formulario2.innerHTML=insectos["araña"]
    }
    else if(bicho.value=="hormiga"){
        formulario2.innerHTML=insectos["hormiga"]
    }
    else if (bicho.value=="abeja"){
        formulario2.innerHTML=insectos["abeja"]
    }
    else{formulario2.innerHTML=`elegi bien bobo`}
})