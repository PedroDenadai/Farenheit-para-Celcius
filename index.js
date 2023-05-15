function pegarTemp() {
    let meuValor = parseFloat(document.getElementById('temp').value);
    let celcius = (parseFloat(meuValor) - 32) / 1.8;
    let output = document.getElementById('output');
    let h2 = document.getElementsByTagName('h2');
    output.innerHTML = celcius.toFixed(2);
    if(!meuValor){
        output.style.color = "red"; // altera a cor do output
        output.innerHTML = "Você não inseriu nenhum valor";
    }else{
        if (celcius > 30) {
            document.body.style.backgroundColor = "orange";
        } else {
            output.style.color = "white"; // altera a cor do output
            h2[0].style.color = "white"; // Altera a cor do primeiro elemento <h2>
            document.body.style.backgroundColor = "blue";
        }
    }
    
}
