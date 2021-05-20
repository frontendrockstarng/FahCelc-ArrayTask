function FahrtoCelc(fahrenheit){
    var tempFar = fahrenheit
    var fahrCelc 
    var result
    var ErrMsg = `${JSON.stringify(tempFar,null,1)} is not a valid number but a/an ${typeof(tempFar)}.`
       fahrCelc = (tempFar - 32) * 5 / 9;
       fahrCelc = parseFloat(fahrCelc).toFixed(4)
        result = `${tempFar} \xB0F is ${fahrCelc} \xB0C `
    if (typeof tempFar === 'string' || tempFar instanceof String) {
        tempFar === parseInt(tempFar)
        if(isNaN(tempFar) === true){
           tempFar =  JSON.stringify(tempFar)
            console.log (ErrMsg)
        }
        else{
            console.log(result)
        }
        
    }

    else if(Array.isArray(tempFar)){
        JSON.stringify(tempFar);
        console.log(ErrMsg)
    }

    else if(typeof tempFar === "object"){
        console.log(ErrMsg)
    }

    else if(typeof tempFar === "boolean"){
        console.log(ErrMsg)
    }


    else if(typeof tempFar === "number"){
        console.log(result)
    }

    else if(!tempFar){
        console.log(ErrMsg)
    }

   
}

FahrtoCelc("yes");