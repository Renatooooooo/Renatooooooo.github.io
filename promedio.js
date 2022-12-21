
function calculo(nota1,nota2,nota3,nota4){

    var nota1= parseFloat (document.getElementById("primeranota").value);

    var nota2= parseFloat (document.getElementById("seguntanota").value);

    var nota3= parseFloat (document.getElementById("terceranota").value);

    var nota4= parseFloat (document.getElementById("cuartanota").value);

    var promedio= Math.round(nota1 + nota2 + nota3 + nota4)/4;

    

document.getElementById("prom").value=promedio }


function estado(){

if(promedio >= 12.5){
    document.getElementById("apro").innerHTML="<b>El alumno está aprobado</b>";
}else{
    document.getElementById("desapro").innerHTML="<b>El alumno está desaprobado</b>";
}

}


