// const mPrice = 3;
// const lPrice = 5;

const types = [
    {type: "Napoletana", price: 3},
    {type: "Margherita", price: 2},
    {type: "Quattro-Formaggi", price: 2},
    {type: "Funghi", price: 3},
    {type: "Calzone", price: 3}
];

const toppings = [
    {top: "No extra toppings", price: 0},
    {top: "Bacon", price: 3},
    {top: "Black olives", price: 2},
    {top: "Capers", price: 2},
    {top: "Anchovies", price: 3},
    {top: "Capsicum", price: 2}
];

const extra = ["card","sliced","home"]

document.getElementById("calculate").onclick = calculate;

function getSize(){
    console.log('selectSize value: ' , document.getElementById('selectSize').value);

//    if(document.getElementById("medium").selected){
//        console.log(mPrice);
//    }else if(document.getElementById("large").selected){
//        console.log(lPrice);
//    }
}

function getType(){
    console.log('selectType value: ' , document.getElementById('selectType').value);

    // if (document.getElementById("Napoletana").selected) {
    //     console.log(types[0].price)
    // }else if(document.getElementById("Margherita").selected){
    //     console.log(types[1].price);
    // }else if(document.getElementById("Quattro-Formaggi").selected){
    //     console.log(types[2].price);
    // }else if(document.getElementById("Funghi").selected){
    //     console.log(types[3].price);
    // }else if(document.getElementById("Calzone").selected){
    //     console.log(types[4].price);
    // }
}

function getToppings(){
    console.log('selectTop value: ' , document.getElementById('selectTop').value);

    // if (document.getElementById("nothing").selected) {
    //     console.log(toppings[0].price);
    // }else if(document.getElementById("bacon").selected){
    //     console.log(toppings[1].price);
    // }else if(document.getElementById("black-olives").selected){
    //     console.log(toppings[2].price);
    // }else if(document.getElementById("capers").selected){
    //     console.log(toppings[3].price);
    // }else if(document.getElementById("anchovies").selected){
    //     console.log(toppings[4].price);
    // }else if(document.getElementById("capsicum").selected){
    //     console.log(toppings[5].price);
    // }
}

function getAmmount(){
    console.log(document.getElementById("amount").value)
}

function getExtra(){
    if(document.getElementById("card").checked){
        console.log('cardCheck value: ' , document.getElementById('card').value);
    }if(document.getElementById("sliced").checked){
        console.log('sliceCheck value: ' , document.getElementById('sliced').value);
    }if(document.getElementById("home").checked){
        console.log('delivery value: ' , document.getElementById('home').value);
    }
}

//calculate the final price with the given inputs
function calculate(){
    document.getElementById("bill").innerHTML = eval(getSize(), getType(), getToppings(), getAmmount(), getExtra())
    
}