let result = document.getElementById("display");

function appendNumabe(number){
    result.value += number;
}

function appendOperations(operation){
    const lastChar = result.value.slice(-1);
    if(
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/" 
    )
    {
        result.value = result.value.slice(0, -1) + operation;
    }else{
        result.value += operation;
    }
}

function calculator(){
    result.value = eval(result.value);
}

function backSpace(){
    result.value = result.value.slice(0, -1);
}

function clearResult(){
    result.value = "";
}