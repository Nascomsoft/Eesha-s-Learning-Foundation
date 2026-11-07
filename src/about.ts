import logo from '../logos/ELF logo.jpeg'
import atapLogo from '../logos/ATAP logo.webp'
import atbuLogo from '../logos/atbu logo.jpg'
import bwsaLogo from '../logos/BWSA logo.webp'
import fpbLogo from '../logos/FPB logo.jpg'
import ithacLogo from '../logos/ITHAC logo.webp'
import wakfLogo from '../logos/WAKF logo.webp'

export const foundationLogo = logo

export const aboutPage = `
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow"><span></span> Bauchi, Nigeria</p>
        <h1 id="hero-title">Eesha's Learning Foundation</h1>
        <p class="hero-tagline">Empowering minds. Inspiring voices. Building futures.</p>
        <p class="hero-copy">Creating room for children, young people and women to learn, find their voice and shape what comes next.</p>
        <div class="hero-actions">
          <a class="button button-gold" href="/our-work#core-areas">Explore our work <span aria-hidden="true">&#8594;</span></a>
          <a class="text-link light-link" href="#about">Discover our story</a>
        </div>
      </div>
      <div class="hero-bottomline"><span>Learning belongs to everyone.</span></div>
    </section>

    <section class="intro section-wrap" id="about">
      <div class="section-label"><span>01</span> About the foundation</div>
      <div class="intro-grid">
        <h2>Every child deserves the chance to discover their potential.</h2>
        <div class="intro-copy">
          <p>Eesha's Learning Foundation (ELF) is a community-focused educational and development organization established in 2024 and founded by Aishatu Hassan. The Foundation was created from a simple but powerful belief: every child, young person and woman deserves access to knowledge, mentorship, opportunities and a platform to discover and express their potential.</p>
          <p>Based in Bauchi, Nigeria, ELF works where education, literacy, mentorship, leadership, talent development, innovation and community development meet. Learning here goes beyond the classroom: it is a chance to think critically, communicate confidently and imagine new possibilities.</p>
        </div>
      </div>
      <div class="mission-vision">
        <article class="statement statement-teal">
          <p class="eyebrow">Our vision</p>
          <h3>A generation ready to create positive change.</h3>
          <p>To build a generation of confident, knowledgeable and socially responsible individuals equipped to create positive change.</p>
        </article>
        <article class="statement statement-gold">
          <p class="eyebrow">Our mission</p>
          <h3>Opportunity to learn, grow and thrive.</h3>
          <p>To create accessible learning, mentorship and development opportunities that empower children, young people and women to thrive.</p>
        </article>
      </div>
    </section>

    <section class="partnerships-section" id="partnerships">
      <div class="section-wrap">
        <div class="partnerships-intro">
          <div class="section-label"><span>02</span> Working together</div>
          <h2>Our Partners</h2>
          <p class="partnerships-copy">Sustainable impact cannot be achieved in isolation. ELF works with institutions, organizations, professionals, mentors, volunteers and community stakeholders.</p>
        </div>
        <div class="partner-logo-grid">
          <figure class="partner-logo"><div><img src="${ithacLogo}" alt="" loading="lazy" /></div><figcaption>Information Technologies Hub and Cynosure</figcaption></figure>
          <figure class="partner-logo"><div><img src="${atbuLogo}" alt="" loading="lazy" /></div><figcaption>Abubakar Tafawa Balewa University</figcaption></figure>
          <figure class="partner-logo"><div><img src="${wakfLogo}" alt="" loading="lazy" /></div><figcaption>Wunti Al-Khair Foundation</figcaption></figure>
          <figure class="partner-logo"><div><img src="${bwsaLogo}" alt="" loading="lazy" /></div><figcaption>Bala Wunti Support Organisation</figcaption></figure>
          <figure class="partner-logo"><div><img src="${atapLogo}" alt="" loading="lazy" /></div><figcaption>Abubakar Tatari Ali Polytechnic</figcaption></figure>
          <figure class="partner-logo"><div><img src="${fpbLogo}" alt="" loading="lazy" /></div><figcaption>The Federal Polytechnic Bauchi</figcaption></figure>
        </div>
        <p class="additional-partners">Also working with <strong>Young Leaders Connect</strong> and <strong>Doctors Wives Bauchi</strong>.</p>
      </div>
    </section>

    <section class="impact-section section-wrap" id="impact">
      <div class="impact-copy">
        <div class="section-label"><span>03</span> Our impact</div>
        <h2>We believe transformation begins with opportunity.</h2>
      </div>
      <div class="impact-metrics" aria-label="Impact indicators">
        <article class="impact-metric"><strong>—</strong><span>People reached</span><small>Verified figure to be added</small></article>
        <article class="impact-metric"><strong>14</strong><span>Programme activities</span><small>Activities listed in our profile</small></article>
        <article class="impact-metric"><strong>08</strong><span>Named partners</span><small>Organizations listed in our profile</small></article>
        <article class="impact-metric"><strong>—</strong><span>Awards &amp; recognition</span><small>Details to be added</small></article>
      </div>
    </section>
`