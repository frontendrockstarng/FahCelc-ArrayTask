function checkYuGiOh(numInput){
    var numInput;
     if (isNaN(numInput)==true){
        if (Array.isArray(numInput)==true){
            console.log( `Invalid: ${JSON.stringify(numInput)}`);
            return numInput;
         } else if (typeof(numInput)=="object"){
            console.log(`Invalid: ${JSON.stringify(numInput)}`);
            return numInput;
         } else {
            console.log(`Invalid: ${JSON.stringify(numInput)}`);
            return numInput;
         }
     }
     else {
         var result;

        
         result = createArray(numInput);

         function createArray(x){
            var x;
            var arr = [];
            for (i=1; i<=x; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } 
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return result;
     }}
checkYuGiOh(5);
checkYuGiOh("15");
checkYuGiOh("fizzbuzz is meh");
