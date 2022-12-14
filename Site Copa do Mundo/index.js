let element = document.getElementById("noticia1");

function noticia(){
    element.classList.add("col-md-6");
    console.log("Noticia");
}

document.addEventListener("click", myFunction);

function myFunction() {
element.classList.add("col-md-6");
}