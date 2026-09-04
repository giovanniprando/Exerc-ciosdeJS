/*
//Atividade 1

let name = "Giovanni";
let age = 30;
let course = "Desenvolvimento de Sistemas";
let semester = "2";

console.log("Nome: " + name);
console.log("Idade: " + age);
console.log("Curso: " + course);
console.log("Semestre: " + semester);

//Atividade 2

let valorTeclado = 150;
let valorMouse = 80;
let valorTotal = valorTeclado + valorMouse;

console.log("Valor do teclado: " + valorTeclado);
console.log("Valor do mouse: " + valorMouse);
console.log("Valor total: " + valorTotal);

//Atividade 3

let valorPossuido = 100;
let valorProduto = 67.5;
let Troco = valorPossuido - valorProduto;

console.log("Valor possuído: " + valorPossuido);
console.log("Valor do produto: " + valorProduto);
console.log("Troco: " + Troco);

//Atividade 4

let valorCelcius = 34;
let valorFahrenheit = (valorCelcius * 9) / 5 + 32;

console.log("Temperatura em Celsius: " + valorCelcius);
console.log("Temperatura em Fahrenheit: " + valorFahrenheit);

//Atividade 5

let valorComprimento = 10;
let valorLargura = 8;
let valorArea = valorComprimento * valorLargura;
console.log("Comprimento: " + valorComprimento);
console.log("Largura: " + valorLargura);
console.log("Área: " + valorArea);

//Atividade 6

let salarioDevjunior = 3500;
let salarioReajuste = 8;
let valordoReajuste = salarioDevjunior * (salarioReajuste / 100);
let salarioNovo = valordoReajuste + salarioDevjunior;

console.log("Salario atual: " + salarioDevjunior);
console.log("Reajuste: " + salarioReajuste + "%");
console.log("Valor do Reajuste: " + valordoReajuste);
console.log("Novo salário: " + salarioNovo);

//Atividade 7

let valorNotebook = 4000;
let desconto = 15;
let valorDesconto = valorNotebook * (desconto / 100);
let precofinal = valorNotebook - valorDesconto;

console.log("Valor do notebook: " + valorNotebook);
console.log("Desconto: " + desconto + "%");
console.log("Valor do Desconto: " + valorDesconto);
console.log("Total a pagar: " + precofinal);

//Atividade 8

let aluno = "João";
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;

console.log("Aluno: " + aluno);
console.log("Média: " + media);

//Atividade 9
let horas = 4;
let minutos = 60 * 4;
let segundos = minutos * 60;

console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);

//Atividade 10

let distancia = 300;
let consumo = 12;
let gasolina = 6;
let litros = distancia / consumo;
let Custo = litros * gasolina;

console.log("Distância percorrida: " + distancia + "km");
console.log("Consumo de gasolina: " + litros + "L");
console.log("Custo da viagem: " + "R$" + Custo);

//Atividade 11

function somar(num1, num2) {
  return num1 + num2;
}
console.log(somar(10, 20));

//Atividade 12

function calculadora(numero1, numero2) {
  console.log("Soma:", numero1 + numero2);
  console.log("Subtração:", numero1 - numero2);
  console.log("Multiplicação:", numero1 * numero2);
  console.log("Divisão:", numero1 / numero2);
}

calculadora(20, 5);

//Atividade 13

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
let aluno1 = {
  nome: "Carlos",
  nota1: 5.5,
  nota2: 9,
  nota3: 10,
};

let aluno2 = {
  nome: "Joao",
  nota1: 6,
  nota2: 7,
  nota3: 5,
};

let aluno3 = {
  nome: "Giovanni",
  nota1: 6,
  nota2: 7,
  nota3: 10,
};

console.log(
  aluno1.nome,
  calcularMedia(aluno1.nota1, aluno1.nota2, aluno1.nota3),
);

console.log(
  aluno2.nome,
  calcularMedia(aluno2.nota1, aluno2.nota2, aluno2.nota3),
);

console.log(
  aluno3.nome,
  calcularMedia(aluno3.nota1, aluno3.nota2, aluno3.nota3),
);

//Atividade 14

function calcularSalario(salario, bonus) {
  return salario + bonus;
}

let salario = 12000;
let bonus = 1500;
let salariofinal = salario + bonus;

console.log("Salário: " + salario);
console.log("Bônus: " + bonus);
console.log("Salário Final: " + calcularSalario(12000, 1500));

//Atividade 15

function calcularDesconto(preco, percentual) {
  return preco - preco * (percentual / 100);
}

let produto = "Notebook";
let preco = 5670;
let desconto = 15;
let precoFinal = calcularDesconto(preco, desconto);

console.log("Produto: " + produto);
console.log("preco: " + preco);
console.log("desconto: " + desconto + "%");
console.log("Preço Final: " + precoFinal);

//Atividade 16

function calcularCurso(valorCurso, quantidadeParcelas) {
  let valorParcela = valorCurso / quantidadeParcelas;

  console.log("Valor do curso: R$", valorCurso);
  console.log("Quantidade de parcelas:", quantidadeParcelas);
  console.log("Valor de cada parcela: R$", valorParcela);
  console.log(".");
}

calcularCurso(1200, 6);
calcularCurso(3000, 10);
calcularCurso(500, 2);

//Atividade 17

function calcularComissao(totalVendido, percentualComissao) {
  return totalVendido * (percentualComissao / 100);
}

const totalVendido = 119000;
const percentualComissao = 5;
const valorComissao = calcularComissao(totalVendido, percentualComissao);

console.log("Total Vendido: " + totalVendido);
console.log("Comissão: " + percentualComissao + "%");
console.log("Valor da comissão: " + valorComissao);

//Atividade 18
function calcularPagamento(horas, valorHora) {
  return horas * valorHora;
}

let pagamento1 = calcularPagamento(160, 25);

console.log("Horas trabalhadas:", 160);
console.log("Valor por hora: R$", 25);
console.log("Pagamento: R$", pagamento1);

let pagamento2 = calcularPagamento(100, 30);

console.log("Horas trabalhadas:", 100);
console.log("Valor por hora: R$", 30);
console.log("Pagamento: R$", pagamento2);

let pagamento3 = calcularPagamento(200, 20);

console.log("Horas trabalhadas:", 200);
console.log("Valor por hora: R$", 20);
console.log("Pagamento: R$", pagamento3);

//Atividade 19
function boletim(nome, nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  console.log("========================");
  console.log("       BOLETIM");
  console.log("========================");

  console.log("Aluno:", nome);

  console.log("Nota 1:", nota1);
  console.log("Nota 2:", nota2);
  console.log("Nota 3:", nota3);

  console.log("Média:", media);
}

boletim("Mariana", 8, 7, 9);

//Atividade 20
let valorProcessador = 1200;
let valorRam = 500;
let valorSSD = 600;
let valorGPU = 2000;
let valorDesconto = 10;
let parcela = 12;

function valorTotal() {
  return valorProcessador + valorRam + valorSSD + valorGPU;
}

function valorFinal() {
  return valorTotal() - desconto();
}

function desconto() {
  return valorTotal() * (valorDesconto / 100);
}

function valoraVista() {
  return valorFinal();
}

function valorDaParcela() {
  return valoraVista() / parcela;
}

console.log("=================================================");
console.log("               Orçamento - PC GAMER              ");
console.log("=================================================");
console.log("                                                 ");
console.log("Processador:        " + "R$ " + valorProcessador + ",00");
console.log("Memória RAM:        " + "R$ " + valorRam + ",00");
console.log("SSD:                " + "R$ " + valorSSD + ",00");
console.log("Placa de vídeo:     " + "R$ " + valorGPU + ",00");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Total:              " + "R$ " + valorTotal() + ",00");
console.log();
console.log("Desconto:              " + valorDesconto + "%");
console.log("Valor Do Desconto:  " + "R$ " + desconto() + ",00");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Valor Final:        " + "R$ " + valorFinal() + ",00");
console.log("À vista:            " + "R$ " + valoraVista() + ",00");
console.log("12x:                " + "R$ " + valorDaParcela() + "0");
