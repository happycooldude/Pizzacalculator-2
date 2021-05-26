document.getElementById("calculate").onclick = calculate;

//krijg de waarde van de grootte van de pizza die je wilt bestellen
function getSize(){
    size = document.getElementById('selectSize').value;
    console.log('selectSize value: ' , size);

    return parseInt(size);
}

//krijg de waarde van het type pizza die je wilt bestellen
function getType(){
    type = document.getElementById('selectType').value;
    console.log('selectType value: ' , type);

    return parseInt(type);
}

//krijg de waarde van de topping die je op de pizza wilt
function getToppings(){
    topping = document.getElementById('selectTop').value;
    console.log('selectTop value: ' , topping);

    return parseInt(topping);
}

//krijg de waarde van de hoeveelheid pizza's die je wilt bestellen
function getAmmount(){
    ammount = document.getElementById("amount").value;
    console.log('selectAmmount value: ' , ammount);

    return parseInt(ammount);
}

//krijg de waardes van de extra opties die je kunt selecteren
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
    // getExtra();
    // getExtra();
    // getExtra();

    document.getElementById("bill").innerHTML =  (size + type + topping) * ammount;
}