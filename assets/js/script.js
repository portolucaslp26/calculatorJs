function insert(num){
   let numero = document.querySelector('#resultado').innerHTML;
   document.querySelector('#resultado').innerHTML = numero + num;   
}

function clean(){
    document.querySelector('#resultado').innerHTML = '';
}

function back(){
    let resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.querySelector('#resultado').innerHTML;
    if(resultado){
        if (resultado.includes('%')){
            resultado = resultado.split('%')
            resultado = (resultado[1] / 100) * resultado[0]
        }
        document.querySelector('#resultado').innerHTML = eval(resultado);   
    }

}
