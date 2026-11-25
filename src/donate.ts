export const donatePage = `
    <section class="giving-details-section donate-page" id="giving-details" aria-labelledby="donate-title">
      <div class="section-wrap">
        <div class="giving-intro">
          
          
          
        </div>
        <section class="service-inquiry" id="service-inquiry" aria-labelledby="service-inquiry-title">
          <header class="service-inquiry-heading">
            <p class="consultancy-eyebrow">Consultancy &amp; services</p>
            
            <p>Review the consultation fee and service prices below, then contact us with questions or to discuss which service is right for you.</p>
          </header>
          <div class="service-inquiry-pricing">
            <article class="service-inquiry-fee">
              <h3>Consultation fee</h3>
              <p>₦5,000</p>
            </article>
            <article class="service-inquiry-price">
              <h3>One-on-one consultation</h3>
              <p>₦20,000 <span>per hour</span></p>
            </article>
            <article class="service-inquiry-price">
              <h3>Private public speaking &amp; poetry mentorship</h3>
              <p>₦50,000 <span>per hour</span></p>
            </article>
            <article class="service-inquiry-price">
              <h3>General public speaking class</h3>
              <p>₦100,000</p>
              <p class="service-inquiry-schedule">Three sessions per week for three months.</p>
            </article>
          </div>
          <a class="button button-gold service-inquiry-contact" href="/contact">Contact us about a service <span aria-hidden="true">&#8594;</span></a>
        </section>
        <section class="donation-methods" aria-labelledby="donation-methods-title">
          <h1 id="donate-title">Let's make learning possible together.</h1>
          <h3 id="donation-methods-title">Choose your donation type</h3>
          <div class="donation-type-buttons" role="group" aria-label="Donation type">
            <button class="donation-type-button" type="button" data-donation-type="one-time" aria-pressed="true">One-time Donation</button>
            <button class="donation-type-button" type="button" data-donation-type="recurring" aria-pressed="false">Recurring Donation</button>
          </div>
          <div class="donation-account-panel">
            <h4>Foundation account details</h4>
            <p id="donation-type-message" aria-live="polite">You selected one-time donations. Use the Foundation account details below to contribute.</p>
            <dl class="account-details-list">
              <div><dt>Account name</dt><dd>Eesha's Learning Foundation</dd></div>
              <div><dt>Bank</dt><dd>FCMB</dd></div>
              <div><dt>Account number</dt><dd>2004157183</dd></div>
            </dl>
          </div>
        </section>
      </div>
    </section>
`