---
slug: /es/ciclo-de-vida
title: Ciclo de vida de sistemas de software
sidebar_position: 1
tags:
  - lbd
  - ciclo
  - softaware
---

Regras de negócio podem ser nebulosas pois sua natureza é mutante. Dado que definições de produto evoluem em escalas muito rápidas, métodos de organização de entrega de software foram concebidos buscando acompanhar essa velocidade nas mudanças de domínio: Scrum, Kanban, Crystal, TDD etc.

Além das metodologias é importante entender os ciclos de vida de um software. Todo software nasce, é implementado, e uma vez entregue se dá a manutenção do que foi lançado.

## Ciclos

1. **Concepção do software**: análise do que o negócio precisa, viabilidade, coleta de requisitos, quais tecnologias etc.

2. **Maturidade**: uso do software e manutenção;

3. **Descontinuidade**: morte de um software e sua substituição ou obsolescência;

### Etapas

Rezende propõe em seu livro as seguintes etapas de ciclo de vida:

1. Estudo de Viabilidade;​

2. Análise de Sistemas; ​

3. Projeto; ​

4. Implementação; ​

5. Geração do teste de aceite;​

6. Garantia da Qualidade; ​

7. Descrição de Procedimentos; ​

8. Conversão de Base de Dados; ​

9. Instalação;​

<hr/>

#### 1. Estudo de Viabilidade

Toda análise de perspectiva de projeto considera o ROI – Retorno sobre investimento, mas também os conceitos de projetos:

1. **Custo**: há orçamento possível?

2. **Prazo**: estimativa de produção, calendário de entregas etc.

3. **Escopo**: tamanho do projeto, se é suficiente ou pequeno etc.

4. **Concorrência**: é melhor desenvolver ou há uma ferramenta que se possa adquirir?

5. **Fronteiras**: quais as restrições? O que conseguirei fazer com esse software, o que será mantido manual, o que será automatizado, há custo-benefício? etc.

6. **Equipe**: levantamento de expertise, temos as pessoas necessárias para formar um time?

<hr/>

#### 2. Análise de sistemas

> Projeto de Análise

Documentação e abstração de auto-nível dos domínios do projeto através de diagramas:

1. **DFD** - Diagrama de Fluxo de Dados

2. Diagramas **UML** – 16 tipos diferentes

3. **Dicionário de Dados** – Explicar como será o seu banco de dados

<hr/>

#### 3. Projeto

> Projeto Lógico

##### _Análise - Refinamento_

- **Equipe**: formação de time, contratação, formação etc.

- **Arquitetura**: qual paradigma, POO ou funcional? Utilização de padrões de projeto, interfaces etc.

- **Tecnologias**: qual linguagem de software usar, utilizar frameworks?

##### _Lógico - Coesão entre módulos_

- **Divisão do software**: quais serão as partes e como elas serão integradas?

- **Nível de comunicação**: avaliação do acoplamento entre partes.

- **Prototipagem**: criação de fluxogramas e entendimento da jornada.

- **Banco de dados**: concepção da modelagem do banco de dados caso necessário.

<hr/>

#### 4. Implementação

> Projeto Físico

- **Codificação**: implementar o projeto lógico/arquitetural seguindo os parâmetros estabelecidos na fase de refinamento.

- **Casos de teste**: o que é espero de uma entrada e de uma saída de um fluxo, BDD. Se possível realizados de maneira automatizada, porém é necessário certo cuidado pois tendem a serem enviesados por serem criados por quem implementa – 85% caixa branca.

  - **Incremental**: testagem de cada parte/módulo da aplicação, unitários;

  - **Integração**: testagem da comunicação entre as partes, integração;

<hr/>

#### 5. Geração do teste de aceite

> Projeto de Implantação 1.1

- **Plano de testes**: organizar como o sistema será testado como um todo.

  - **Testes de aceite**: testes funcionais, ou seja, das funcionalidades – 15% caixa preta (sem conhecimento da codificação)

  - **Extrapolar o sistema**: criar cenários de exceção, forçando comportamentos da aplicação (edge cases)

    - **Testes de partição de equivalência**: usar valores mínimos e máximos;

  - **Performance**: sobrecarga do sistema para mapear possíveis falhas no sistema.

- **Ambientes de testes**: configuração específica de infra-estrutura para testagem do plano de testes.

  - **Testes/Desenvolvimento**: ambiente de testes de aceite, performance e edge cases;

  - **Homologação**: ambiente de testes em que o cliente utiliza as funcionalidades para feedback;

  - **Produção**: versionamento final de entrega.

<hr/>

#### 6. Garantia de qualidade

> Feito no Projeto de Análise

Satisfazer o cliente e a pessoa usuária, no sentido de garantir as condições pré-estabelecidas para entrega, o plano de testes, e a garantia das expectativas e necessidades do cliente.

Para tanto é necessário aplicar a mentalidade de qualidade desde a etapa de análise.

<hr/>

#### 7. Descrição de Procedimentos

> Projeto de Implantação 1.2

- **Procedimentos**: controle de versionamentos, descrição formal de melhorias/alterações, formaliza funcionalidades.

- **DevOps**: implementa a cultura de automatização de implementação de código.

<hr/>

#### 8. Conversão de Base de Dados

> Projeto de Implantação 1.3

- **Legado**: conversão/adequação de dados históricos da empresa, verificação do suporte ao novo sistema.

<hr/>

#### 9. Instalação

> Projeto de Implantação 1.4

- **Adoção progressiva**: disponibilização programada e com acompanhamento da aceitação pelas pessoas usuárias.

- **Treinamento**: oferecer treinamento, criação de manuais quando aplicável, campanhas de endomarketing para divulgar implementações.

### Fluxo das etapas

#### Fluxo linear – Cascata

Termina uma etapa e vai para outra etapa, _ad infinitum_... aumenta o risco da entrega não ser necessariamente o que era necessário, pois não há feedback, somente uma entrega final.

#### Fluxo iterativo

Faço a análise, mas posso voltar e reconsiderar algum ponto, iterando conforme necessário.

#### Fluxo incremental/evolucionário - Métodos Ágil

Cada etapa entrega uma parte do projeto. A cada etapa ocorre feedback da pessoa usuária e melhorias ou mudanças de curso podem ser abraçadas, mitigando riscos.

## Referências

REZENDE, DENIS ALCIDES, Engenharia de Software e Sistemas de Informação,Edição 3, Editora Brasport, ano 2005.
