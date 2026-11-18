describe("Automação do formulário de login", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/sistema-login/index.html");
  });

  it("deve realizar login com credenciais válidas", () => {
    cy.get("#usuario").type("admin");
    cy.get("#senha").type("123456");
    cy.get("#entrar").click();
    cy.get("#mensagem").should("be.visible")
      .and("have.text", "Login realizado com sucesso");
  });

  it("deve apresentar erro com senha incorreta", () => {
    cy.get("#usuario").type("admin");
    cy.get("#senha").type("senha-errada");
    cy.get("#entrar").click();
    cy.get("#mensagem").should("have.text", "Usuário ou senha inválidos");
  });
});
