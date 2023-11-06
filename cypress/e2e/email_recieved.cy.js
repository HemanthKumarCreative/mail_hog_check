const data = require("../fixtures/data.json");
const { to, subject, text, apiUrl, mailHogUrl } = data;
console.log(data);
describe("Visit Google", () => {
  it("should Send Email", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
      body: {
        to,
        subject,
        text,
      },
    }).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(201);
    });
  });

  it("should Recieve Email", () => {
    cy.visit(mailHogUrl);
    cy.get("input#search").type(subject);
    cy.get("input#search").type("{enter}");
    cy.contains("div.msglist-message", subject).first().click();
  });
});
