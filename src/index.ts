main();

function main():void{
    //atividade 1
    let numero = 3;
    let texto = "abacaxi"
    // 1- 1
    let n2 = numero;
    let ts = texto;
    n2 = 5;
    ts = "maça"
    console.log(numero, texto, n2, ts)
    //Parte A
    let aluno1PA = {nome: "Ana", idade: 20};
    let aluno2PA = aluno1PA;
    aluno2PA.idade = 25;
    console.log(aluno1PA, aluno2PA);
    console.log("Resposta da pergunta: Pois o aluno2 possui apenas a referencia na memoria do aluno1")
    //Parte B
    let a1 = new Aluno("Bruno", 22);
    let a2 = a1;
    a2.idade = 30;
    console.log(a1, a2)
    console.log("Resposta da pergunta: Pois o a2 possui apenas a referencia na memoria do a1")
    //Exercício 2
    //Parte A
    const alunos = [
        {nome: "Carla", idade: 19},
        {nome:"Pedro", idade: 21}
    ];
    // @ts-ignore
    alunos[1].idade = 25;
    console.log(alunos);
    console.log("Resposta da pergunta: Pois valores constantes nao podem mudar o valor, o valor da variavel alunos é o fato de ser um array de 2 objetos, os valores dos objetos podem ser alterados mas nao a quantidade de objetos do array")
    //Parte B
    const turma = [
        new Aluno("Eva", 18),
        new Aluno("Felipe", 20)
    ];
    // @ts-ignore
    turma[1].idade = 23;
    console.log(turma)
    console.log("Resposta da pergunta: Pois valores constantes nao podem mudar o valor, o valor da variavel alunos é o fato de ser um array de 2 objetos, os valores dos objetos podem ser alterados mas nao a quantidade de objetos do array")
    //Parte C
    const aluno1 = new Aluno("Ana", 20);
    const aluno2 = new Aluno("Bruno", 42);
    const aluno3 = new Aluno("João", 29);
    const aluno4 = new Aluno("Maria", 31);

    const listaA = [aluno1, aluno2, aluno3, aluno4];
    const listaB = [aluno1, aluno3];
    const listaC = [aluno1, aluno4, aluno3];
    const turmaPC = new Turma(aluno3, "t001");

    // @ts-ignore
    listaB[1].nome = "Zelda";
    console.log(listaA, listaB, listaC, turmaPC)
    console.log("Pois mudou o aluno1 e seu valor que esta sendo instanciado em todo codigo")

    //Exercicio 3
    //Parte A
    const alunoP3A = {
        nome:"Hugo",
        idade: 20,
        endereco:{
            rua:"Rua A",
            numero: 10
        }
    };
    const a2P3A = {
        nome: alunoP3A.nome,
        endereco: alunoP3A.endereco
    };
    a2P3A.nome = "Camila";
    a2P3A.endereco.rua = "Rua B"
    console.log(alunoP3A, a2P3A);
    //Parte B
    
}

class Aluno {
    constructor(public name:string, public idade:number) {}
}

class Turma{
    constructor(public aluno:Aluno, public codigo:string) {}
}