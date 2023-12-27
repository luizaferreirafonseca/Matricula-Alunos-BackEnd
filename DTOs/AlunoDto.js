import { series } from "../model/Series.js";


export class AlunoDto {

 constructor(aluno){
    this.id = aluno.id;
    this.nome = aluno.nome; 
    this.matricula = aluno.matricula;
    this.idade = aluno.idade;
    this.endereco = aluno.endereco;
    this.telefone = aluno.telefone;
    this.media1 = aluno.media1;
    this.media2 = aluno.media2;
    this.serieId = aluno.serieId;
    this.seriesName = series.find(serie => serie.id === aluno.serieId).nome
    this.ensinoMedio = aluno.serieId === 3 || aluno.serieId === 4;
 }

}