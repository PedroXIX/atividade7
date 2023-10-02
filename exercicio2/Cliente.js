export default class Cliente {
    constructor(nome,telefone,renda,email){
        this.Nome = nome
        this.Telefone = telefone
        this.Renda = renda
        this.Email = email
        }

        VerificarCredito() {
            const PromiseCredito = new Promise((resolve,reject) => {
                    if (this.Renda > 2000){
                        resolve(`Crédito aprovado (renda > 2000)`)
                    } else {
                        reject(`Crédito recusado (renda < 2000)`)
                    }
            })
            
            PromiseCredito.then(
                (resultado) => console.log(resultado)
            ).catch(
                (resultado) => console.log(resultado)
            )
        }

    }