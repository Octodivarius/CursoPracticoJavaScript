//Funciones Cuadrado
//Perimetro
function perimetroCuadrado(lado){
    return lado*4;
} 
//Area
function areaCuadrado(lado){
    return lado*lado;
}

//Funciones Triangulo

//Perimetro
function perimetroTriangulo(lado1,lado2,base){
    const perimetrot = parseInt(lado1)+parseInt(lado2)+parseInt(base);
    return perimetrot;
}
//Area
function areaTriangulo(base,altura) {
    const areat=(base*altura)/2;
    return areat;
}

//Funciones del Circulo


    function perimetroCirculo(radio){
        const perimetroc = 2*Math.PI*radio;
        return  perimetroc;
    } 

    // console.log("El perimetro del Triangulo es: "+ perimetroCirculo+"cm");

   function areaCirculo(radio){
    const areac = Math.PI*radio*radio;   
    return areac;
   } 

//Funciones Triangulo isoceles

//Comprobar si es isoceles
 function comprobar(lado1,lado2,base){
     var resp;
     if (lado1 == lado2){

        const h = Math.sqrt((lado1*lado2)-(base/4)).toFixed(2);
        resp = "Es un triangulo isoceles y su altura es: "+h+"cm";
     }else{
        resp ="Los parametros no corresponden a triandgulo isoceles";
     }

     return resp;
 }



//aqui interactuamos con html

//Cuadrado
function calcularPerimetroCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const perimetroc = perimetroCuadrado(value);
    // alert(perimetro);
    const resultC = document.getElementById("ResultC");
    resultC.innerText = "El perimetro del cuadrado es: " + perimetroc+"cm";

}

function calcularAreaCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const areac = areaCuadrado(value);
    //alert(area);
    const resultC = document.getElementById("ResultC");
    resultC.innerText = "El area del cuadrado es: " + areac+"cm2";

}


//Triangulo
function calcularPerimetroTriangulo() {
    const input1= document.getElementById("InputLado1");
    const input2= document.getElementById("InputLado2");
    const inputb= document.getElementById("InputLadob");
    
    const valuet1= input1.value;
    const valuet2=  input2.value;
    const valuetb=  inputb.value;
    


    let perimetrot =  perimetroTriangulo(valuet1,valuet2,valuetb);
    //alert(perimetro);
    const resultT = document.getElementById("ResultT");
    resultT.innerText = "El perimetro del triangulo es: " + perimetrot + "cm";

}


function calcularAreaTriangulo() {
    const inputh= document.getElementById("InputLadoh");
    const inputb= document.getElementById("InputLadob");
    const valueh= inputh.value;
    const valueb= inputb.value;


    const areat = areaTriangulo(valueb,valueh);
    //alert(areat);
    const resultT = document.getElementById("ResultT");
    resultT.innerText = "El area del triangulo es: " + areat + "cm2";
}



//Circulo

function calcularPerimetroCirculo() {
    const inputr= document.getElementById("InputR");
    const valuer= inputr.value;


    const peric = perimetroCirculo(valuer).toFixed(2);
    //alert(peric);
    const resultCi = document.getElementById("ResultCi");
    resultCi.innerText = "El perimetro del triangulo es: " + peric + "cm";


}

function calcularAreaCirculo() {
    const inputr= document.getElementById("InputR");
    const valuer= inputr.value;


    const areac = areaCirculo(valuer).toFixed(2);
    //alert(areac);
    const resultCi = document.getElementById("ResultCi");
    resultCi.innerText = "El area del circulo es: " + areac + "cm2";
}

//Triangulo Isoceles

function calcularAltura() {
    const inputl1= document.getElementById("InputL1");
    const inputl2= document.getElementById("InputL2");
    const inputba= document.getElementById("InputBa");

    const valuel1= inputl1.value;
    const valuel2= inputl2.value;
    const valueba= inputba.value;


    const alti = comprobar(valuel1,valuel2,valueba);
    
    const resultTi = document.getElementById("ResultTi");
    resultTi.innerText =  alti;
}