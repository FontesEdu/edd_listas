import { listaLigada } from "./listas.js";

const lista = new listaLigada()

lista.append("Lucas")
lista.append("Moura")
lista.append("Pedro")
lista.append("Carlo")

console.log(lista.size())

lista.insert(3, "Bruna")

console.log(lista.size())

console.log(`A posição do valor 'Diego' é: ${lista.indexOf("Diego")}`)

console.log(lista)