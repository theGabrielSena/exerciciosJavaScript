const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log('Botão clicado!');
});

function exercicio05() {
    let valor = parseInt(prompt("Digite um número"));
    valor = valor - 1;
    alert(valor);
}

function exercicio06() {
    let base = parseFloat(prompt("Digite a base do retângulo"));
    let altura = parseFloat(prompt("Digite a área do retângulo"));
    let area = parseFloat(base * altura / 2);
    alert(area);
}

function exercicio07() {
    let anos = parseInt(prompt("Digite quantos anos se passaram desde o seu nascimento"));

    let meses = parseInt(prompt("Digite quantos meses se passaram desde seu último aniversário"));

    let dias = parseInt(prompt("Digite quantos dias sobraram, fora dos meses"));

    let somaDias = parseInt(anos * 365 + meses * 30 + dias * 1);
    alert(somaDias);
}

function exercicio08() {
    let eleitorTotal, votosValidos, votosBrancos, votosNulos = 0

    eleitorTotal = parseInt(prompt("Digite a quantidade total de eleitores"));

    votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos"));

    votosNulos = parseInt(prompt("Digite a quantidade de votos nulos"));

    votosValidos = parseInt(prompt("Digite a quantidade total de votos válidos"));

    votosBrancos = (100 * votosBrancos) / eleitorTotal;
    votosNulos = (100 * votosNulos) / eleitorTotal;
    votosValidos = (100 * votosValidos) / eleitorTotal;

    alert("A porcentagem de votos brancos é de: " + votosBrancos + "%");
    alert("A porcentagem de votos nulos é de: " + votosNulos + "%");
    alert("A porcentagem de votos validos é de: " + votosValidos + "%");
}

function exercicio09() {
    let salarioMensal = parseFloat(prompt("Digite o salário mensal"));

    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste"));

    percentualReajuste = (salarioMensal * percentualReajuste) / 100;
    salarioMensal = salarioMensal + percentualReajuste;

    alert("O novo salário recalculado é de: R$" + salarioMensal);
}

function exercicio10() {
    let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do veículo"));
    let percDistr = (custoFabrica * 28) / 100;
    let impostos = (custoFabrica * 45) / 100;

    custoFabrica = custoFabrica + percDistr + impostos;

    alert("O valor do veículo reajustado ficou em: R$" + custoFabrica);
}

function exercicio11() {
    let qntdCarrosVendidos = parseFloat(prompt("Digite quantos quantos carros foram vendidos por você nesse mês"));
    let valorTotalVenda = parseFloat(prompt("Digite o valor total das vendas nesse mês"));
    let salarioFixo = parseFloat(prompt("Digite seu salário fixo mensal"));
    let comissaoVenda = parseFloat(prompt("Digite o acréscimo recebido por cada carro vendido"));
    let comissaoFixa = parseFloat(qntdCarrosVendidos / 100) * comissaoVenda;
    let comissaoCarro = parseFloat(valorTotalVenda / 100) * 5;
    let salarioLiquido;

    comissaoVenda = comissaoCarro + comissaoFixa;

    salarioLiquido = salarioFixo + comissaoVenda;

    alert("O salário reajustado com acréscimo das comissões é de: R$" + salarioLiquido);
}

function exercicio12() {
    let tempFahr = parseFloat(prompt("Digite a temperatura em graus Fahrenheit"));

    tempFahr = (tempFahr - 32) / 1.8

    alert("A temperatura convertida é de: " + tempFahr + "ºC");
}

function exercicio13() {
    let mediaFinal;
    let n1, n2, n3;

    n1 = parseFloat(prompt("Digite a primeira nota:"));
    n2 = parseFloat(prompt("Digite a segunda nota:"));
    n3 = parseFloat(prompt("Digite a terceira nota:"));

    mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10

    if (mediaFinal >= 7) {
        alert("Aluno aprovado com a média de: " + mediaFinal + " pontos")
    } else {
        alert("Aluno reprovado com a média de: " + mediaFinal + " pontos");
    }

}

function exercicio14() {
    let num = parseInt(prompt("Digite o número que vai ser verificado"));

    if (num > 10) {
        alert("O número é maior que 10");
    } else {
        alert("É menor que 10");
    }
}

function exercicio15() {
    let num = parseInt(prompt("Digite o número que vai ser verificado"));

    if (num >= 0) {
        alert("O número é positivo");
    } else {
        alert("O número é negativo");
    }
}

function exercicio16() {
    let precoMaca, totalCompra = 0;
    let numMaca = parseFloat(prompt("Digite o número de maças que comprou:"));

    if (numMaca <= 6) {
        precoMaca = 1.30;
        totalCompra = numMaca * precoMaca;
    }
    else {
        precoMaca = 1;
        totalCompra = numMaca * precoMaca;
    }

    alert("O preço total na compra de maças foi de: " + totalCompra);
}

function exercicio17() {
    let nota1, nota2;
    nota1 = parseFloat(prompt("Digite a primeira nota:"));
    nota2 = parseFloat(prompt("Digite a segunda nota:"));

    mediaFinal = (nota1 * 2 + nota2 * 3) / 5

    if (mediaFinal >= 6) {
        alert("Aluno aprovado com a média de: " + mediaFinal + " pontos");
    } else {
        alert("Aluno reprovado com a média de: " + mediaFinal + " pontos");
    }
}

function exercicio18() {
    let anoSoma;
    const anoAtual = parseInt(prompt("Digite o ano atual"));
    const anoNasc = parseInt(prompt("Digite o ano do seu nascimento"));

    anoSoma = anoAtual - anoNasc;

    if (anoSoma >= 18) {
        alert("Você poderá votar, pois já tem " + anoSoma + " anos de idade");
    } else {
        alert("Você não poderá votar, pois ainda tem " + anoSoma + " anos de idade");
    }
}

function exercicio19() {
    let num1, num2;

    num1 = parseInt(prompt("Digite o primeiro número"));
    num2 = parseInt(prompt("Digite o segundo número"));

    if (num1 > num2) {
        alert("O maior número digitado foi: " + num1);
    }
    else if (num2 > num1) {
        alert("O maior número digitado foi: " + num2);
    }
    else {
        alert("Os número são iguais");
    }
}

function exercicio20() {
    let num1, num2;

    num1 = parseInt(prompt("Digite o primeiro número"));
    num2 = parseInt(prompt("Digite o segundo número"));

    if (num1 > num2) {
        alert("A sequênia numérica é: " + num2 + " , " + num1);
    }
    else if (num2 > num1) {
        alert("A sequênia numérica é: " + num1 + " , " + num2);
    }
    else {
        alert("Os número são iguais");
    }
}

function exercicio21() {
    let horaInicio = prompt("Que horas o jogo começou? (ex.: 17)")
    let horaTermino = prompt("Que horas o jogo acabou? (ex.: 20)")

    let duracao;

    duracao = horaTermino - horaInicio

    if (duracao <= 0) {
        duracao = duracao + 24
    }

    alert(duracao)
}

function exercicio22() {
    
}
