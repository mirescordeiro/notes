---
slug: /aoc/dados-representacoes-operacoes
title: Dados, representações e operações
sidebar_position: 0
tags:
  - aoc
  - hexadecimal
  - binário
  - complemento
  - soma binária
  - subtração binária
---


## Dados

 - **Bit - b**
   - O menor dado, ou informação existente, em um computador é um **bit** (***b****inary* *digi**t*** - dígito binário).
Um bit pode ter **dois estados possíveis**: 0 e 1 (*false* e **true** OU *desligado* e **ligado**).
 - **Byte - B**
   - O agrupamento de **8 bits** forma **1 byte**, que também pode ser chamado de ***octeto***.
Bytes são mais utilizados na representação de dados, como os de texto, utilizando [ASCII](https://www.ime.usp.br/~pf/algoritmos/apend/ascii.html) ou [Unicode](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html).

## Representações

Para representação de dados utilizamos diferentes sistemas de numeração, como o decimal por exemplo.
Dada a natureza binária dos bits, processamentos de máquina utilizam o **sistema binário** em suas operações. 

 - **Sistema binário - ( ) ^2^**
   - O sistema binário, ou de **base 2**, representa todos os números com dois números: 0 e 1. 
Para representar números maiores que 1 agrupamos dígitos binários: 10, 11, 101 etc.
 - **Sistema hexadecimal - ( ) ^16 / HEX^**
   - O sistema hexadecimal, ou de **base 16**, representa todos os números com símbolos 0-9 e A-F. 
Cada dígito hexadecimal consegue representar 4 bits.


### Notação binária
Sequências de bits podem ser vistas como um número natural em notação binária: *2^k^ + 2^k-1^ +...*
> **1101** - 2^3^ + 2^2^ + 2^0^   —>  **13**
> **1111** - 2^3^ + 2^2^ + 2^1^ + 2^0^  —>  **15**

### Complemento de dois (notação binária com sinal)

