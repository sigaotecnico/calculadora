// Função para adicionar números e operadores ao campo de entrada
function add(recebido) {
    document.querySelector("#input").value += recebido;
}

// Função para limpar o campo de entrada
function limpar() {
    document.querySelector("#input").value = " ";
}

function conta() {
    // Obtém o valor do campo de entrada
    var expressao = document.querySelector("#input").value;

    // Define uma expressão regular para encontrar números e operadores
    var regex = /(\d+(\.\d+)?)|(\+|\-|\*|\/)/g;

    // Usa a expressão regular para encontrar números e operadores na expressão
    var partes = expressao.match(regex);

    // Verifica se a expressão foi dividida corretamente
    if (partes && partes.length === 3) {
        var primeiroNumero = parseFloat(partes[0]); // Primeiro número
        var operador = partes[1]; // Operador
        var segundoNumero = parseFloat(partes[2]); // Segundo número
        var resultado;

        // ####################################
        // #### TENTE FAZER O CÁLCULO AQUI ####
        // ####################################
       
        // #### Faça um teste com a calculadora e observe que ela sempre retorna o operador. 
        // #### Experimente remover os comentários "//" que estão antes de "primeiroNumero" 
        // #### e depois de "segundoNumero". Em seguida, tente resolver a calculadora.

        // resultado = primeiroNumero;
        resultado = operador;
        // resultado = segundoNumero;

        // Define o resultado no campo de entrada
        document.querySelector("#input").value = resultado;
    } else {
        // Se a expressão não pôde ser dividida corretamente, exiba uma mensagem de erro
        document.querySelector("#input").value = "Erro: Expressão inválida";
    }
}
