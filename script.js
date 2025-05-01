const inputSpace = document.getElementById("input-space");

function clicking(input){
    inputSpace.value += input;
}

function clearDisplay(){
    inputSpace.value="";
}

function backSpace(){
    if(inputSpace.value === 'Error'){
        inputSpace.value = "";
    }
    else{
        inputSpace.value = inputSpace.value.slice(0,-1);
    }
}

function result(){
    try{
        inputSpace.value = eval(inputSpace.value);
    }
    catch(error){
        inputSpace.value = 'Error';
    }
}