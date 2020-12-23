//funciones
//se crea una promesa que indica el estado del proceso.
//en vez de devolver callback se usara promesa
function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('hola, '+nombre);
            resolve(nombre);
        },1000);
    });
}
function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('bla bla bla bla...');
            resolve(nombre);
        },1000);
    });
}
function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('adios',nombre);
            resolve(nombre);
        },1000);
    });
}

//lo que se ejecutara....
console.log('Iniciando el Proceso...')
hola('Andrés')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)

    .then((nombre)=>{
        console.log('Terminando Proceso');
    })

//cualquier hilo de ejcucion lo llevará al catch para ejecutar su funcion
//console
    .catch(error =>{
        console.error('ha habido un error');
        console.error(error);
    })