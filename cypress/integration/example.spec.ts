// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/")
  })

  it("changes language", () => {
    cy.get("select").select("hi")
    cy.contains("h1", "Vue3 + Vite + Vuetify इलेक्ट्रॉन ऐप में आपका स्वागत है।")
  })
})
