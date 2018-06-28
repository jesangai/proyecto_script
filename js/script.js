class Usuario{
    constructor(user, pass, nombre, excursion){
        this.user=user;
        this.pass=pass;
        this.nombre=nombre;
        this.excursion=excursion;
    }
};

class Excursion{
    constructor(titulo, descripcion, creditos, pasos){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.creditos=creditos;
        this.pasos=pasos;
    }
}

class Pasos{
    constructor(video, actividad){
        this.video = video;
        this.actividad = actividad;
    }
}

class Actividad{
    constructor(pregunta, imagen1, imagen2, imagen3, imagen4, respuesta){
        this.pregunta=pregunta;
        this.imagen1= imagen1;
        this.imagen2=imagen2;
        this.imagen3=imagen3;
        this.imagen4=imagen4;
    }
}
$('#video').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#video")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
    //obtenemos el tamaño del archivo
    var fileSize = file.size;
    //obtenemos el tipo de archivo image/png ejemplo
    var fileType = file.type;
    //mensaje con la información del archivo
    //showMessageE("<span>Archivo para subir: " + fileName + ", peso total: " + fileSize + " bytes.</span>");
});

$('.añadirvideo').click(function () {
    //información del formulario
    var formData = new FormData($(".formularioVideo")[0]);
    var message = "";
    alert(formData);
    //hacemos la petición ajax  
    $.ajax({
        url: 'subir.php',
        type: 'POST',
        // Form data
        //datos del formulario
        data: formData,
        //necesario para subir archivos via ajax
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            // message = $("<span>La imagen ha subido correctamente.</span>");
            //showMessageE(message);
            alert(data);
            if (isImage(fileExtension)) {
                $(".escenas").html("<p>miau</p>")}
        },
        //si ha ocurrido un error
        error: function () {
            alert("error");
            // message = $("<span>Ha ocurrido un error.</span>");
            //showMessageE(message);<video><source src='../excursiones/videos/'" + data + "' type='video/mp4'/></video>
        }
    });
});

function isImage(extension) {
    switch (extension.toLowerCase()) {
        case 'jpg':
        case 'gif':
        case 'png':
        case 'jpeg':
            return true;
            break;
        case 'mp3':
        case 'wav':
        case 'mp4':
        case 'ogg':
            return true;
            break;
        default:
            return false;
            break;
    }
}


