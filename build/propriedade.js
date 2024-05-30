"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//propriedade decorators
function validarNome(tamanho) {
    //target= construtor da nossa clase
    //key =  nossa propriedade
    return (target, key) => {
        //console.log(key)
        let valor = target[key];
        const getters = () => valor;
        const setters = (value) => {
            if (value === "") {
                console.log("voce nao pode deixar em branco");
            }
            else if (value.length < tamanho) {
                console.log("voce nao pode criar com esse tamanho");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getters,
            set: setters
        });
    };
}
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
}
__decorate([
    validarNome(5)
], Jogo.prototype, "nome", void 0);
const jogo1 = new Jogo("gta 5");
console.log(jogo1.nome);
