export const validateBody = (body, res) => {
    const arrayDeValues = Object.values(body)
    let totalDeErros = 0;


    arrayDeValues.forEach((value) => {
     if(!value){
        totalDeErros+= 1;
     }
    })

    if(totalDeErros > 0){
       res.status(500).send('Todos os campos precisam ser preenchidos.')
    //   throw new Error('Todos os dados devem ser preenchidos')
    }
}


export const validateId = (id, res) => {
    if(!id){     //verifica se o id não é válido
           
        // throw new Error('Informe o parâmetro válido')
        res.status(400).json({Mensagem:'Informe o parâmetro válido.', parametro: id}) //envia msg de erro e o codigo
    }
}