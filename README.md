### 🎑 geographical data

Projeto desenvolvido com fins de aprimoramento em padrões de projeto e arquiteturas. 😄
Foco principal em desenvolver uma aplicação simples integrando 1 micro-serviço, de forma que consiga mostrar um bom padrão de projeto é boas praticas.
### 🏛 design patterns
using some of the principles of solids and also clean architecture

### 📁 folder structure
Separating the reponabilities of the **intities**, **use cases** and framework with **adapters**. 

![image](https://user-images.githubusercontent.com/69175890/176015063-fe494e33-054a-4e4c-b134-acdbbf64c1db.png)


# DESAFIO_MENSAGERIA_NESTJS
 🏡 Desafio proposto : buscar informações sobre endereço de um pedido usando mensageria. salvar esse pedido, e na sequência fazer uma série de validações e enriquecimentos dos dados de forma assíncrona, para enfim distribuir esse pedido para os(as) nossos(as) profissionais.
 
# 🎪 Contexto
Trabalhando com micro-serviços e mensageria, um dos nossos principais fluxos é quando um usuário faz o pedido de algum serviço (seja por meio do site ou aplicativo mobile) e a gente precisa salvar esse pedido, e na sequência fazer uma série de validações e enriquecimentos dos dados de forma assíncrona, para enfim distribuir esse pedido para os(as) nossos(as) profissionais.

# 🎊 Problema
Após uma API backend receber uma requisição de novo pedido, uma das coisas que fazemos assíncronamente, é buscar dados geográficos (latitude e longitude) do endereço deste pedido. Para realizar essa ação postamos o endereço e o identificador do pedido em uma fila, onde um outro sistema (responsável apenas por essa tarefa) consome essa fila, consulta a API do Google Maps (ou outra similar) para pegar os dados geográficos (lat/lng) e adiciona estas informações ao pedido.
Contexto
Um dos  principais fluxos é quando um usuário faz o pedido de algum serviço (seja por meio do site ou aplicativo mobile) e a gente precisa salvar esse pedido, e na sequência fazer uma série de validações e enriquecimentos dos dados de forma assíncrona, para enfim distribuir esse pedido para os(as) nossos(as) profissionais.

# 📊 Diagrama
![image](https://user-images.githubusercontent.com/69175890/175838630-d7da05b9-dbe9-49a0-b849-ca937afa0e25.png)


# 🎲 Dados do Pedido
Segue abaixo um exemplo de paylod dos dados do pedido:
```json
{
  "user_info": {
    "phone": "(11) 98765-4321",
    "name": "João da Silva",
    "email": "joao_silva@exemplo.com"
  },
  "address_attributes": {
    "city": "São Paulo",
    "neighborhood": "Jardim Paulista",
    "street": "Avenida São Gabriel",
    "uf": "SP",
    "zip_code": "01435-001"
  },
  "request_info": {
    "question1": "answer1",
    "question2": "answer2",
    "question3": "answer3"
  }
}
```
