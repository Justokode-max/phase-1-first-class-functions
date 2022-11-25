function Spy(){
    console.log(sum)

}
function receivesAFunction(back){
let sum="Okode";
back(sum);

}



function returnsANamedFunction() {
    return function code(){
        console.log("jj")
    };
    

    
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}