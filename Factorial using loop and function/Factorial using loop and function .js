// factorial 
function factorialFunction (number){
    var inisial=1
    for ( var i =1; i<=number; i++){
        inisial= inisial * i
    }
    return inisial
}
var result = factorialFunction(10)
console.log(result)
