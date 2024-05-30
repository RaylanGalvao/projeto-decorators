/*
decorator
classes 
propriedades
metodos
parametros(bem pouco usado)
getters / setters (bem pouco usado)
*/

// function logInfo(target: any){
//     console.log("Sistema esta online")
// }

// function logInfo(mensagem: string){
//     return (target: any)=>{
//         console.log(`${mensagem}, ${target}`)
//     }
// }

// @logInfo("Servidor esta rodando")
// class sistema{

// }

//praticando //


function setIpServidor(novoIp: string){
    return (target: any) => {//target e o construtor da nossa classe
        return class extends target{ 
            ip = novoIp
        }
    }
}
@setIpServidor("192.168.50.30")
class Servidor{
}

const servidor1 =  new Servidor()
console.log(servidor1)