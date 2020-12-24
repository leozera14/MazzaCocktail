# MazzaCocktail

# Apresentação da Aplicação

Aplicação feita através da solicitação de um teste consumindo a API do [TheCockTailDB](https://www.thecocktaildb.com/). Foi implementado na aplicação alguns métodos de
busca que não há no próprio site além da renderização através das Categorias dos Drinks.

## Instalação

Após clonar o projeto em sua máquina basta rodar o comando `npm install` nas pastas `backend` e `frontend` para baixar os `node_modules`. 

### Uso

Após o passo anterior, basta rodar o comando `npm start` para rodar e abrir a aplicação, onde a mesma tem como padrão 
o endereço [http://localhost:3000](http://localhost:3000).

A aplicação roda baseada na busca na API já informada e também com a porta `3333` do NodeJS em modo Local. Com isso, na tela inicial, já é renderizado por padrão os Drinks
da Categoria `Ordinary Drink` tendo a opção de mudar a Categoria ou mesmo fazer uma Busca por algo em específico, para isso, basta digitar no campo de busca o que deseja e
escolher o tipo de busca, seja por Nome, Ingredient, Primeira Letra ou até mesmo um drink aleatorio não tendo a necessidade de digitar nenhuma informação.

Ao clicar em qualquer drink, você será redirecionado para a tela de `Detalhes`, tendo todos as informações do drink em especifico. Para voltar a tela inicial basta
clicar no Logo da Header.

# Media Query

A aplicação foi desenvolvida se adaptando ao tamanho de tela, sendo possivel ser utilizada por dispositivos mobiles.
