export const contactPage = `
    <section class="contact-page" aria-labelledby="contact-title">
      <div class="section-wrap">
        <header class="contact-page-heading">
          <p class="section-label"><span>Get in touch</span></p>
          <h1 id="contact-title">We'd love to hear from you.</h1>
          <p>For questions, partnership enquiries, or more information about Eesha's Learning Foundation, contact us or leave a message below.</p>
        </header>

        <div class="contact-page-grid">
          <section class="contact-information" aria-labelledby="contact-information-title">
            <h2 id="contact-information-title">Contact information</h2>
            <div class="contact-information-item">
              <h3>Email</h3>
              <a href="mailto:eeshaslearningfoundation1@gmail.com">eeshaslearningfoundation1@gmail.com</a>
            </div>
            <div class="contact-information-item">
              <h3>Phone</h3>
              <a href="tel:+2348060776555">+234 806 077 6555</a>
            </div>
            <div class="contact-information-item">
              <h3>Social media</h3>
              <p><a href="https://www.linkedin.com/in/eesha-s-learning-foundation-716711406/" target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p><a href="https://www.instagram.com/eeshas_learning_foundation/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">Instagram</a></p>
              <p><a href="https://www.facebook.com/profile.php?id=61581812994342" target="_blank" rel="noreferrer">Facebook</a></p>
            </div>
            <div class="contact-information-item">
              <h3>Address</h3>
              <address>No 89 Kafin Galadima Street<br>New GRA, Bauchi, Nigeria</address>
            </div>
          </section>

          <section class="contact-form-panel" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title">Send us a message</h2>
            <p class="contact-form-notice">To reach us, email <a href="mailto:eeshaslearningfoundation1@gmail.com">eeshaslearningfoundation1@gmail.com</a>.</p>
            <form id="contact-form">
              <div class="contact-form-fields">
                <label for="contact-name">Your name
                  <input id="contact-name" name="name" type="text" autocomplete="name" required />
                </label>
                <label for="contact-email">Email address
                  <input id="contact-email" name="email" type="email" autocomplete="email" required />
                </label>
                <label for="contact-phone">Phone number <span>(optional)</span>
                  <input id="contact-phone" name="phone" type="tel" autocomplete="tel" />
                </label>
                <label for="contact-message">Your message
                  <textarea id="contact-message" name="message" rows="5" required></textarea>
                </label>
              </div>
              <button class="button button-gold" type="submit">Submit inquiry <span aria-hidden="true">&#8594;</span></button>
              <p class="contact-form-status" id="contact-form-status" role="status" aria-live="polite"></p>
            </form>
          </section>
        </div>
      </div>
    </section>
`
