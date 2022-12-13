let acesas = [false, false, false];
let luzes = document.querySelectorAll(".luz");
let textos = document.querySelectorAll(".texto");
let inputs = document.querySelectorAll("input");

function acender(i){
    if(acesas[i]==false){
        luzes[i].className="luz l"+i;
        textos[i].className="texto t"+i;
        acesas[i] = true;
    }else{
        luzes[i].className="luz";
        textos[i].className="texto";
        acesas[i] = false;
        inputs[i].checked = false; 
    }
}