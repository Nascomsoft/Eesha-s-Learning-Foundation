export const donatePage = `
    <section class="giving-details-section donate-page" id="giving-details" aria-labelledby="donate-title">
      <div class="section-wrap">
        <div class="giving-intro">
          <div class="section-label section-label-light"><span>Make a contribution</span></div>
          <h1 id="donate-title">Let's make learning possible together.</h1>
          <p>Choose how you would like to give using the Foundation account details below.</p>
        </div>
        <section class="donation-methods" aria-labelledby="donation-methods-title">
          <h3 id="donation-methods-title">Choose your donation type</h3>
          <div class="donation-type-buttons" role="group" aria-label="Donation type">
            <button class="donation-type-button" type="button" data-donation-type="one-time" aria-pressed="true">One-time Donation</button>
            <button class="donation-type-button" type="button" data-donation-type="recurring" aria-pressed="false">Recurring Donation</button>
          </div>
          <div class="donation-account-panel">
            <h4>Foundation account details</h4>
            <p id="donation-type-message" aria-live="polite">Account details for one-time donations will be added here.</p>
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