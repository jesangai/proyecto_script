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