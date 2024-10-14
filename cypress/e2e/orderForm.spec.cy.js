describe('Sipariş Formu Testi', () => {
  it('Formu doldur ve gönder', () => {
    cy.visit('http://localhost:5173/order'); // Uygulamanızın çalıştığı URL

    cy.get('input[name="fullName"]').type('Emre Test');
    cy.get('input[name="size"][value="orta"]').check();
    cy.get('select[name="dough"]').select('orta');
    cy.get('input[type="checkbox"]').check(); // Örneğin bir ekstra seçeneği kontrol et

    cy.get('button').contains('Sipariş Ver').click(); // Butonun metni
    cy.url().should('include', '/success'); // Başarılı yönlendirmeyi kontrol et
  });
});
