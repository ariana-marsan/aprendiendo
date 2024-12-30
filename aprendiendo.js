// let name= prompt ("whats your name?");
// if(name=="matias"||name=="mati"){
// alert (`hello ${name} osorio`);
// } else{ alert(`hello ${name}`)}

const butterfly1= document.querySelector(".butterfly1");
const butterfly2= document.querySelector(".butterfly2");
const butterfly= document.querySelector(".butterfly");

butterfly2.addEventListener("click",(e)=>{
    if(butterfly1.value=="lepidoptera" || butterfly1.value=="Lepidoptera"){
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`Felicidades, no sos un pelotudo`;
        butterfly.outerHTML=div.outerHTML;
    }
    else{
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`le erraste`;
        butterfly.outerHTML=div.outerHTML;}
})

const aracnid1= document.querySelector(".aracnid1");
const aracnid2= document.querySelector(".aracnid2");
const aracnid= document.querySelector(".aracnid");

aracnid2.addEventListener("click",(e)=>{
    if(aracnid1.value=="jumping spider" || aracnid1.value=="Jumping Spider"){
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`Felicidades, no sos un pelotudo`;
        aracnid.outerHTML=div.outerHTML;
    }
    else{
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`le erraste`;
        aracnid.outerHTML=div.outerHTML;}
})

const mantis1= document.querySelector(".mantis1");
const mantis2= document.querySelector(".mantis2");
const mantis= document.querySelector(".mantis");

mantis2.addEventListener("click",(e)=>{
    if(mantis1.value=="Mantis" || mantis1.value=="mantis"){
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`Felicidades, no sos un pelotudo`;
        mantis.outerHTML=div.outerHTML;
    }
    else{
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`le erraste`;
        mantis.outerHTML=div.outerHTML;}
})

const ladybug1= document.querySelector(".ladybug1");
const ladybug2= document.querySelector(".ladybug2");
const ladybug= document.querySelector(".ladybug");

ladybug2.addEventListener("click",(e)=>{
    if(ladybug1.value=="yes" || ladybug1.value=="Yes"){
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`Felicidades, no sos un pelotudo`;
        ladybug.outerHTML=div.outerHTML;
    }
    else{
        let div = document.createElement("div");
        div.classList=("response");
        div.innerHTML=`le erraste`;
        ladybug.outerHTML=div.outerHTML;}
})

let insectos={
// reino,filo,subfilo,clase,orden
    mariposa:["Animalia"," Arthropoda"," Hexapoda"," Insecta "," Lepidoptera"],
    araña: ["Animalia"," Arthropoda"," Chelicerata"," Arachnida"," Araneae"], 
    mantis: ["Animalia"," Arthropoda"," No tiene subfilo"," Insecta"," Mantodea"],
    hormiga: ["Animalia"," Arthropoda"," No tiene subfilo"," Insecta"," Coleópteros"]
}