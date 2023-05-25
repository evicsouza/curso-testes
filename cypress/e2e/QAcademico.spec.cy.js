describe('teste do site QAcademico', () => {
  it('verificando se itens da tela inicial são visíveis', () => {
    cy.visit('https://qacademico.ifpe.edu.br')
    cy.get('[colspan="2"]').should('be.visible');
    cy.get('[width="200"]').should('be.visible');
    cy.get(':nth-child(2) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(4) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(6) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(8) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(10) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(12) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(14) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
    cy.get(':nth-child(16) > [valign="middle"] > .item_login_pagina_inicial').should('be.visible');
  })

  it('fazendo login como aluno', () =>{
    cy.visit('https://qacademico.ifpe.edu.br');
    cy.get(':nth-child(4) > [valign="middle"] > .item_login_pagina_inicial').click();
    cy.get('#txtLogin').type('20192ADSGR0141');
    cy.get('#txtSenha').type("");
    cy.get('#btnOk').click();
    cy.get(':nth-child(3) > .conteudoTexto > .conteudoLink').click();
  })
})