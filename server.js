import express from 'express' //importação
// import routes from './routes/index.js' // Importei as minhas rotas
import {routes} from './routes/index.js' 

import cors from 'cors'

const app = express() //chamando o express

const port = 3000

app.use(express.json(), cors()) // faz isso pra transformar o body enviado do eu front do meu post em json 

routes(app)
app.listen(port, () => {
    console.log('O servidor está na porta:', port)
})

