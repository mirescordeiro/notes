---
slug: /aoc/cpu
title: Como funciona um computador
sidebar_position: 1
tags:
  - aoc
  - cpu
  - memória
  - registradores
  - ULA
  - UC
---


## Arquitetura de Von Neumann
Conceito de "programa armazenado" proposto por [Von Neumann](https://www.ime.usp.br/~hitoshi/introducao/01-ComoFuncionaUmComputador.pdf):

> Dispositivos de **Entrada** **—>** **CPU**: ULA + UC + Registradores **—>** endereços —> **MEMÓRIA**: programa + dados

> Dispositivos de **Saída** **<—** **CPU**: ULA + UC + Registradores **<—** instruções/dados <— **MEMÓRIA**: programa + dados

### Dispositivos de Entrada e Saída ( E/S )
 - **Entrada**: dados inseridos em um dispositivo computacional. Ex: teclado.
 - **Saída**: disponibilização de resultados obtidos. Ex: tela.

### CPU: _Central Processing Unit_ ( Processador )
 - **ULA - Unidade Lógica e Aritmética** 
   -  **operações aritméticas**: adições, subtrações etc.
   -  **comparações**: *igual* ou *maior que*

 - **UC - Unidade de Controle** 
   -  **leitura**: dados ou instruções da memória, inserção dos dispositivos de entrada
   -  **decodificação**: instruções recebidas
   -  **inserção**: insere entradas na ULA de acordo com as instruções
   -  **envio**: encaminha resultados à memória ou aos dispositivos de saída

 - **Registradores** 
   - Coleção de circuitos que armazena **bits**, sua quantidade classifica um processador:
     - 32-bits
     - 64-bits
   -  Cada registrador possui uma função própria:
     -  **PC - _program count_**: aponta a próxima instrução a ser executada
     -  **IR - _instruction register_**: armazena a instrução em execução
     -  Armazenamento de resultados intermediários

### Memória
 - **Células** 
   - Cada célula tem seu **endereço numérico** próprio e pode armazenar uma **quantidade fixa de informações**.
   - **Tipos de informação**
     - **Instrução**: diz ao computador o que deve ser feito
     - **Dados**: a serem processados pelo processador usando as instruções
  - **Tipos de operações**
     - **Escrita/Gravar**: transferência de informação da CPU —> Memória
     - **Leitura**: transferência de bits da memória para CPU
  - **Tipos de memória**
     - **Estática**: mais cara e mais rápida, não precisa de refresh
     - **Dinâmica**: mais barata e ocupa menos espaço, usa refresh e usa capacitor para armazenamento

 - **Cache** 
   - Contém cópias dos dados mais usados de forma que o acesso a estes dados é feito de forma rápida.
   - **Princípio de Localidade**
     - Mesmo que um programa use muita memória durante intervalos de curta duração ele **permanece em um local nos blocos da memória**
       - **Temporal**: executar um dado ou instrução recém usado, que tende a ser usado novamente num curto espaço de tempo
       - **Espacial**: se um dado ou instrução recém acessado, é provável que os campos vizinhos também sejam
  - **Formas de Mapeamento**
     - Os dados são copiados na cache em pequenos grupos denominados **linhas**, aproveitando da localidade temporal, facilitando o  controle e melhorando as transferências
       - **Associativo**: cada linha de cache se associa uma **tag** que indica o **endereço da linha** na memória
         - **Busca**: simultânea por linha e coluna
         - **Processador**: fica mais rápido
       - **Direto**: uma certa linha pode ser copiada num certo espaço na cache
         - **Vantagem**: hardware de procura barato, pois **verifica apenas uma tag**
         - **Desvantagem**: pouca flexibilidade, uma vez que cada linha deve ser colocada em um local específico
       - **Conjunto Associativo**: um meio termo entre os dois anteriores, cada linha de dados pode ser copiada num certo conjunto de linhas de cache
         - TAG | nº do CONJ | Endereço da linha
         - **7654 | 32 | 10**
         - Em binário
         - **8421 | 84 | 21**





## Referências
[https://www.ime.usp.br/~kellyrb/mac2166_2015/arquivos/mac2166_aula1.pdf](https://www.ime.usp.br/~kellyrb/mac2166_2015/arquivos/mac2166_aula1.pdf)

[https://docente.ifsc.edu.br/vilson.junior/ac/03_Sistema_Computacao.pdf](https://docente.ifsc.edu.br/vilson.junior/ac/03_Sistema_Computacao.pdf)

