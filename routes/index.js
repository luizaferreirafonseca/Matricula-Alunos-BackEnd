import { AlunosController } from "../controller/alunosController.js" 


export const routes = (app) => {

    app.get('/alunos', AlunosController.getAlunos)
    
    app.get('/alunos/:id', AlunosController.getById)

    app.post('/alunos', AlunosController.post)

    app.delete('/alunos/:id', AlunosController.delete)

    app.put('/alunos/:id', AlunosController.update)

}



