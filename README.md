# Refactoring Book Project

Este repositório foi criado como suporte para o estudo do livro Refacting de Marting Fowler

No livro é apresentado um programa encapsulado numa única função chamada `statment()` que renderiza na forma de texto a conta final das apresentações de uma companhia teatral para um determinado cliente. A companhia tem uma quantidade de peças com título e tipo (comédia, tragédia, etc..).
Além da conta pelas peças apresentadas, a companhia oferece créditos para futuros descontos com base nas audiências das apresentações e nos tipos de peças.

O objetivo inicial da refatoração desse programa é possibilitar uma boa estruturação do código para facilitar o seguinte incremento de funcionalidade:

- A exibição do demonstrativo em HTML
- Possibilitar a inclusão de outros tipos de peças com suas próprias formas de cobrança e geração de créditos.

O objetivo desse repositório é demonstrar, através do histórico do git, o paço-a-paço adotado no processo de refatoração de um programa. Por isso a granularidade dos commits no repositório é propositadamente pequena.

Os commits que representam um procedimento documento no livro começam com o texto `Procedure: <nome do procedimento>`. Cada pequeno procedimento implementado é testado através da suite de teste criada para a primeira versão do programa, afim de garantir que o rastreamento de bugs seja rápido e atomico.
