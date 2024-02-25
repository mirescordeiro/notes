---
slug: /lbd/mer
title: O que é MER?
sidebar_position: 1
tags:
  - lbd
  - mer
---

# Modelo entidade relacionamento

Método para mapear objetos do mundo real através de entidades com seus atributos e relacionamentos.
Um modelo de auto-nível para representar a dinâmica de um domínio.

## Entidade - (Retângulos)

Abstração de um objeto do mundo real que normalmente existe de forma independente. Cada entidade possui propriedades chamadas de **atributos**.

#### _Forte_

Uma entidade forte, ou independente, não precisa de outra entidade para existir.
É representada por um **retângulo** e possui um identificador **chave**, que pode ser composto de um ou mais atributos: **chave – sublinhado \_\_\_**

#### _Fraca_

Uma entidade fraca, ou dependente, precisa de outra entidade para garantir a sua existência.
A entidade fraca depende de uma entidade identificadora (forte, proprietária) e é representada por um **retângulo duplo**. Normalmente possui uma **chave parcial**, que é o conjunto de atributos que identificam a entidade fraca com a entidade identificadora(forte): **chave parcial – pontilhado ....**

### Atributo

#### _Simples - Univalorado_

Possue um **único valor** que não pode ser dividido em partes menores, por exemplo a altura de uma pessoa: **único – um círculo**

#### _Composto_

Atributo **dividido em subpartes** que representam atributos básicos com significados diferentes **endereço(estado, cidade, CEP)**: **composto – círculo principal e ligação com outros círculos menores**

#### _Multivalorado_

Possue **vários valores**, por exemplo, formação para uma pessoa: **multi – dois círculos**

#### _Derivado_

Atributo obtido após algum **processamento**, por exemplo, idade **idade = Data_Atual - Data_Nascimento**: **derivado – círculo pontilhado**

#### _Opcional (Nulo)_

Quando um valor não é aplicável a um atributo ou quando não conhecemos o valor de um atributo, **pode possuir** um valor: **nulo – (NULL)**

#### _Obrigatório (Não Nulo)_

A instância de uma entidade ou relacionamento **deve possuir** um valor: **não nulo – (NOT NULL)**

> Domínio: conjunto de valores permitidos para um atributo: Sexo {F,M}

## Relacionamento - (Losangos+Linhas)

Associação entre uma ou mais entidades que constumam ser representadas por verbos em **losangos**.

> Relacionamentos também podem possuir atributos

#### _Independente_

Maioria das relações, quando não há influência por outro relacionamento: **independente – linha simples**

#### _Mutuamente Exclusivos_

Estabelecem associações onde, se um relacionamento ocorre, os outros não deverão ocorrer.
Devem seguir relações independentes e excludentes: **exclusivo – linha vertical**

#### _Dependente - Contingente_

Estabelecem associações simultâneas entre relacionamentos, seguem relações concorrentemente: **dependente – linhas verticais duplas**

### Restrições

#### _Cardinalidade_

Quantidade de instâncias de relacionamentos em que uma entidade pode participar:

- **1:1**: entidade x se relaciona com apenas **uma** instância da entidade y.
- **1:N**: entidade x se relaciona com **uma ou mais** instâncias da entidade y.
- **N:N**: instâncias da entidade x se relacionam com **uma ou mais** instâncias da entidade y.

#### _Participação_

Especifica se a existência de cada instância de uma entidade depende ou não das outras entidades participantes no relacionamento.

##### Total - Dependência existencial

Todas as instâncias de uma entidade estão relacionadas com instâncias das outras entidades participantes no relacionamento: **total – linha dupla**

##### Parcial

Quando não se espera que todas as instâncias de uma entidade participem no relacionamento: **parcial – linha simples**

## Referências

http://professor.norton.net.br/index.php/2023/02/14/lbd-introducao-e-conceitos-2/

https://www.ime.usp.br/~jef/bd02.pdf
