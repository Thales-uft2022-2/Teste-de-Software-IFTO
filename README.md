# Testes de Software

Repositório acadêmico da disciplina **Testes de Software**, do curso de **Tecnologia em Sistemas para Internet**, destinado a reunir conteúdos, anotações, atividades avaliativas, exercícios práticos e projetos desenvolvidos ao longo da disciplina.

## Informações da disciplina

| Informação | Descrição |
|---|---|
| Disciplina | Testes de Software |
| Curso | Tecnólogo em Sistemas para Internet |
| Professor | Marinaldo Oliveira Santos |
| Aluno | Thales Marques Rodrigues |
| Instituição | Instituto Federal do Tocantins (IFTO) |

## Apresentação

A disciplina de Testes de Software tem como propósito desenvolver conhecimentos e habilidades relacionados ao planejamento, à aplicação e à automação de testes em sistemas de software.

Durante a disciplina, são estudados conceitos fundamentais, processos de teste, elaboração e utilização de planos de teste, técnicas de teste, testes funcionais, ferramentas de automação e práticas de desenvolvimento orientado a testes (TDD).

O repositório funciona como um registro organizado da aprendizagem e das atividades realizadas durante o período letivo.

## Objetivos de aprendizagem

Ao concluir a disciplina, espera-se desenvolver a capacidade de:

- Conhecer os conceitos básicos relacionados a teste de software.
- Compreender os processos de teste de software.
- Conhecer um modelo de plano de teste de software.
- Utilizar um modelo de plano de teste de software.
- Conhecer técnicas de testes.
- Aplicar testes funcionais.
- Conhecer ferramentas para automatização de testes funcionais.
- Conhecer e utilizar ferramentas para aplicação de TDD (Test-Driven Development).

## Organização da disciplina

Os conteúdos e atividades serão organizados conforme os capítulos e materiais disponibilizados pelo professor no ambiente virtual.

| Unidade | Conteúdo / atividade |
|---|---|
| Capítulo 1 | Conteúdos, estudos e atividade avaliativa do capítulo 1 |
| Capítulo 2 | Conteúdos, estudos e atividade avaliativa do capítulo 2 |
| Capítulo 3 | Conteúdos, estudos e atividade avaliativa do capítulo 3 |
| Capítulo 4 | Conteúdos, estudos e atividade avaliativa do capítulo 4 |
| Atividades práticas | Exercícios de aplicação dos conceitos e ferramentas estudados |

> Os títulos e tópicos específicos de cada capítulo serão detalhados à medida que os materiais e atividades forem disponibilizados. Assim, o repositório permanece fiel ao conteúdo efetivamente trabalhado na disciplina.

## Método de avaliação

A avaliação está organizada em duas médias parciais.

### Média 1

Calculada a partir das duas primeiras atividades avaliativas:

**MÉDIA 1 = (NOTA 1 + NOTA 2) / 2**

- **NOTA 1:** atividade avaliativa do Capítulo 1.
- **NOTA 2:** atividade avaliativa do Capítulo 2.

### Média 2

Calculada a partir das duas últimas atividades avaliativas:

**MÉDIA 2 = (NOTA 3 + NOTA 4) / 2**

- **NOTA 3:** atividade avaliativa do Capítulo 3.
- **NOTA 4:** atividade avaliativa do Capítulo 4.

A composição da média final deve seguir os pesos e critérios informados pelo professor no ambiente da disciplina. Os pesos da Média 1 e da Média 2 não foram especificados nesta apresentação.

## Atividade prática: Automação de testes

Uma das atividades práticas consiste em automatizar um mesmo caso de teste utilizando três ferramentas:

- **Selenium:** automação de navegadores com Python e Selenium WebDriver.
- **Cypress:** automação de testes de aplicações web com JavaScript.
- **Playwright:** automação de testes web com JavaScript e Playwright Test.

### Cenário utilizado

O projeto de demonstração utiliza uma página de login desenvolvida em HTML, CSS e JavaScript.

**Credenciais válidas para o teste:**

| Campo | Valor |
|---|---|
| Usuário | `admin` |
| Senha | `123456` |

### Casos de teste

#### CT-01 — Login com credenciais válidas

1. Abrir a página de login.
2. Informar o usuário `admin`.
3. Informar a senha `123456`.
4. Clicar no botão **Entrar**.
5. Verificar a mensagem de sucesso.

**Resultado esperado:** `Login realizado com sucesso`.

#### CT-02 — Login com senha incorreta

1. Abrir a página de login.
2. Informar o usuário `admin`.
3. Informar uma senha incorreta.
4. Clicar no botão **Entrar**.
5. Verificar a mensagem de erro.

**Resultado esperado:** `Usuário ou senha inválidos`.

### Comparação das ferramentas

| Critério | Selenium | Cypress | Playwright |
|---|---|---|---|
| Linguagem usada nesta atividade | Python | JavaScript | JavaScript |
| Aplicação | Automação de navegador | Testes web | Testes web |
| Execução | Navegador ou headless | Interface ou terminal | Navegador ou headless |
| Recursos de espera | Esperas explícitas e implícitas | Esperas integradas aos comandos e assertions | Auto-waiting |
| Relatórios | Dependem da configuração | Relatórios e recursos de execução | Relatórios integrados |

A comparação final deve considerar os resultados observados durante a execução, como facilidade de configuração, clareza do código, estabilidade, recursos de depuração e tempo de execução. Não se deve afirmar que uma ferramenta foi mais rápida sem realizar medições nas mesmas condições.

## Tecnologias e ferramentas

As tecnologias abaixo são utilizadas ou poderão ser utilizadas nas atividades práticas, conforme os exercícios propostos:

- **Python:** implementação de testes automatizados com Selenium.
- **JavaScript:** desenvolvimento de testes com Cypress e Playwright.
- **HTML5 e CSS3:** estrutura e apresentação de páginas utilizadas nos testes.
- **Node.js e npm:** ambiente e gerenciamento de dependências JavaScript.
- **Selenium WebDriver:** interação automatizada com navegadores.
- **Cypress:** execução e depuração de testes de aplicações web.
- **Playwright:** automação de testes em navegadores.
- **Visual Studio Code:** ambiente de edição e organização do código.
- **Git e GitHub:** versionamento e publicação das atividades.

## Estrutura sugerida do repositório

A organização pode ser atualizada conforme os materiais e exercícios forem recebidos:

```text
Testes-de-Software/
│
├── Capitulo-1/
│   ├── materiais/
│   ├── atividades/
│   └── anotacoes/
│
├── Capitulo-2/
│   ├── materiais/
│   ├── atividades/
│   └── anotacoes/
│
├── Capitulo-3/
│   ├── materiais/
│   ├── atividades/
│   └── anotacoes/
│
├── Capitulo-4/
│   ├── materiais/
│   ├── atividades/
│   └── anotacoes/
│
├── Automacao-de-Testes/
│   ├── sistema-login/
│   ├── selenium/
│   ├── cypress/
│   └── playwright/
│
└── README.md
```

## Registro de resultados

As tabelas abaixo podem ser preenchidas após a realização das atividades.

### Acompanhamento das atividades avaliativas

| Atividade | Capítulo | Situação | Nota |
|---|---|---|---|
| Atividade avaliativa 1 | Capítulo 1 | Pendente de registro | — |
| Atividade avaliativa 2 | Capítulo 2 | Pendente de registro | — |
| Atividade avaliativa 3 | Capítulo 3 | Pendente de registro | — |
| Atividade avaliativa 4 | Capítulo 4 | Pendente de registro | — |

### Resultados dos testes automatizados

| Ferramenta | CT-01 — Login válido | CT-02 — Senha incorreta |
|---|---|---|
| Selenium | A preencher após execução | A preencher após execução |
| Cypress | A preencher após execução | A preencher após execução |
| Playwright | A preencher após execução | A preencher após execução |

## Importância dos testes de software

Os testes de software ajudam a verificar se um sistema atende aos requisitos definidos e se apresenta o comportamento esperado. Eles contribuem para identificar defeitos, reduzir riscos, aumentar a confiança nas alterações e melhorar a qualidade do produto.

A automação permite repetir verificações com mais consistência, especialmente em cenários que precisam ser executados frequentemente. Mesmo assim, a automação complementa — e não substitui — o planejamento, a análise e os testes realizados por pessoas.

## Referências

- [Selenium — Documentação oficial](https://www.selenium.dev/documentation/)
- [Cypress — Documentação oficial](https://docs.cypress.io/)
- [Playwright — Documentação oficial](https://playwright.dev/docs/intro)
- [Python — Documentação oficial](https://docs.python.org/3/)
- [Node.js — Documentação oficial](https://nodejs.org/docs/)

## Observações

- Este repositório tem finalidade acadêmica.
- Os conteúdos específicos dos capítulos devem ser adicionados de acordo com os materiais fornecidos pelo professor.
- Resultados, notas e conclusões devem ser registrados somente após a realização das respectivas atividades.
- O formulário de login da atividade de automação é didático e não representa um sistema de autenticação seguro para uso em produção.

---

**Disciplina:** Testes de Software  
**Professor:** Marinaldo Oliveira Santos  
**Curso:** Tecnólogo em Sistemas para Internet  
**Aluno:** Thales Marques Rodrigues  
**Instituição:** Instituto Federal do Tocantins (IFTO)