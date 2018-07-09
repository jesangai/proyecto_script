class Usuario{
    constructor(objres){
        this.user = objres.user;
        this.pass = objres.pass;
        this.nombre = objres.nombre;
        var excursiones = [];
        $.each(objres.excursion, function(i, resultado){
            var objexcursion = new Excursion();    
                objexcursion.llenarobj(resultado);       
            excursiones.push(objexcursion);  
        })
        
        this.excursion = excursiones;
    }
}


class Excursion{

    llenarobj(resultado){
        
        this.titulo = resultado.titulo;
        this.descripcion = resultado.descripcion;
        this.portada = resultado.portada;
        this.creditos = resultado.creditos;
         var pasos = [];
        $.each(resultado.pasos, function(i, respasos){
            var objpasos = new Pasos();    
                objpasos.llenarobjpasos(respasos);       
            pasos.push(objpasos);  
        })
        
        this.pasos = pasos; 
        
        
    }
}

class Pasos{
    
    llenarobjpasos(respasos){
        this.video = respasos.video;
        
    var objactividad = new Actividad();    
        objactividad.llenarobjactividad(respasos.actividad);       
           
        
        
        this.actividad = objactividad; 
    }
    
}

class Actividad{
    
    
      
    llenarobjactividad(objactividad){
        this.audio = objactividad.audio;
        this.imagen1 = objactividad.imagen1;
        this.imagen2 = objactividad.imagen2;
        this.imagen3 = objactividad.imagen3;
        this.imagen4 = objactividad.imagen4;
        this.respuesta = objactividad.respuesta;
    }
  
}
 var fileExtension;
$('#video').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#video")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
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
            console.log(data);
            if (isImage(fileExtension)) {
                $(".escenas").html("<p>hh</p>")}
        },
        //si ha ocurrido un error
        error: function (data) {
            alert("error");
            // message = $("<span>Ha ocurrido un error.</span>");
            //showMessageE(message);<video><source src='../excursiones/videos/'" + data + "' type='video/mp4'/></video>
            console.log(data);
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
};

function leerJson(){
    var usuarios=[]; 
    //alert(usuarios);
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          usuarios.push(new Usuario(resultado))  
        //alert("guau");
        });
    });
    
    return usuarios;
};

function listarExcursion(){
    var arrusuarios= [];
    //arrusuarios=leerJson();
    //var usuarios=[]; 
    //alert(usuarios);
     
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))  
        //alert("guau");
            alert("miau"+arrusuarios);
        });
    });
    alert("Miau"+arrusuarios);
      $.each(arrusuarios[0].excursion, function(i, resultusuarios){
            $("#listexcursion").append("<div class='col-md-4'><div><button><img src='"+resultusuarios.portada+"'/> <h1>"+resultusuarios.titulo+"</h1><p>"+resultusuarios.descripcion+"</p></button></div></div>");
        });
    
};




