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
    a.className = "nota";
    a.id = "nota"+i;

    const img = document.createElement("img");
    img.src = "https://static.vecteezy.com/system/resources/thumbnails/013/869/651/small_2x/blank-sticky-note-reminder-paper-png.png";
    a.appendChild(img);

    const p = document.createElement("p");
    p.textContent = info[i].p;
    a.appendChild(p);
    
    elemento.appendChild(a);
}

