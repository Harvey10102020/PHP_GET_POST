$(document).ready(function() {



    $("#enviar_datos").click(function(e) {


        e.preventDefault();
        let datos_personales = [];

        datos_personales.push($("#nombre").val());
        datos_personales.push($("#apellido").val());
        datos_personales.push($("#edad").val());
        $.ajax({
            type: "GET",
            url: "API.php",
            data: {datos_personales},
            success: function(response) {
                console.log(response);
            }
        });

    });
});