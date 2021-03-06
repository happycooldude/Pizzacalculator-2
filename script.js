document.getElementById("calculate").onclick = calculate;

//krijg de waarde van de grootte van de pizza die je wilt bestellen
function getSize() {
  size = document.getElementById("selectSize").value;
  console.log("selectSize value: ", size);

  return parseInt(size);
}

//krijg de waarde van het type pizza die je wilt bestellen
function getType() {
  type = document.getElementById("selectType").value;
  console.log("selectType value: ", type);

  if (document.getElementById("Napoletana").selected) {
    document.getElementById("image").src = "images/napoletana.jpg";
    document.getElementById("ingredients").innerHTML =
      "ansjovis, zwarte olijven en kappertjes";
  }
  if (document.getElementById("Margherita").selected) {
    document.getElementById("image").src = "images/margherita.jpg";
    document.getElementById("ingredients").innerHTML =
      "tomaat, mozzarella and verse basilicum.";
  }
  if (document.getElementById("Quattro-Formaggi").selected) {
    document.getElementById("image").src = "images/quattro-formaggi.jpg";
    document.getElementById("ingredients").innerHTML =
      "Mozzarella, Gorgonzola, Fontina and Parmigiano.";
  }
  if (document.getElementById("Funghi").selected) {
    document.getElementById("image").src = "images/funghi.jpg";
    document.getElementById("ingredients").innerHTML =
      "tomaat, mozzarella, champignons en zwarte olijven";
  }
  if (document.getElementById("Calzone").selected) {
    document.getElementById("image").src = "images/calzone.jpg";
    document.getElementById("ingredients").innerHTML = "met tomaat, mozzarella";
  }

  return parseInt(type);
}

//krijg de waarde van de topping die je op de pizza wilt
function getToppings() {
  topping = document.getElementById("selectTop").value;
  console.log("selectTop value: ", topping);

  return parseInt(topping);
}

//krijg de waarde van de hoeveelheid pizza's die je wilt bestellen
function getAmmount() {
  ammount = document.getElementById("amount").value;
  console.log("selectAmmount value: ", ammount);

  return parseInt(ammount);
}

//krijg de waardes van de extra opties die je kunt selecteren
function getCard() {
  if (document.getElementById("card").checked) {
    card = document.getElementById("card").value;
    console.log("cardCheck value: ", card);

    return parseFloat(card);
  } else {
    return 1;
  }
}

function getSliced() {
  if (document.getElementById("sliced").checked) {
    sliced = document.getElementById("sliced").value;
    console.log("sliceCheck value: ", sliced);

    return parseInt(sliced);
  } else {
    return 0;
  }
}

function getHome() {
  if (document.getElementById("home").checked) {
    home = document.getElementById("home").value;
    console.log("delivery value: ", home);

    return parseInt(home);
  } else {
    return 0;
  }
}

//calculate the final price with the given inputs
function calculate() {
  size = getSize();
  type = getType();
  topping = getToppings();
  ammount = getAmmount();
  home = getHome();
  sliced = getSliced();
  card = getCard();

  total = ((size + type + topping) * ammount + home + sliced) * card;
  

  document.getElementById("bill").innerHTML = "De totaalprijs is €" + Math.round((total + Number.EPSILON) * 100) / 100;
}

document.getElementById("sortBTN").onclick = showRec;
document.getElementById("ingredient").onclick = showIn;
function showIn() {
  document.getElementById("ingredients").classList.remove("hidden");
}

function showRec(){
    document.getElementById("sort").classList.remove("hidden");
}

function sort(){
    if (document.getElementById("Napoletana").selected) {
        document.getElementById("reccomendation").innerHTML = "bacon <br> kappertjes"
         }
      if (document.getElementById("Margherita").selected) {
        document.getElementById("reccomendation").innerHTML = "Zwarte olijven <br> Paprika"
      }
      if (document.getElementById("Quattro-Formaggi").selected) {
        document.getElementById("reccomendation").innerHTML = "kappertjes <br> Zwarte olijven"
      }
      if (document.getElementById("Funghi").selected) {
        document.getElementById("reccomendation").innerHTML = "Ansjovis <br> bacon"
      }
      if (document.getElementById("Calzone").selected) {
        document.getElementById("reccomendation").innerHTML = "Paprika <br> kappertjes"
      }

}