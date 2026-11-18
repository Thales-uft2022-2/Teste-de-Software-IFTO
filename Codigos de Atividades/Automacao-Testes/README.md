# Automação de Testes: Selenium, Cypress e Playwright

Projeto acadêmico para a disciplina Teste de Software. As três ferramentas automatizam o mesmo formulário de login e verificam dois cenários: credenciais válidas e senha incorreta.

## Estrutura
- `sistema-login/index.html`: aplicação web simples usada como objeto de teste.
- `selenium/test_login.py`: testes com Python e Selenium.
- `cypress/e2e/login.cy.js`: testes com Cypress.
- `playwright/tests/login.spec.js`: testes com Playwright.

## Pré-requisitos
- Windows 10/11
- Google Chrome atualizado
- Python 3.10 ou superior
- Node.js LTS e npm
- VS Code (opcional)

## 1. Instalar dependências
Abra o terminal na pasta raiz do projeto:

```bash
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
npm install
npx playwright install chromium
```

O Selenium 4 utiliza o Selenium Manager para localizar/obter o driver compatível do navegador. Na primeira execução pode ser necessário acesso à internet.

## 2. Iniciar a página de teste
A maneira mais simples é usar a extensão Live Server do VS Code:
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `sistema-login/index.html`.
4. Escolha **Open with Live Server**.
5. Confirme que o endereço é `http://127.0.0.1:5500/sistema-login/index.html`.

Mantenha o servidor ativo enquanto executa Cypress e Playwright.

## 3. Executar Selenium
Na raiz do projeto, com o ambiente virtual ativado:

```bash
python -m unittest discover -s selenium -p "test_*.py" -v
```

Para visualizar o Chrome, abra `selenium/test_login.py` e comente a linha `options.add_argument("--headless=new")`.

## 4. Executar Cypress
Em outro terminal, na raiz:

```bash
npx cypress open
```

Escolha **E2E Testing**, selecione um navegador e execute `login.cy.js`.

Para executar em modo terminal:

```bash
npx cypress run
```

## 5. Executar Playwright
Na raiz:

```bash
npx playwright test
```

Abrir o relatório HTML:

```bash
npx playwright show-report
```

## Caso de teste
**CT-01 – Login com dados válidos**
- Pré-condição: página de login aberta.
- Dados: usuário `admin`, senha `123456`.
- Passos: preencher usuário e senha; clicar em Entrar.
- Resultado esperado: mensagem `Login realizado com sucesso`.

**CT-02 – Login com senha inválida**
- Pré-condição: página de login aberta.
- Dados: usuário `admin`, senha `senha-errada`.
- Passos: preencher os campos; clicar em Entrar.
- Resultado esperado: mensagem `Usuário ou senha inválidos`.

## Comparação e discussão
- **Selenium:** suporta várias linguagens e navegadores; oferece flexibilidade, mas costuma exigir mais configuração e código explícito de espera.
- **Cypress:** tem experiência integrada de execução e depuração, com comandos encadeados e boas ferramentas visuais; sua arquitetura e suporte de navegadores diferem dos demais.
- **Playwright:** oferece auto-waiting, suporte a múltiplos navegadores e relatórios; costuma tornar testes modernos concisos e estáveis.

Não declare uma ferramenta vencedora sem executar os testes no mesmo computador e ambiente. Compare tempo, facilidade de configuração, legibilidade, depuração e estabilidade observados.

## Observação acadêmica
Este é um login didático no navegador: não existe servidor, banco de dados ou autenticação real. As credenciais ficam no JavaScript apenas para permitir a demonstração de automação. Não use este modelo em produção.
