console.group("cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado+" cm ");

function perimetroCuadrado(lado){
    return lado*4;
} 
// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+" cm ");
// const areaCuadrado = ladoCuadrado*ladoCuadrado;
function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El area del cuadrado es: "+ areaCuadrado +" cm2 ");
console.groupEnd();

//Codigo del Triangulo
console.group("Triandulo");
    // const ladoTriangulo1= 6;
    // const ladoTriangulo2= 6;
    // const baseTriangulo= 4;
    // const alturaTriangulo=5.5;
    // console.log("Los lados del triangrulo miden: "+ladoTriangulo1+"cm y "+ladoTriangulo2+"cm, "+"la base del triangulo mide: " +baseTriangulo+"cm, la altura del triangulo es: "+alturaTriangulo);

    
    // console.log("El perimetro del Triangulo es: "+ perimetroTriangulo+"cm");

    function areaTriangulo(base,altura) {
        return (base*altura)/2;
    } 
    // console.log("El area del Triangulo es: "+ areaTriangulo +"cm2");

console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
    // const radioCirculo= 4;
    // const pi= 3.1415;
    // const pi2=Math.PI;


    // console.log("El radio del circulo es: "+radioCirculo+"cm");

    function perimetroCirculo(radio){

        return 2*Math.PI*radio
    } ;

    // console.log("El perimetro del Triangulo es: "+ perimetroCirculo+"cm");

   function areaCirculo(radio){
       return Math.PI*radio*radio
   } 
    // console.log("El area del Circulo es: "+ areaCirculo +"cm2");
    // console.log("El valor de pi es: "+ pi2)

console.groupEnd();

//aqui iteratuamos con html

function calcularPerimetroCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}



function calcularAreaCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo() {
    const input1= document.getElementById("InputLado1");
    const input2= document.getElementById("InputLado2");
    const inputb= document.getElementById("InputLadob");
    
    var valuet1= input1.value;
    var valuet2= input2.value;
    var valuetb= inputb.value;

    let perimetro = perimetroTriangulo(valuet1,valuet2,valuetb);
    alert(perimetro);

}


function perimetroTriangulo(lado1,lado2,base){
    const  l1= lado1;
    const  l2= lado2;
    const  l3= base;
    
    var result = l1+l2+l3;
    return result;
}


function calcularAreaTriangulo() {
    const inputh= document.getElementById("InputLadoh");
    const inputb= document.getElementById("InputLadob");
    const valueh= inputh.value;
    const valueb= inputb.value;


    const areat = areaTriangulo(valueb,valueh);
    alert(areat);
}


function calcularPerimetroCirculo() {
    const inputr= document.getElementById("InputR");
    const valuer= inputr.value;


    const peric = perimetroCirculo(valuer);
    alert(peric);
}



function calcularAreaCirculo() {
    const inputr= document.getElementById("InputR");
    const valuer= inputr.value;


    const areac = areaCirculo(valuer);
    alert(areac);
}