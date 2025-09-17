const url = "https://viacep.com.br/ws/88132857/json/"
const link = "https://viacep.com.br/ws/88122246/json/"
const url4 = "https://viacep.com.br/ws/18132577/json/"
//fetch(url) 
//.then(resposta => resposta.json())
//.then(dados => console.log(dados))
//.catch(erro => console.log(erro.mensagem))
/*
async function buscarCEP() {
     try{
        const resposta = await fetch(url)
        const dados = await resposta.json()
        console.log("Exercicio1 -"`
            Cep: ${dados.cep}
            Rua: ${dados.logradouro}
            Cidade: ${dados.localidade}
            Estado: ${dados.estado}`)
    }catch(erro){
       console.log(erro.message)
    }
}
buscarCEP()*/

/*fetch().then().then().catch()
API: "https://viacep.com.br/ws/88132857/json/"
1.1. Faça uma requisição com fetch e mostre o objeto completo do CEP no
console
1.2. Busque um CEP e exiba somente o logradouro na tela
1.3. Busque dois CEPs em sequência usando then e mostre os dois resultados
junto*/

// EXERCICIO 1
/*
fetch(url) 
.then(resposta => resposta.json())
.then(dados => console.log("Exercicio1 -",dados))
.catch(erro => console.log(erro.mensagem))
*/
//  EXERCICIO 2
/*
async function buscarCEP() {
     try{
        const resposta = await fetch(url)
        const dados = await resposta.json()
        console.log("Exercicio2 -",`
          
            Rua: ${dados.logradouro}
          `)
    }catch(erro){
       console.log(erro.message)
    }
}
    
buscarCEP()*/
// EXERCICIO 3
/*fetch(url)
.then(respsota => respsota.json())
.then(primeiraBusca =>{
    return fetch(link)
    .then(respsota2 => respsota2.json())
    .then(segundaBusca =>{
        console.log("Exercicio3 -",primeiraBusca, segundaBusca)
    })
})

*/

//  Exercicio 4
fetch(url4)
.then(resposta => {
    if(!resposta.ok){
        throw new Erro("Erro de rede")
    }
    return resposta.json()
})
.then(dados => {
    if(dados.erro){
        throw new erro("Os não carregam")
    }
    console.log (dados)
} )
.catch( erro => console.log("Exercicio4 - Ocorreu um erro :", erro.message))

async function exercicio5(){
  const resposta = await fetch("https://viacep.com.br/ws/88132857/json/")
  const dados = await resposta.json()
  console.log("Exercicio 5 - ", dados)

  const div = document.getElementById("exercicio5")
  const ul = document.getElementById("ul1")
  const cep = document.getElementById("cep")
  const rua = document.getElementById("rua")
  const bairro = document.getElementById("bairro")
  const cidade = document.getElementById("cidade")
  const estado = document.getElementById("estado")

  cep.textContent = dados.cep
  rua.textContent = dados.logradouro
  bairro.textContent = dados.bairro
  cidade.textContent = dados.localidade
  estado.textContent = dados.estado

  ul.append(cep, rua, bairro, cidade, estado)
  div.append(ul)
}

exercicio5()


