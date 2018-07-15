<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Proyecto Script</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
        
    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link href="css/bootstrap.min.css" rel="stylesheet" >
   </head>
  <body onload="cargarIndex()">
    
  <!--   Logo -->
 
<div class="container">
  <div class="jumbotron">
    <a href="index.html">
      <img id="imgLogo" src="images/logo1.png" alt="Logo">
    </a>
  </div>
</div>


        <!-- section Start -->
       <section id="feature">
          <div class="row">
            <div class="col-md-4 col-sm-4" >
                <a href="pages/crearexcursion.html"><button id="btncrear">Crear excursión</button></a>
            </div>
            <div class="col-md-4 col-sm-4" >
                <a href="pages/leerexcursion.html"> <button id="btnleer">Leer excursión</button></a>
            </div>
             <div class="col-md-4 col-sm-4" >
             <a href="#" id="btnExportar">Exportar JSON</a>
          </div>
          </div>
     </section>
      


        <!-- footer Start -->
        <footer>
            <div class="row">
              <div class="col-md-12">
                <p>©Todos los derechos reservados.Gaibor-Chalen-Tohabanda 2018</p>
              </div>
            </div>
        </footer>        
           
       <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="js/script.js"></script>
      
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap.min.js"></script>

    </body>
</html>