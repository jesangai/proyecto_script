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
        this.respuesta = objactividad.respuesta;
    }
    llenarattractividad(audio,imagen1,imagen2,imagen3,respuesta){
        this.audio = audio;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.respuesta = respuesta;
    }
  
}
//var fileExtensionV;
//$('#video').change(function () {
//    alert(fileExtensionV);
//    //obtenemos un array con los datos del archivo
//    var file = $("#video")[0].files[0];
//    //obtenemos el nombre del archivo
//    var fileName = file.name;
//    //obtenemos la extensión del archivo
//    fileExtensionV = fileName.substring(fileName.lastIndexOf('.') + 1);
//    //obtenemos el tamaño del archivo
//    var fileSize = file.size;
//    //obtenemos el tipo de archivo image/png ejemplo
//    var fileType = file.type;
//    //mensaje con la información del archivo
//    //showMessageE("<span>Archivo para subir: " + fileName + ", peso total: " + fileSize + " bytes.</span>");
//    
//});
// var fileExtensionP;
//$('#imgPortada').change(function () {
//    //obtenemos un array con los datos del archivo
//    var file = $("#imgPortada")[0].files[0];
//    //obtenemos el nombre del archivo
//    var fileName = file.name;
//    //obtenemos la extensión del archivo
//    fileExtensionP = fileName.substring(fileName.lastIndexOf('.') + 1);
//    //obtenemos el tamaño del archivo
//    var fileSize = file.size;
//    //obtenemos el tipo de archivo image/png ejemplo
//    var fileType = file.type;
//});
//var fileExtensionA;
//$('#audio').change(function () {
//    //obtenemos un array con los datos del archivo
//    var file = $("#audio")[0].files[0];
//    //obtenemos el nombre del archivo
//    var fileName = file.name;
//    //obtenemos la extensión del archivo
//    fileExtensionA = fileName.substring(fileName.lastIndexOf('.') + 1);
//    //obtenemos el tamaño del archivo
//    var fileSize = file.size;
//    //obtenemos el tipo de archivo image/png ejemplo
//    var fileType = file.type;
//});
//var fileExtensionI;
//$('#imagen').change(function () {
//    //obtenemos un array con los datos del archivo
//    var file = $("#imagen")[0].files[0];
//    //obtenemos el nombre del archivo
//    var fileName = file.name;
//    //obtenemos la extensión del archivo
//    fileExtensionI = fileName.substring(fileName.lastIndexOf('.') + 1);
//    //obtenemos el tamaño del archivo
//    var fileSize = file.size;
//    //obtenemos el tipo de archivo image/png ejemplo
//    var fileType = file.type;
//});
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
            //if (isImage(fileExtensionV)) {
                //$("#di"+valor).html("<img  class='imgPregunta' id='videoExcursion' src='../excursiones/"+data+"'></img>")}
                $("#di"+valor).html("<video id='videoExcursion' class='styleVideo' control><source src='../excursiones/"+data+"' type='video/mp4'></video>")
        }
      //  }
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
            //if (isImage(fileExtensionA)) {
                //alert(valor);
                //arrVideos.push();
                $("#divAudio"+valor).html("<audio class='styleAudio' controls><source src='../excursiones/"+data+"' type='audio/mp3' ></audio>")
            //}
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
         //   if (isImage(fileExtensionI)) {
                //alert(valor);
                //arrVideos.push();
                $("#div"+valor).html("<img class='imgPregunta' src='../excursiones/"+data+"'></img>")
            //}
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
            
            //if (isImage(fileExtensionP)) {
                $("#divPortada").html("<img id='portada' src='../excursiones/"+data+"'></img>")
            //}
        },
        //si ha ocurrido un error
        error: function (data) {
            alert("error");
            console.log(data);
        }
    });
});
//function isImage(extension) {
//    switch (extension.toLowerCase()) {
//        case 'jpg':
//        case 'gif':
//        case 'png':
//        case 'jpeg':
//            return true;
//            break;
//        case 'mp3':
//        case 'wav':
//        case 'mp4':
//        case 'm4a':
//        case 'ogg':
//            return true;
//            break;
//        default:
//            return false;
//            break;
//    }
//};

function listarExcursion(){
    var arrusuarios= [];
   
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))  
//          alert("s");
//            console.log(data);
        });
         
        $.each(arrusuarios[0].excursion, function(i, resultusuarios){
            $("#listexcursion").append("<div class='col-md-4 col-sm-4'><div><button onclick='pasar("+i+")'><img class='listaimg' src='"+resultusuarios.portada+"'/></button><h1>"+resultusuarios.titulo+"</h1><p>"+resultusuarios.descripcion+"</p><button onclick='pasarEditar("+i+")'>Editar</button><button onclick='pasarEliminar("+i+")'>Eliminar</button></div></div>");
        });
    });
};

function recibirExcursion(){
    var posExcursion=localStorage.getItem("varPasar");
    //alert(tituloExcursion);
    console.log();
    console.log(posExcursion);
    var arrusuarios= [];
   
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        console.log(arrusuarios);
           //manejo todoo
            //alert(resExc.titulo);
            $("#tituloLeer").html(arrusuarios[0].excursion[posExcursion].titulo);
            $("#descripcionLeer").html(arrusuarios[0].excursion[posExcursion].descripcion);
            $("#creditosLeer").html(arrusuarios[0].excursion[posExcursion].creditos);
            $("#portadaLeer").attr("src",arrusuarios[0].excursion[posExcursion].portada);
            $.each(arrusuarios[0].excursion[posExcursion].pasos, function(i, resPaso){
                $("#recibirPasos").append("<div class='col-md-12 col-sm-12 videoSolo row'>\
                                            <div class='col-md-4 col-sm-4'><video controls class='listaimg'><source src='"+resPaso.video+"'></video></div>\
                                            <div class='col-md-8 col-sm-8 row'><div class='col-md-12 col-sm-12'><audio controls><source src='"+resPaso.actividad.audio+"' type='audio/mp3' ></audio></div><br/><div class='col-md-4 col-sm-4'><button class='btnOpcion' onclick='validarRespuesta(this,"+resPaso.actividad.respuesta+")'><img id='img1' src='"+resPaso.actividad.imagen1+"' class='listaimg'></button></div><div class='col-md-4 col-sm-4'><button class='btnOpcion' onclick='validarRespuesta(this,"+resPaso.actividad.respuesta+")'><img id='img2' src='"+resPaso.actividad.imagen2+"' class='listaimg'></button></div><div class='col-md-4 col-sm-4'><button class='btnOpcion' onclick='validarRespuesta(this,"+resPaso.actividad.respuesta+")'><img id='img3' class='listaimg'src='"+resPaso.actividad.imagen3+"'></button></div></div>");

            });
    });
}

function validarRespuesta(btn, respuesta){
    var padre=btn.parentNode.parentNode;
    if(btn.firstChild.getAttribute("id")=="img"+respuesta){
       $("#divAudiosEx").html("<audio id='correcta' controls autoplay><source src='../audios/bien.wav' type='audio/wav'></audio>");
        
        //console.log(padre.childNodes[2]);
        padre.childNodes[2].firstChild.disabled=true;
        padre.childNodes[3].firstChild.disabled=true;
        padre.childNodes[4].firstChild.disabled=true;
    }else{
       //alert("Respuesta incorrecta, elije la numero "+respuesta);
        $("#divAudiosEx").html("<audio id='incorrecta' controls autoplay><source src='../audios/mal.wav' type='audio/wav' ></audio>");
        padre.childNodes[respuesta+1].firstChild.setAttribute("style","background-color:red");
    }
}
function pasar(pos){
    localStorage.setItem("varPasar",pos);
    window.location = "excursion.html";
}
function pasarEditar(pos){
    localStorage.setItem("varPasarEditar",pos);
    window.location = "editarexcursion.html";
}
function pasarEliminar(pos){
    var arrusuarios= [];
    
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        arrusuarios[0].excursion.splice(pos,1);
        //alert("s");
//        console.log(arrusuarios[0].excursion[pos]);
//        console.log(arrusuarios[0]);
         $.ajax({
            url: 'guardarJson.php',
            method: 'post',
            data: {
                "identificador": arrusuarios
            },
            success: function (data) {
                //alert(data);
                //alert("au: "+usuarios.length);
                window.location.href="../index.php";
            }
        });
        
     });
    //
}
var cantVideos=1;
var cantOpciones=3;
$('#guardarEx').click(function () {
    var arrusuarios= [];
    
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        //console.log(video=$('#escenas').children()[0].childNodes[3].firstChild.firstChild);
        //console.log($('#escenas').children()[0].children[1].firstChild.firstChild.getAttribute("src"));
        //alert(video);
        var errores=validarDatos();
        if(errores==0){
            var pasos=[];
            var cantOpciones=0;
            $.each($('.contAudio'), function(i, resAudio){
                //alert(i);
                  var actTmp= new Actividad();
                  var audio=resAudio.firstElementChild.firstChild.firstChild.getAttribute("src");
                  var img1=$('.contPrg').children()[cantOpciones].firstElementChild.firstChild.getAttribute("src");
                  var img2=$('.contPrg').children()[cantOpciones+1].firstElementChild.firstChild.getAttribute("src");
                  var img3=$('.contPrg').children()[cantOpciones+2].firstElementChild.firstChild.getAttribute("src");
                  cantOpciones=cantOpciones+3;
                  var res= $('.respuesta')[i].value;
                  actTmp.llenarattractividad(audio,img1,img2,img3,res);
                  //console.log($('#escenas').childNodes);
                  console.log($('#escenas').children());
                  var video=$('#escenas').children()[i].children[1].firstChild.firstChild.getAttribute("src");
                  
                  var paso=new Pasos();
                  paso.llenarattrpasos(video,actTmp);
                  pasos.push(paso);
                  
            });
            var excursion= new Excursion();
            excursion.llenarattr($("#titulo").val(),$("#descripcion").val(),$("#creditos").val(),$("#portada").attr('src'),pasos);
            
            arrusuarios[0].excursion.push(excursion);
            console.log(arrusuarios);
            $.ajax({
                url: 'guardarJson.php',
                method: 'post',
                data: {
                    "identificador": arrusuarios
                },
                success: function (data) {
                    //alert(data);
                    //alert("au: "+usuarios.length);
                    window.location.href="../index.php";
                }
            });
        }else{
            alert("Llene todos los campos!");
        }
        //window.location.href
        });
});
$('#nuevoVideo').click(function () {
    var errores=validarDatos();
    //alert("nv"+errores);
    if(errores==0){
        if(cantVideos!=5){
            cantVideos++;
            $('#escenas').append("<div class='row crearVI'><div class='col-md-12 col-sm-12'><h2 class='txtportada'>AÑADIR VIDEO</h2></div><div class='col-md-4 col-sm-4 paso' id='div"+cantVideos+"'></div>\
                            <div class='col-md-4 col-sm-4'>\
                            <form enctype='multipart/form-data' class='formularioVideov"+cantVideos+"'>\
                                <input name='archivo' type='file' id='video'/>\
                                <br/><br/>\
                                <input type='button' class='añadirvideo' value='añadir'  id='v"+cantVideos+"' onclick='subirVideo(this)'/><br/>\
                            </form>\
                            </div>\
                            <div class='col-md-12 col-md-offset-12'><br><br>\
                        <h2 class='txtportada'>PLANEA TU ACTIVIDAD</h2>\
                        <div class='row'>\
                          <div class='col-md-8 col-sm-8'>\
                           <h3>PREGUNTA</h3><br>\
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
                            <div class='col-md-4 col-sm-4' id='divRespuesta'>\
                                <h3>RESPUESTA</h3>\
                                <input class='respuesta' type='text' placeholder='1-3'>\
                            </div>\
                            <div class='col-md-12'>\
                               <h3>OPCIONES</h3>\
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
                            </div></div>");
        }
        cantOpciones=cantOpciones+3;
    }else{
        alert("Llena todos los campos!");
    }
});
function validarDatos() {
    //alert($('#escenas').children().length);
    var errores=0;
    if($('#titulo').val()==""){
            errores++;
        //alert("no hay titulo");
    }
    $.each($('#escenas').children(), function(i, resultado){
//        alert(resultado.firstElementChild.childNodes);
          console.log(resultado.firstElementChild.childNodes);
          if(resultado.firstElementChild.childNodes.length>=1){
             //console.log(resultado.childNodes.find(item));
          }else{
              errores++;
              //alert("No has agregado un video!");
          }
    });
    $.each($('.contAudio'), function(i, resAudio){
          if(resAudio.firstElementChild.childNodes.length>=1){
             console.log("lleno");
          }else{
              errores++;
              //alert("No has agregado un audio de pregunta!");
          }
    });
    $.each($('.contPrg').children(), function(i, resPrg){
          if(resPrg.firstElementChild.childNodes.length>=1){
             console.log("lleno");
          }else{
              errores++;
              //alert("No has agregado una opcion de la actividad!");
          }
    });
    $.each($('.respuesta'), function(i, respuesta){
        if(respuesta.value!=""){
            
            if(respuesta.value>=1 && respuesta.value<=3){
                //alert("Respuesta correcta!");
            }else{
              errores++;
              //alert("Respuesta incorrecta!");
            }
             //console.log("lleno");
        }else{
              errores++;
              //alert("No has agregado una respuesta!");
        }
          
    });
    return errores;
};

function cargarIndex(){
    var arrusuarios= [];
    $.getJSON('pages/info.json', function(data){
        
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado));
         });
        
        var data= "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arrusuarios));
        //alert(data);
        $("#btnExportar").attr("href","data:"+data);
        $("#btnExportar").attr("download","info.json");
    });
    
};

function cargarEditar(){
    var posEditar= localStorage.getItem("varPasarEditar");
    var arrusuarios= [];
    console.log(arrusuarios);
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        console.log(arrusuarios[0].excursion[posEditar].titulo);
        $("#titulo").attr("value",arrusuarios[0].excursion[posEditar].titulo);
        $("#descripcion").attr("value",arrusuarios[0].excursion[posEditar].descripcion);
        $("#creditos").attr("value",arrusuarios[0].excursion[posEditar].creditos);
        $("#divPortada").html("<img id='portada' src='"+arrusuarios[0].excursion[posEditar].portada+"'></img>");
        
        $.each(arrusuarios[0].excursion[posEditar].pasos, function(i, resultado){
            console.log("llenar");
            $('#escenas').append("<div class='row crearVI'><div class='col-md-12 col-sm-12'><h2 class='txtportada'>AÑADIR   VIDEO</h2></div><div class='col-md-4 col-sm-4 paso' id='div"+cantVideos+"'><video controls class='listaimg'><source src='"+resultado.video+"'></video></div>\
                    <div class='col-md-4 col-sm-4'>\
                    <form enctype='multipart/form-data' class='formularioVideov"+cantVideos+"'>\
                        <input name='archivo' type='file' id='video'/>\
                        <br/><br/>\
                        <input type='button' class='añadirvideo' value='añadir'  id='v"+cantVideos+"' onclick='subirVideo(this)'/><br/>\
                    </form>\
                    </div>\
                    <div class='col-md-12 col-md-offset-12'><br><br>\
                <h2 class='txtportada'>PLANEA TU ACTIVIDAD</h2>\
                <div class='row'>\
                  <div class='col-md-8 col-sm-8'>\
                   <h3>PREGUNTA</h3><br>\
                   <div class='row contAudio'>\
                    <div class='col-md-4 col-sm-4' id='divAudioa"+cantVideos+"'><audio controls><source src='"+resultado.actividad.audio+"' type='audio/wav'></audio></div>\
                   <div class='col-md-4 col-sm-4'>\
                        <form enctype='multipart/form-data' class='formularioAudioa"+cantVideos+"'>\
                            <input name='archivo' type='file' id='audio' />\
                            <br/><br/>\
                            <input type='button' class='añadirvideo' value='añadir' id='a"+cantVideos+"' onclick='subirAudio(this)'/>\
                            <br />\
                        </form>\
                   </div>\
                   </div></div>\
                    <div class='col-md-4 col-sm-4' id='divRespuesta'>\
                        <h3>RESPUESTA</h3>\
                        <input class='respuesta' type='text' placeholder='1-3' value='"+resultado.actividad.respuesta+"'>\
                    </div>\
                    <div class='col-md-12'>\
                       <h3>OPCIONES</h3>\
                        <div class='row contPrg'>\
                            <div class='col-md-4 col-sm-4' id='divPrg'>\
                                <div class='fondoImg' id='divi"+(cantOpciones+1)+"'><img class='imgPregunta' src='"+resultado.actividad.imagen1+"'></img></div>\
                                <form enctype='multipart/form-data' class='formularioImagenesi"+(cantOpciones+1)+"'>\
                                    <input name='archivo' type='file' id='imagen' />\
                                    <br/><br/>\
                                    <input type='button' class='añadirvideo' value='añadir' id='i"+(cantOpciones+1)+"' onclick='subirImagen(this)'/>\
                                    <br/>\
                                </form>\
                            </div>\
                            <div class='col-md-4 col-sm-4' id='divPrg'>\
                                <div class='fondoImg' id='divi"+(cantOpciones+2)+"'><img class='imgPregunta' src='"+resultado.actividad.imagen2+"'></img></div>\
                                <form enctype='multipart/form-data' class='formularioImagenesi"+(cantOpciones+2)+"'>\
                                    <input name='archivo' type='file' id='imagen' />\
                                    <br/><br/>\
                                    <input type='button' class='añadirvideo' value='añadir' id='i"+(cantOpciones+2)+"' onclick='subirImagen(this)'/>\
                                    <br/>\
                                </form>\
                            </div>\
                            <div class='col-md-4 col-sm-4' id='divPrg'>\
                                <div class='fondoImg' id='divi"+(cantOpciones+3)+"'><img class='imgPregunta' src='"+resultado.actividad.imagen3+"'></img></div>\
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
                    </div></div>");
            cantVideos++;
        });
        
     });
}

$('#editarEx').click(function () {
    var posEditar= localStorage.getItem("varPasarEditar");
    var arrusuarios= [];
    
    $.getJSON('info.json', function(data){
        $.each(data, function(i, resultado){
          arrusuarios.push(new Usuario(resultado))
        });
        //console.log(video=$('#escenas').children()[0].childNodes[3].firstChild.firstChild);
        //console.log($('#escenas').children()[0].children[1].firstChild.firstChild.getAttribute("src"));
        //alert(video);
        var errores=validarDatos();
        if(errores==0){
            var pasos=[];
            var cantOpciones=0;
            $.each($('.contAudio'), function(i, resAudio){
                //alert(i);
                  var actTmp= new Actividad();
                  var audio=resAudio.firstElementChild.firstChild.firstChild.getAttribute("src");
                  var img1=$('.contPrg').children()[cantOpciones].firstElementChild.firstChild.getAttribute("src");
                  var img2=$('.contPrg').children()[cantOpciones+1].firstElementChild.firstChild.getAttribute("src");
                  var img3=$('.contPrg').children()[cantOpciones+2].firstElementChild.firstChild.getAttribute("src");
                  cantOpciones=cantOpciones+3;
                  var res= $('.respuesta')[i].value;
                  actTmp.llenarattractividad(audio,img1,img2,img3,res);
                  //console.log($('#escenas').childNodes);
                  console.log($('#escenas').children());
                  var video=$('#escenas').children()[i].children[1].firstChild.firstChild.getAttribute("src");
                  
                  var paso=new Pasos();
                  paso.llenarattrpasos(video,actTmp);
                  pasos.push(paso);
                  
            });
            var excursion= new Excursion();
            excursion.llenarattr($("#titulo").val(),$("#descripcion").val(),$("#creditos").val(),$("#portada").attr('src'),pasos);
            
            arrusuarios[0].excursion[posEditar]=excursion;
            console.log(arrusuarios);
            $.ajax({
                url: 'guardarJson.php',
                method: 'post',
                data: {
                    "identificador": arrusuarios
                },
                success: function (data) {
                    alert("Se editó la excursión!");
                    //alert("au: "+usuarios.length);
                    window.location.href="../index.php";
                }
            });
        }else{
            alert("Llene todos los campos!");
        }
        //window.location.href
        });
});