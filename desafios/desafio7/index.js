const precioProducto = document.getElementById("precioProducto");
const nombreProducto = document.querySelector("#nombreProducto")
precioProducto.innerText = "$450";
nombreProducto.style.color = "blue";
nombreProducto.style.backgroundColor = "#333"
precioProducto.style.backgroundColor = "gray";
precioProducto.addEventListener("mouseover", function() {
    nombreProducto.style.fontSize = "250px";
    precioProducto.style.display = "none";
});