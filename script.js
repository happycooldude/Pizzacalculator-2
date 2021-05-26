document.getElementById("calculate").onclick = calculate;

function getSize(){
    size = document.getElementById('selectSize').value;
    console.log('selectSize value: ' , size);

    return parseInt(size);
}

function getType(){
    type = document.getElementById('selectType').value;
    console.log('selectType value: ' , type);

    return parseInt(type);
}

function getToppings(){
    topping = document.getElementById('selectTop').value;
    console.log('selectTop value: ' , topping);

    return parseInt(topping);
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
    getSize();
    getType();
    getToppings();
    getAmmount();
    getExtra();
    getExtra();
    getExtra();

    document.getElementById("bill").innerHTML =  parseInt(size) + parseInt(type) + parseInt(topping) * parseInt(ammount)
}