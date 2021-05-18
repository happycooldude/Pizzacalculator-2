const sPrice = 3;
const mPrice = 5;
const lPrice = 7;
const toppingprice = 2;
const toppingPrices = [0, 3, 2, 2, 3, 2.5,]

const types = ["Napoletana", "Margherita", "Quattro-Formaggi", "Funghi", "Calzone"];
const toppings = ["No extra toppings", "Bacon", "Black olives", "Capers", "Anchovies", "Capsicum"]
const amount = ["1","2","3","4","5"]
const extra = ["card","sliced","home"]

document.getElementById("calculate").onclick = calculate;

function getSize(){
   if (document.getElementById("small").selected) {
       console.log(sPrice);
   }else if(document.getElementById("medium").selected){
       console.log(mPrice);
   }else if(document.getElementById("large").selected){
       console.log(lPrice);
   }
}

function getType(){
    if (document.getElementById("Napoletana").selected) {
        console.log(types[0])
    }else if(document.getElementById("Margherita").selected){
        console.log(types[1]);
    }else if(document.getElementById("Quattro-Formaggi").selected){
        console.log(types[2]);
    }else if(document.getElementById("Funghi").selected){
        console.log(types[3]);
    }else if(document.getElementById("Calzone").selected){
        console.log(types[4]);
    }
    
}

function getToppings(){
    if (document.getElementById("nothing").selected) {
        console.log(toppings[0]);
    }else if(document.getElementById("bacon").selected){
        console.log(toppings[1]);
    }else if(document.getElementById("black-olives").selected){
        console.log(toppings[2]);
    }else if(document.getElementById("capers").selected){
        console.log(toppings[3]);
    }else if(document.getElementById("anchovies").selected){
        console.log(toppings[4]);
    }else if(document.getElementById("capsicum").selected){
        console.log(toppings[5]);
    }
}

function getAmmount(){
    console.log(document.getElementById("amount").value)
}

function getExtra(){
    if(document.getElementById("card").checked){
        console.log("card is checked")
    }if(document.getElementById("sliced").checked){
        console.log("sliced is checked")
    }if(document.getElementById("home").checked){
        console.log("home is checked")
    }
}

//calculate the final price with the given inputs
function calculate(){
    console.log(getSize(), getType(), getToppings(), getAmmount(), getExtra());
}