var Inputs = document.getElementsByClassName('Formulario_Input');

for (let index = 0; index < Inputs.length; index++) {
    Inputs[index].addEventListener('keyup', function() {
            if (this.value.length >= 1) {
                this.nextElementSibling.ClassList.add('Fijar');
            } else {
                this.nextElementSibling.ClassList.remove('Fijar');
            }

        }


    });


var Formulario = document.getElementsByClassName('Formulario')
boton = document.getElementById('btn');

var ValidarNombre = function(e) {
    if (Formulario.Formulario.Nombre == 0) {
        alert("Complete su nombre");
        e.preventDefault(e);
    }
}
var Validar = function(e) {
    ValidarNombre(e);

};

Formulario.addEventListener("Submit", Validar);