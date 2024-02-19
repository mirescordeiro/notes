---
slug: /poo/intro
title: Introdução a POO
sidebar_position: 1
tags:
  - poo
  - intro
---

### O que é a Programação orientada a objetos?

Paradigma de desenvolvimento de software que tem como príncipio a representação de elementos através de objetos ou classes. Um objeto pode ser composto por atributos e métodos, e modela sistemas com base na observação do mundo real: entidades e domínios.

#### Vantagens

Por possibilitar representações claras de elementos e promover independência entre partes do sistema este paradigma é conhecido por possuir algumas vantagens.

- Reutilização de código com elevação de abstração;
  - diminuição do tempo de desenvolvimento, representações facilmente comunicáveis.
- Durabilidade de sistemas adequados a arquiteturas de cliente/servidor;
  - legibilidade do código, promovendo sua fácil manutenção.

#### Desvantagens

- Maior uso de memória;
- Maior esforço na modelagem do sistema;

### Objetos

Como exemplificado anteriormente objetos são compostos por atributos e métodos:

- Atributos: variáveis que pertencem a um objeto, os dados armazenados em um objeto;
- Métodos: tarefas de um objeto, operações com seus atributos ou interações com outros objetos;

### Fundamentos

A Orientação a Objetos é fundamentada em quatro pilares:

#### Abstração

Ao abstrairmos conceitos do mundo real é necessário primeiramente identificar o que estamos criando, entender suas características e quais ações são possíveis de se realizar:

- Identidade: cada objeto deve possuir uma identidade única, nome (procurar mais sobre _namespaces_);
- Propriedades: elementos que definem um objeto, atributos;
- Métodos: ações que um objeto pode executar, eventos;

#### Encapsulamento

Elementos que visam evitar o acesso direto a propriedades do objeto.
Promovendo uma camada de segurança a aplicação:

- Setter: atribui valores;
- Getter: retorna valores;

#### Herança

Quando um objeto herda atributos e métodos de outro objeto de forma direta ou indireta, sem modificar os objetos originais e adicionando outras características:

> Pessoa > Artista

- Pessoa: nome, idade;
- Artista: nome, idade, nome artístico, técnica, criar();

#### Poliformismo

Alteração do funcionamento de um método herdado de um objeto mãe conforme a necessidade:

> Artista > Desenhista

- Desenhista: criar(desenho);

## Referências

http://professor.norton.net.br/index.php/2023/02/09/poo-introducao/

https://www.youtube.com/watch?v=dXZRgW-X2ls&ab_channel=AttekitaDev

https://www.youtube.com/watch?v=8VcZkAYygoo&ab_channel=AttekitaDev
