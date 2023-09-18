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

### Arquitetura de Von Neumann

Conceito de "programa armazenado" proposto por [Von Neumann](https://www.ime.usp.br/~hitoshi/introducao/01-ComoFuncionaUmComputador.pdf):

> Dispositivos de **Entrada** **—>** **CPU**: ULA + UC + Registradores **—>** endereços —> **MEMÓRIA**: programa + dados

> Dispositivos de **Saída** **<—** **CPU**: ULA + UC + Registradores **<—** instruções/dados <— **MEMÓRIA**: programa + dados

---

Componentes podem ser agrupados nas seguintes **Unidades Funcionais**:

### Dispositivos de Entrada e Saída ( E/S )

- **Entrada**: dados inseridos em um dispositivo computacional. Ex: teclado.
- **Saída**: disponibilização de resultados obtidos. Ex: tela.

### CPU: _Central Processing Unit_ ( Processador )

Controla e executa intruções presentes na memória.

- **Registradores**

  > Dispositivos de armazenamento com alta velocidade para dados temporários

  Cada registrador possui uma função própria:

  - **SP - _stack pointer_**: endereço de memória do topo da pilha
  - **PWS - _program status word_**: bits de controle sobre a execução de instruções, recebem _flags_

---

- **UC - Unidade de Controle**

  > Governa e controla todas as operações dos componentes do computador

  - **leitura**: dados ou instruções da memória, inserção dos dispositivos de entrada
  - **decodificação**: instruções recebidas
  - **inserção**: insere entradas na ULA de acordo com as instruções
  - **envio**: encaminha resultados à memória ou aos dispositivos de saída

  Registradores da UC:

  - **PC - _Program Count_**: aponta a próxima instrução a ser executada
  - **IR - _Instruction Register_**: armazena a instrução em execução
  - **MAR - _Memory Address Register_**: armazena um valor que representa um endereço da memória

---

- **ULA - Unidade Lógica e Aritmética**

  > Realização de operações lógicas e aritméticas

  Operações realizadas pelos **Circuitos Operadores** (circuitos eletrônicos) que emitem **Flags** (status da operação):

  - **aritméticas**: adições, subtrações etc.
  - **lógicas**: AND, OR etc.

  Registradores da ULA:

  - **ACC - _Accumulator_**: registro onde são depositados os resultados produzidos pelo circuitos operadores
  - **MBR - _Memory Buffer Register_**: registrador utilizado para armazenar temporariamente os dados que foram lidos da memória ou dados que serão escritos na memória

### Memória (principal ou real)

> Armazena dados e as instruções

Cada célula de memória tem seu **endereço numérico próprio** e pode armazenar uma quantidade fixa de informações.

- **Tipos de informação**

  - **Instrução**: diz ao computador o que deve ser feito
  - **Dados**: a serem processados pelo processador usando as instruções

- **Tipos de operações**

  > Controladas/iniciadas pela UC

  - **Escrita/Gravar**: transferência de informação da CPU —> Memória
  - **Leitura**: transferência de bits da memória para CPU

- **Tipos de memória**

  - **Cache**: memória volátil de alta velocidade, porém com pequena capacidade de armazenamento, rápido acesso
  - **Estática**: mais cara e mais rápida, não precisa de refresh (RAM - _Random Access Memory_)
  - **Dinâmica**: mais barata e ocupa menos espaço, usa refresh e usa capacitor para armazenamento (Disco rígido)

---

- **Princípio de Localidade**

  Mesmo que um programa use muita memória durante intervalos de curta duração ele **permanece em um local nos blocos da memória**

  - **Temporal**: executar um dado ou instrução recém usado, que tende a ser usado novamente num curto espaço de tempo
  - **Espacial**: se um dado ou instrução é recém acessado, é provável que os campos vizinhos também sejam

---

- **Formas de Mapeamento**

  Os dados são copiados na cache em pequenos grupos denominados **linhas**, aproveitando da localidade temporal, facilitando o controle e melhorando as transferências

  - **Associativo**: cada linha de cache se associa uma **tag** que indica o **endereço da linha** na memória
  - **Busca**: simultânea por linha e coluna
  - **Processador**: fica mais rápido
  - **Direto**: uma certa linha pode ser copiada num certo espaço na cache
    - **Vantagem**: hardware de procura barato, pois **verifica apenas uma tag**
    - **Desvantagem**: pouca flexibilidade, uma vez que cada linha deve ser colocada em um local específico
    - **Conjunto Associativo**: um meio termo entre os dois anteriores, cada linha de dados pode ser copiada num certo conjunto de linhas de cache
      - TAG | nº do CONJ | Endereço da linha
        - **7654 | 32 | 10** - Em binário
        - **8421 | 84 | 21**

---

#### Barramentos

Meio físico de comunicação entre as unidades funcionais, transportam informações através de condutores e reagem aos sinais de interrupções

- **Barramento de controle**: tipo da operação a efetuar (leitura ou escrita)
- **Barramento de dados**: dados de uma instrução
- **Barramento de endereços**: identificação de um periférico

---

## Referências

[https://www.ime.usp.br/~kellyrb/mac2166_2015/arquivos/mac2166_aula1.pdf](https://www.ime.usp.br/~kellyrb/mac2166_2015/arquivos/mac2166_aula1.pdf)

[https://docente.ifsc.edu.br/vilson.junior/ac/03_Sistema_Computacao.pdf](https://docente.ifsc.edu.br/vilson.junior/ac/03_Sistema_Computacao.pdf)

[https://www.dca.fee.unicamp.br/~tavares/courses/2015s2/ea773-3.pdf](https://www.dca.fee.unicamp.br/~tavares/courses/2015s2/ea773-3.pdf)

[https://www.ic.unicamp.br/~edson/disciplinas/mc404/material/programando_o_IAS.pdf](https://www.ic.unicamp.br/~edson/disciplinas/mc404/material/programando_o_IAS.pdf)

[https://www.facom.ufu.br/~gustavo/OC1/Apresentacoes/CPU.pdf](https://www.facom.ufu.br/~gustavo/OC1/Apresentacoes/CPU.pdf)
