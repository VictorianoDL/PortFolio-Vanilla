let info = [
    {url:"SobreMi.html",p:"Sobre Mi"},
    {url:"Skills.html",p:"Skills"},
    {url:"Proyectos.html",p:"Proyectos"},
    {url:"Contacto.html",p:"Contacto"}
];
   

let elemento = document.getElementById("navegador");

const titulo = document.createElement("a");
titulo.textContent = "PortFolio de Victoriano";
titulo.href = "Inicio.html";

elemento.appendChild(titulo);
for(let i=0;i < 4;i++){
    const a = document.createElement("a");
    a.href = info[i].url;
    a.id = "navA"; 

    const span = document.createElement("span");
    span.className = "is-primary";
    span.textContent = info[i].p;
    a.appendChild(span);


    a.appendChild(span);
    
    elemento.appendChild(a);
}

const footer = document.getElementById("footerID");
footer.textContent = "&copy; 2025 Victoriano Feijoo | vitivitoriano@gmail.com";

