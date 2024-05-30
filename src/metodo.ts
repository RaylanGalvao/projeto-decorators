//decorator Metodo: so e chamado quando nosso metodo for chamado em algum local

function verificaPessoa(idade: number){
    return(target: any, key: string, descriptor: PropertyDescriptor)=>{
        // console.log("target", target)
        // console.log("key", key)
        // console.log("descriptor", descriptor)

        const metodoOriginal = descriptor.value //salvar nosso metodo original
        descriptor.value = function () {
            if(idade < 18){
                console.log("estamos cadastrando como pessoa menor de idadde")
                return  metodoOriginal.apply(this)
            }else{
                console.log("adulto cadastrado no  sistema")
                return  metodoOriginal.apply(this)
            }
        }
    }
}

class Pessoa{
    nome: string

    constructor(nome:string){
        this.nome = nome
    }
    @verificaPessoa(26)
    cadastrarPessoa(){
        console.log(`bem vindo ${this.nome} ao sistema`)
    }
}

const pessoa1 = new Pessoa("raylan")

pessoa1.cadastrarPessoa()