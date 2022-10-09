comenzar= ()=>{
    let nombre= document.getElementById("nombre").value;
    let apellidoP= document.getElementById("apellidoP").value;
    let apellidoM= document.getElementById("apellidoM").value;
    let fechaN= document.getElementById("fechaN").value;
    let contacto= document.getElementById("contacto").value;
    let genero= document.getElementById("genero").value;
    let nacionalidad= document.getElementById("nacionalidad").value
    let meses= parseInt(document.getElementById("meses").value);
    let cantidad= parseInt(document.getElementById("cantidad").value);
    let alerta="Registro correcto";

    try{
        if(nombre==""||apellidoP==""||apellidoM==""||contacto==""||fechaN.value==NaN||isNaN(meses)||isNaN(cantidad))
        throw alert('Uno de los campos esta vacio');

        if(meses<0)
        throw alert('El campo de Meses como fumador es incorrecto')

        if(cantidad<0)
        throw alert('El campo Cantidad aproximada de cigarrillos diarios es incorrecto')
    }catch(error){
        alerta="Registro incorrecto"
    }

    alert(alerta);
    //alert(nombre+apellidoP+apellidoM+fechaN+contacto+genero+nacionalidad+meses+cantidad);
};

function getInfoJoel(callback){
    callback();
}

function callback(){
    document.getElementById("caja5").innerHTML="<br/>Faceboock: Joel de Jesús.<br/> Instagram: dejesus_lopez02.<br/> Whatsapp: +52 966 113 0883.<br/> Correo elétronico: joelssj93@gmail.com" ; 
}

function getInfoBatalla(callback1){
    callback1();
}

function callback1(){
    document.getElementById("caja5").innerHTML="<br/>Faceboock: Luis Alberto Batalla González.<br/> Instagram: elsupervatto.<br/> Whatsapp: +52 964 115 2211. <br/> Correo eléctronico: luisalbagoz@gmail.com" ; 
}

function getInfoNoe(callback2){
    callback2();
}

function callback2(){
    document.getElementById("caja5").innerHTML="<br/>Faceboock: Alejandro Rodriguez.<br/> Instagram: NoeOn.<br/> Whatsapp: +52 961 449 6689.<br/> Correo eléctronico: alxg5516@gmail.com" ; 
}