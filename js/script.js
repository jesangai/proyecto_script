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
    llenarattr(titulo,descripcion,creditos,portada,pasos){
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.portada = portada;
        this.creditos = creditos;
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
    
    llenarattrpasos(video,actividad){
        this.video = video;
        this.actividad = actividad; 
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
    llenarattractividad(audio,imagen1,imagen2,imagen3,imagen4,respuesta){
        this.audio = objactividad.audio;
        this.imagen1 = objactividad.imagen1;
        this.imagen2 = objactividad.imagen2;
        this.imagen3 = objactividad.imagen3;
        this.imagen4 = objactividad.imagen4;
        this.respuesta = objactividad.respuesta;
    }
  
}
 var fileExtensionV;
$('#video').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#video")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    fileExtensionV = fileName.substring(fileName.lastIndexOf('.') + 1);
    //obtenemos el tamaño del archivo
    var fileSize = file.size;
    //obtenemos el tipo de archivo image/png ejemplo
    var fileType = file.type;
    //mensaje con la información del archivo
    //showMessageE("<span>Archivo para subir: " + fileName + ", peso total: " + fileSize + " bytes.</span>");
    //alert(fileExtensionV);
});
 var fileExtensionP;
$('#imgPortada').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#imgPortada")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    fileExtensionP = fileName.substring(fileName.lastIndexOf('.') + 1);
    //obtenemos el tamaño del archivo
    var fileSize = file.size;
    //obtenemos el tipo de archivo image/png ejemplo
    var fileType = file.type;
});
//var arrVideos=[];
function subirVideo(btnV){
    var valor= btnV.getAttribute("id");
    var formData = new FormData($(".formularioVideo"+valor)[0]);
    
    $.ajax({
        url: 'subir.php',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            //alert(data);
            if (isImage(fileExtensionV)) {
                //alert(valor);
                //arrVideos.push();
                $("#di"+valor).html("<img id='videoExcursion' src='../excursiones/videos/"+data+"'></img>")}
        }
    });
};

$('.añadirPortada').click(function () {
    //información del formulario
    var formData = new FormData($(".formularioPortada")[0]);
    var message = "";
    //alert(formData);
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
            
            if (isImage(fileExtensionP)) {
                $("#divPortada").html("<img id='portada' src='../excursiones/videos/"+data+"'></img>")}
        },
        //si ha ocurrido un error
        error: function (data) {
            alert("error");
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

function listarExcursion(){
    var arrusuarios= [];
   
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))  
//          alert("s");
//            console.log(data);
        });
         
        $.each(arrusuarios[0].excursion, function(i, resultusuarios){
            $("#listexcursion").append("<div class='col-md-4'><div><button><img src='"+resultusuarios.portada+"'/> <h1>"+resultusuarios.titulo+"</h1><p>"+resultusuarios.descripcion+"</p></button></div></div>");
        });
    });
};

var cantVideos=1;
$('#guardarEx').click(function () {
    var arrusuarios= [];
   
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        var actTmp= new Actividad();
        var pasosTmp= new Pasos();
        var exTmp= new Excursion();
        
        //alert($("#portada").attr('src'));
       actTmp.llenarattractividad(null,null,null,null,null,null);
       pasosTmp.llenarattrpasos(("#portada").attr('src'),actTmp); exTmp.llenarattr($("#titulo").val(),$("#descripcion").val(),$("#creditos").val(),$("#portada").attr('src'),pasosTmp);
        
    });
    
});
$('#nuevoVideo').click(function () {
    //alert($('#escenas').children().length);
    var errores=0;
    $.each($('#escenas').children(), function(i, resultado){
//        alert(resultado.firstElementChild.childNodes);
//        console.log(resultado.firstElementChild.childNodes);
          if(resultado.firstElementChild.childNodes.length==1){
              
          }else{
              errores++;
              alert("No has agregado un video!");
          }
        
    });
    if(errores==0){
        if(cantVideos!=5){
            cantVideos++;
            $('#escenas').append("<div class='row'>\
                            <div class='col-md-4 col-sm-4 paso' id='div"+cantVideos+"'></div>\
                            <div class='col-md-4 col-sm-4'>\
                            <form enctype='multipart/form-data' class='formularioVideov"+cantVideos+"'>\
                                <input name='archivo' type='file' id='video' />\
                                <br /><br />\
                                <input type='button' class='añadirvideo' value='añadir' id='v"+cantVideos+"' onclick='subirVideo(this)'/>\
                                <br />\
                            </form>\
                            </div></div>");
        }
    }
});

