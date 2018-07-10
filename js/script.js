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
var fileExtensionA;
$('#audio').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#audio")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    fileExtensionA = fileName.substring(fileName.lastIndexOf('.') + 1);
    //obtenemos el tamaño del archivo
    var fileSize = file.size;
    //obtenemos el tipo de archivo image/png ejemplo
    var fileType = file.type;
});
var fileExtensionI;
$('#imagen').change(function () {
    //obtenemos un array con los datos del archivo
    var file = $("#imagen")[0].files[0];
    //obtenemos el nombre del archivo
    var fileName = file.name;
    //obtenemos la extensión del archivo
    fileExtensionI = fileName.substring(fileName.lastIndexOf('.') + 1);
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
            if (isImage(fileExtensionV)) {
                $("#di"+valor).html("<img  class='imgPregunta' id='videoExcursion' src='../excursiones/"+data+"'></img>")}
//            $("#di"+valor).html("<video class='styleVideo' control><source src='../excursiones/"+data+"' type='video/mp4'></video>")}
        }
    });
};

function subirAudio(btnA){
    var valor= btnA.getAttribute("id");
    var formData = new FormData($(".formularioAudio"+valor)[0]);
    
    $.ajax({
        url: 'subir.php',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            //alert(data);
            if (isImage(fileExtensionA)) {
                //alert(valor);
                //arrVideos.push();
                $("#divAudio"+valor).html("<audio controls><source src='../excursiones/"+data+"' type='audio/mp3' ></audio>")}
        }
    });
};
function subirImagen(btnI){
    var valor= btnI.getAttribute("id");
    var formData = new FormData($(".formularioImagenes"+valor)[0]);
    
    $.ajax({
        url: 'subir.php',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            //alert(data);
            if (isImage(fileExtensionI)) {
                //alert(valor);
                //arrVideos.push();
                $("#div"+valor).html("<img class='imgPregunta' src='../excursiones/"+data+"'></img>")}
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
                $("#divPortada").html("<img id='portada' src='../excursiones/"+data+"'></img>")}
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
var cantOpciones=3;
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
             //console.log(resultado.childNodes.find(item));
          }else{
              errores++;
              alert("No has agregado un video!");
          }
    });
    $.each($('.contAudio'), function(i, resAudio){
          if(resAudio.firstElementChild.childNodes.length==1){
             console.log("lleno");
          }else{
              errores++;
              alert("No has agregado un audio de pregunta!");
          }
    });
    $.each($('.contPrg').children(), function(i, resPrg){
          if(resPrg.firstElementChild.childNodes.length==1){
             console.log("lleno");
          }else{
              errores++;
              alert("No has agregado una opcion de la actividad!");
          }
    });
    $.each($('.respuesta'), function(i, respuesta){
        if(respuesta.value!=""){
             console.log("lleno");
        }else{
              errores++;
              alert("No has agregado una respuesta!");
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
                            </div>\
                            <div class='col-md-12 col-md-offset-12'>\
                        <h2>PLANEA TU ACTIVIDAD</h2>\
                        <div class='row'>\
                          <div class='col-md-12'>\
                           <h3>1) audio</h3><br>\
                           <div class='row contAudio'>\
                            <div class='col-md-4 col-sm-4' id='divAudioa"+cantVideos+"'></div>\
                           <div class='col-md-4 col-sm-4'>\
                                <form enctype='multipart/form-data' class='formularioAudioa"+cantVideos+"'>\
                                    <input name='archivo' type='file' id='audio' />\
                                    <br/><br/>\
                                    <input type='button' class='añadirvideo' value='añadir' id='a"+cantVideos+"' onclick='subirAudio(this)'/>\
                                    <br />\
                                </form>\
                           </div>\
                           </div></div>\
                            <div class='col-md-12'>\
                               <h3>2) imagen</h3>\
                                <div class='row contPrg'>\
                                    <div class='col-md-4 col-sm-4' id='divPrg'>\
                                        <div class='fondoImg' id='divi"+(cantOpciones+1)+"'></div>\
                                        <form enctype='multipart/form-data' class='formularioImagenesi"+(cantOpciones+1)+"'>\
                                            <input name='archivo' type='file' id='imagen' />\
                                            <br/><br/>\
                                            <input type='button' class='añadirvideo' value='añadir' id='i"+(cantOpciones+1)+"' onclick='subirImagen(this)'/>\
                                            <br/>\
                                        </form>\
                                    </div>\
                                    <div class='col-md-4 col-sm-4' id='divPrg'>\
                                        <div class='fondoImg' id='divi"+(cantOpciones+2)+"'></div>\
                                        <form enctype='multipart/form-data' class='formularioImagenesi"+(cantOpciones+2)+"'>\
                                            <input name='archivo' type='file' id='imagen' />\
                                            <br/><br/>\
                                            <input type='button' class='añadirvideo' value='añadir' id='i"+(cantOpciones+2)+"' onclick='subirImagen(this)'/>\
                                            <br/>\
                                        </form>\
                                    </div>\
                                    <div class='col-md-4 col-sm-4' id='divPrg'>\
                                        <div class='fondoImg' id='divi"+(cantOpciones+3)+"'></div>\
                                        <form enctype='multipart/form-data' class='formularioImagenesi"+(cantOpciones+3)+"'>\
                                            <input name='archivo' type='file' id='imagen' />\
                                            <br/><br/>\
                                            <input type='button' class='añadirvideo' value='añadir' id='i"+(cantOpciones+3)+"' onclick='subirImagen(this)'/>\
                                            <br/>\
                                        </form>\
                                    </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class='col-md-12' id='divRespuesta'>\
                                <h3>2) respuesta</h3>\
                                <input class='respuesta' type='text' placeholder='1-3'>\
                            </div></div></div>");
        }
        cantOpciones=cantOpciones+3;
    }
});
$('#exportar').click(function () {
    var arrusuarios= [];
    
    $.getJSON('pages/info.json', function(data){
        
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        
        var data= "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arrusuarios));
        //alert(data);
        $("#exportar").attr("href","data:"+data);
        $("#exportar").attr("download","info.json");
        $("#exportar").trigger("click");
    });
    
});
