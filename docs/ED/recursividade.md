---
slug: /ed/recursividade
title: Recursividade
sidebar_position: 1
tags:
  - ed
  - recursividade
---

### O que é Recursão?

Quando uma função chama a si mesma ela é uma função recursiva.

Essa técnica pode ser aplicada sempre que for possível abstrair um problema a uma condição de parada, conhecida como caso base ou solução trivial, caso não a função não irá parar nunca (loop infinito).

Além da condição de parada também é necessário sintetizar o cenário primário para chamada da função, ou seja, o menor caso possível que promova a iteração da função.

#### Receita

1. Qual o caso base?

2. Qual é a ação mínima em cada iteração?

### Quando usar?

1. Quando o uso de memória não for uma preocupação (ou puder ser otimizado)

   A recursividade exige mais espaço de memória, pois cada chamada de função ocupa um espaço na pillha de execução, que permanece em aguardo até a resolução do caso base. Mas ainda assim é possível otimizar as chamadas através de recursos como _**memoization**_, porém é o caso de se pensar se é válido o esforço.

   Já um laço cria somente uma fila que tem seus valores atualizados a cada iteração até sua finalização.

2. Percorrer estruturas de dados: nós/pontos de decisão

   Ao contrário da linearidade do laço, que segue somente uma condição até sua finalização, na recursão é possível adicionar condições para chamada direta ou indireta da funções.

### Referências

http://professor.norton.net.br/index.php/2022/08/11/ed-intoducao/

https://www.youtube.com/watch?v=IJDJ0kBx2LM&ab_channel=freeCodeCamp.org

https://hyperskill.org/learn/step/13601

https://www.inf.pucrs.br/~oliveira/projalg/recorr.pdf
