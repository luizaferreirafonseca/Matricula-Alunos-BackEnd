import {alunos} from '../model/Alunos.js'
import { validateBody, validateId } from '../utils/index.js'

export class AlunosController {
    static getAlunos(req, res){            //static é pra usar o método da classe sem instanciar a classe 
        res.status(200).send(alunos)
    }




    static getById(req, res){
        const id = Number(req.params.id) // estou pegando o id que está vindo da requisição

        validateId(id, res) // FUnção que valida o id 

        
        const aluno = alunos.find((item) => item.id === id) //o find vai no array de alunos e procurar o item que o id seja igual ao id que veio do parametro(da req) e retornar o item, caso nao encontre, ele retorna null
            
        if(!!aluno){  // verifica se achou o aluno com o id passado
            res.status(200).send(aluno)  
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
            res.status(200).send(novoAluno)
    
        
    }







    static delete(req, res){
        const id = Number(req.params.id) 
        
        validateId(id, res)

        const alunoIndex = alunos.findIndex((item) => item.id === id) 
            
        if(alunoIndex !== -1){  
            alunos.splice(alunoIndex, 1)
            res.status(200).send(alunos)  
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
            

        if(alunoIndex !== 1){  
            alunos[alunoIndex] = alunoAtualizado
            res.status(200).send(alunoAtualizado)  
        }else{
            res.status(404).send('Esse aluno não existe.')
        }
        
    }


}