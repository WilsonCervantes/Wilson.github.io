var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === "imagenes/imagen-mozilla.jpg") {
      miImage.setAttribute('src',"imagenes/imagen-mozilla.jpg");
    } else {
      miImage.setAttribute('src', "imagenes/imagen-mozilla2.jpg");
    }
}