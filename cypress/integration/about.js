context('About page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
})

describe('Layout', () => {
  it('содержит header и footer', () => {
    cy.get('header').should('exist')
    cy.get('footer').should('exist')
  })
})

// describe('Ссылки', () => {
//   it('Должна быть навигация', () => {})
// })
