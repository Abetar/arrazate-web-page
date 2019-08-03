function validarCampos()
{
    var correo = document.getElementById("inputMail").value;
    var descripcion = document.getElementById("inputDesc").value;
    var telefono = document.getElementById("inputPhone").value;
    var noValido = /\s/;

    if(noValido.test(correo))
    {
        swal("Error", "No se permiten espacios en blanco en la sección del correo", "error");
    }
    else if(correo.length == 0 || descripcion.length == 0 || telefono.length == 0)
    {
        swal("Error", "Veríficar, algún campo se encuentra vacio", "error")
    }
    else{
        swal("Correcto","Información enviada correctamente","success");
    }

}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:3,
                nav:false,
                loop: true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
  });

  