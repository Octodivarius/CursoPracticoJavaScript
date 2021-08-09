// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    
    const inputProme = document.getElementById("InputProme");
    const promeValue = inputProme.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    var discount;

    if (promeValue === "PROME10"){
          var discount= 10;
        } else if(promeValue === "PROME15"){
          var discount= 15;
        } else if(promeValue === "PROME20"){
          var discount= 20;
        }else if(promeValue === "PROME25"){
          var discount= 25;
        } else{      
            var discount= 0;
        }

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    var ndiscount = parseInt(discount)+parseInt(discountValue);
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, ndiscount);
    // return alert("El precio final es: "+precioConDescuento+" $")
    const resultp = document.getElementById("Resultp");
    resultp.innerText = "El precio final es: "+precioConDescuento+" $";
  }
  
  
  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });
