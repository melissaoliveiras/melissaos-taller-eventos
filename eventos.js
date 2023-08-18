document.addEventListener("DOMContentLoaded", function() {
    let elDiv = document.querySelector("div");


    elDiv.addEventListener("click", function(event) {
        if (event.target === elDiv) {
            alert('Hola! Soy el Div');
        }
    } )
})



