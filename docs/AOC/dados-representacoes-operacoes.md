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
   - O menor dado, ou informação existente, em um computador é um **bit** (**_b_**_inary_ _digi_**_t_** - dígito binário).
   Um bit pode ter **dois estados possíveis**: 0 e 1 (*false* e **true** OU *desligado* e **ligado**).
 - **Byte - B**
   - O agrupamento de **8 bits** forma **1 byte**, que também pode ser chamado de ***octeto***.
   Bytes são mais utilizados na representação de dados, como os de texto, utilizando [ASCII](https://www.ime.usp.br/~pf/algoritmos/apend/ascii.html) ou [Unicode](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html).

## Representações

Para representação de dados utilizamos diferentes sistemas de numeração, como o decimal por exemplo.
Dada a natureza binária dos bits, processamentos de máquina utilizam o **sistema binário** em suas operações. 

 - **Sistema binário - ( ) <sub>2</sub>**
   - O sistema binário, ou de **base 2**, representa todos os números com dois números: 0 e 1.
   Para representar números maiores que 1 agrupamos dígitos binários: 10, 11, 101 etc.
 - **Sistema hexadecimal - ( ) <sub>16 / HEX</sub>**
   - O sistema hexadecimal, ou de **base 16**, representa todos os números com símbolos 0-9 e A-F.
   Cada dígito hexadecimal consegue representar 4 bits.


### Notação binária
Sequências de bits podem ser vistas como um número natural em notação binária: *2<sup>k</sup> + 2<sup>k-1</sup> +...*
> **1101** - 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>0</sup>   —>  **13**

> **1111** - 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>1</sup> + 2<sup>0</sup>  —>  **15**

### Complemento de dois (notação binária com sinal)
O primeiro bit à esquerda (_MSB_ - _most significant bit_) informa o sinal do número binário: 0 = positivo e 1 = negativo

 - **Positivo**
   - (bit 0) + 001 = 0001 = +1 
 - **Negativo**
   - Calculamos seu **complemento de um**, invertendo suas posições: (bit 1) + 110 = 1110 = -1

Para obtermos o **complemento de dois** de um número pegamos sua versão negativa e somamos 1:
> **c2** = c1 + 1

 - **-1** = 1110 + 0001 = 1111

## Operações

### Soma binária
Com números binários temos somente quatro situações:

 - 0 + 0 = **0**
 - 1 + 0 = **1**
 - 1 + 1 = **10** = 0 e o 1 sobe para próxima soma
 - 1 + 1 + 1 = **11** = 1 e o 1 sobe para próxima soma

Logo: 1001 + 1111 = 11000

### Subtração binária
Com números binários temos somente quatro situações:

 - 0 - 0 = **0**
 - 1 - 0 = **1**
 - 1 - 1 = **0**
 - 1 - 1 —> pega emprestado e fica 10 - 1 = **1** e o 1 emprestado desce para próxima subtração

Logo: 11011 - 01101 = 1110

### Complemento negativo

> A - B = A + (-B) ou seja A + c1(B)

Para ter o número negativo de B precisamos calcular seu **complemento de um**.

Para soma igualamos o número de casas, e caso sobre 1 no final da soma, adicionamos ao número obtido.

Logo: 011101 - 01010 = 011101 - **0**01010 = 011101 + **1**10101 = **1**010010 = 010010 + **1** = 010011



## Referências
[https://embarcados.com.br/operacoes-com-sistemas-binarios/](https://embarcados.com.br/operacoes-com-sistemas-binarios/)

[https://embarcados.com.br/complemento-de-2/](https://embarcados.com.br/complemento-de-2/)

[https://www.ime.usp.br/~pf/algoritmos/aulas/bytes.html#binarynotation](https://www.ime.usp.br/~pf/algoritmos/aulas/bytes.html#binarynotation)

[https://docente.ifsc.edu.br/vilson.junior/ac/02_Dados_Numeracao.pdf](https://docente.ifsc.edu.br/vilson.junior/ac/02_Dados_Numeracao.pdf)

