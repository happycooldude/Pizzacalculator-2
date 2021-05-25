// const mPrice = 3;
// const lPrice = 5;

// const types = [
//     {type: "Napoletana", price: 3},
//     {type: "Margherita", price: 2},
//     {type: "Quattro-Formaggi", price: 2},
//     {type: "Funghi", price: 3},
//     {type: "Calzone", price: 3}
// ];

// const toppings = [
//     {top: "No extra toppings", price: 0},
//     {top: "Bacon", price: 3},
//     {top: "Black olives", price: 2},
//     {top: "Capers", price: 2},
//     {top: "Anchovies", price: 3},
//     {top: "Capsicum", price: 2}
// ];

const extra = ["card","sliced","home"]

document.getElementById("calculate").onclick = calculate;

function getSize(){
    size = document.getElementById('selectSize').value;
    console.log('selectSize value: ' , size);

    return parseInt(size);

//    if(document.getElementById("medium").selected){
//        console.log(mPrice);
//    }else if(document.getElementById("large").selected){
//        console.log(lPrice);
//    }
}

function getType(){
    type = document.getElementById('selectType').value;
    console.log('selectType value: ' , type);

    return parseInt(type);

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
    topping = document.getElementById('selectTop').value;
    console.log('selectTop value: ' , topping);

    return parseInt(topping);

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
    ammount = document.getElementById("amount").value;
    console.log('selectAmmount value: ' , ammount);

    return parseInt(ammount);
}

function getExtra(){
    if(document.getElementById("card").checked){
        card = document.getElementById('card').value;
        console.log('cardCheck value: ' , card);

        return parseInt(card);
    }if(document.getElementById("sliced").checked){
        sliced = document.getElementById('sliced').value;
        console.log('sliceCheck value: ' , sliced);

        return parseInt(sliced);
    }if(document.getElementById("home").checked){
        home = document.getElementById('home').value;
        console.log('delivery value: ' , home);

        return parseInt(home);
    }
}

//calculate the final price with the given inputs
function calculate(){
    size = getSize();
    type = getType();
    topping = getToppings();
    ammount = getAmmount();
    card = getExtra();
    sliced = getExtra();
    home = getExtra();

    document.getElementById("bill").innerHTML = size + type + topping * ammount
}