import {alunos} from '../model/Alunos.js'
import { validateBody, validateId } from '../utils/index.js'
import {series} from '../model/Series.js'
import { AlunoDto } from '../DTOs/AlunoDto.js'

export class AlunosController {
    static getAlunos(req, res){            //static é pra usar o método da classe sem instanciar a classe 
       
        const alunosCompletos = alunos.map(aluno => new AlunoDto(aluno))
        
        res.status(200).send(alunosCompletos)
    }




    static getById(req, res){
        const id = Number(req.params.id) // estou pegando o id que está vindo da requisição

        validateId(id, res) // FUnção que valida o id 

        
        const aluno = alunos.find((item) => item.id === id) //o find vai no array de alunos e procurar o item que o id seja igual ao id que veio do parametro(da req) e retornar o item, caso nao encontre, ele retorna null
            
        const alunoCompleto = new AlunoDto(aluno)

        if(!!aluno){  // verifica se achou o aluno com o id passado
            res.status(200).send(alunoCompleto)  
        }else{
            res.status(404).send('Esse aluno não existe.')
        }
        
        
    }

    static post(req, res){
        const novoAluno = req.body
        console.log(novoAluno)   // pegamos o body
        const lastId = alunos[alunos.length-1].id    //procuramos o id do ult. elemento do array
        novoAluno.id = lastId + 1 // criamos um id pra esse novo aluno
        

           validateBody(novoAluno, res)


            alunos.push(novoAluno)
            const alunoCompleto = new AlunoDto(novoAluno)
            res.status(200).send(alunoCompleto)
    
        
    }







    static delete(req, res){
        const id = Number(req.params.id) 
        
        validateId(id, res)

        const alunoIndex = alunos.findIndex((item) => item.id === id) 
            
        if(alunoIndex !== -1){  
            alunos.splice(alunoIndex, 1)
            const alunosCompletos = alunos.map(aluno => new AlunoDto(aluno))
            res.status(200).send(alunosCompletos)  
        }else{
            res.status(404).send('Esse aluno não existe.')
        }
        

    }






    static update(req, res){
        const alunoAtualizado = req.body
        const id = Number(req.params.id) 

        validateId(id, res)
        validateBody(alunoAtualizado, res)
        const alunoIndex = alunos.findIndex((item) => item.id === id) 
            

        if(alunoIndex !== -1){  
            alunos[alunoIndex] = alunoAtualizado
            const alunoCompleto = new AlunoDto(alunoAtualizado)
            res.status(200).send(alunoCompleto)  
        }else{
            res.status(404).send('Esse aluno não existe.')
        }
        
    }


   



}