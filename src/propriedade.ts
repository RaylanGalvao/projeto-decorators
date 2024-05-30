//propriedade decorators
function validarNome(tamanho: number){
    //target= construtor da nossa clase
    //key =  nossa propriedade
    return(target: any, key: string) => {
        //console.log(key)
        let valor = target[key]

        const getters = () => valor

        const setters = (value: string) => {
            if(value === ""){
                console.log("voce nao pode deixar em branco")
            }else if(value.length<tamanho){
                console.log("voce nao pode criar com esse tamanho")
            }else{
                valor=value
            }
        }
        Object.defineProperty(target, key, {
            get: getters,
            set: setters
        })
    }
}
class Jogo{

    @validarNome(5)
    nome:string

    constructor(nome: string){
        this.nome = nome
    }
}

const jogo1 = new Jogo("gta 5")
console.log(jogo1.nome)