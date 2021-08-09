//Calculo de la media aritmetica

function calcularMediaAritmetica(lista){


    //sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista+lista1[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nElemto){
        result = parseInt(valorAcumulado) + parseInt(nElemto);    
        return result ;

        }
    )

    const promedioLista = sumaLista/lista.length;
    return promedioLista;

}


//Calculo de la mediana 

const lista1 = [
    100,200,500,40000000,

];

var lista2=[200,500,300,450,700,30,250];

//Ordenar la lista metodo 1
function ordenarListaMe1(listao){

    const listaord = listao.sort();
    return listaord;
}
//ordenar la lista metodo 2
function ordenarListaMe2(listao){

    let aux=[];
    let tam=listao.length;
    
    for(let j=0;j<tam; j++ ){
        console.log(tam);
        console.log("Estamos en la vueltaPrimerfase #"+j);
            for(let i=0;i<=tam-1; i++){
                console.log("Estamos en la vuelta2dafase #"+i);
                if(listao[i]>listao[i+1]){
                    aux=listao[i];
                    listao[i]=listao[i+1];
                    listao[i+1]=aux;
                    
                }
            }  
            
        }
        return console.log(listao);  
    }
    
   



//Calculo de la mediana 

function calculaMEdiana(lista){


const ordenarlist= ordenarListaMe1(lista);
const mitadLista1 = parseInt(ordenarlist.length/2);


function esPar(numerito){
    if (numerito%2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;


if (esPar(ordenarlist.length)){
    const elemento1 =lista1[mitadLista1-1] ;
    const elemento2 = lista1[mitadLista1];
    const promedio1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedio1y2
}else{
    mediana = lista1[mitadLista1];
}

return mediana;
}

//Calculo de la moda

const  lista5=[1,2,2,2,3,1,2,2,3,5,4,1,1,2,3];


function calcularModa(listmoda){
    const listmodaCount={};

    listmoda.map(
        function (elemento) {
        if (listmodaCount[elemento]){
            listmodaCount[elemento]+=1;
        }else{
            listmodaCount[elemento]=1;
        }
        }


    );

    const lista1Array = Object.entries(listmodaCount).sort(

        function (elementoA, elementoB) {
            return elementoA[1]-elementoB[1];

        }
    );

    const moda = lista1Array[lista1Array.length -1];

    return moda;
    }