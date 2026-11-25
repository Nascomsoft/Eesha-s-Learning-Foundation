import logo from '../logos/ELF logo.jpeg'
import atapLogo from '../logos/ATAP logo.webp'
import atbuLogo from '../logos/atbu logo.jpg'
import bwsaLogo from '../logos/BWSA logo.webp'
import dwaLogo from '../logos/DWA logo.jpg'
import fpbLogo from '../logos/FPB logo.jpg'
import ithacLogo from '../logos/ITHAC logo.webp'
import wakfLogo from '../logos/WAKF logo.webp'
import youngLeadersNetworkLogo from '../logos/young_leaders_network_logo.jpg'
import aboutElfImage from '../Images/About ELF.webp'
import weCareLogo from '../logos/WeCare foundation.jpg'
import nascomsoftLogo from '../logos/nascomsoft embeded logo.jpg'

export const foundationLogo = logo

export const aboutPage = `
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero-shade"></div>
      <div class="hero-content">
        
        <h1 id="hero-title">Eesha's Learning Foundation</h1>
        <p class="hero-tagline">Empowering minds. Inspiring voices. Building futures.</p>
        <p class="hero-copy">Creating room for children, young people and women to learn, find their voice and shape what comes next.</p>
        <div class="hero-actions">
          <a class="button button-gold" href="#core-areas">Explore our work <span aria-hidden="true">&#8594;</span></a>
          <a class="text-link light-link" href="#about">Discover our story</a>
        </div>
      </div>
      
    </section>

    <section class="intro section-wrap" id="about">
      
      <div class="intro-grid">
        <div class="intro-heading">
          <h2>About ELF</h2>
          <img class="about-elf-image" src="${aboutElfImage}" alt="Eesha's Learning Foundation community activity" loading="lazy" />
        </div>
        <div class="intro-copy">
          <p>Eesha's Learning Foundation (ELF) is a community-focused educational and development organization established in 2024 and founded by <strong>Aishatu Hassan Muhammad</strong>. The Foundation was created from a simple but powerful belief: <strong>every child, young person and woman deserves access to knowledge, mentorship, opportunities and a platform to discover and express their potential.</strong></p>
          <p>Based in Bauchi, Nigeria, ELF works where education, literacy, mentorship, leadership, talent development, innovation and community development meet. Learning here goes beyond the classroom: it is a chance to think critically, communicate confidently and imagine new possibilities.</p>
        </div>
      </div>
      <div class="mission-vision">
        <article class="statement statement-teal">
          <h3 class="eyebrow"><strong>Our Vision</strong></h3>
          
          <p>To build a generation of confident, knowledgeable and socially responsible individuals equipped to create positive change.</p>
        </article>
        <article class="statement statement-gold">
          <h3 class="eyebrow"><strong>Our Mission</strong></h3>
          <p>To create accessible learning, mentorship and development opportunities that empower children, young people and women to thrive.</p>
        </article>
      </div>
    </section>

    <section class="partnerships-section" id="partnerships">
      <div class="section-wrap">
        <div class="partnerships-intro">
          
          <h2>Our Partners</h2>
          
        </div>
        <div class="partner-logo-grid">
          <figure class="partner-logo"><div><img src="${ithacLogo}" alt="" loading="lazy" /></div><figcaption>Information Technologies Hub and Cynosure</figcaption></figure>
          <figure class="partner-logo"><div><img src="${atbuLogo}" alt="" loading="lazy" /></div><figcaption>Abubakar Tafawa Balewa University</figcaption></figure>
          <figure class="partner-logo"><div><img src="${wakfLogo}" alt="" loading="lazy" /></div><figcaption>Wunti Al-Khair Foundation</figcaption></figure>
          <figure class="partner-logo"><div><img src="${bwsaLogo}" alt="" loading="lazy" /></div><figcaption>Bala Wunti Support Organisation</figcaption></figure>
          <figure class="partner-logo"><div><img src="${dwaLogo}" alt="" loading="lazy" /></div><figcaption>Doctors Wives Association</figcaption></figure>
          <figure class="partner-logo"><div><img src="${atapLogo}" alt="" loading="lazy" /></div><figcaption>Abubakar Tatari Ali Polytechnic</figcaption></figure>
          <figure class="partner-logo"><div><img src="${fpbLogo}" alt="" loading="lazy" /></div><figcaption>The Federal Polytechnic Bauchi</figcaption></figure>
          <figure class="partner-logo"><div><img src="${youngLeadersNetworkLogo}" alt="" loading="lazy" /></div><figcaption>Young Leaders Network</figcaption></figure>
          <figure class="partner-logo"><div><img src="${weCareLogo}" alt="" loading="lazy" /></div><figcaption>WeCare Foundation</figcaption></figure>
          <figure class="partner-logo"><div><img src="${nascomsoftLogo}" alt="" loading="lazy" /></div><figcaption>Nascomsoft Embeded LTD</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="impact-section section-wrap" id="impact">
      <div class="impact-copy">
        
        <h2>Our Impact</h2>
      </div>
      <div class="impact-metrics" aria-label="Impact indicators">
        <article class="impact-metric"><strong>50+</strong><span>Awards recieved</span></article>
        <article class="impact-metric"><strong>100+</strong><span>Children mentored in Public Speaking, Creative Writing, and Storytelling </span></article>
        <article class="impact-metric"><strong>500+</strong><span>Adults mentored in Public Speaking</span></article>
        <article class="impact-metric"><strong>200+</strong><span>Bookclub members, with over 100 books reviewed</span><small></article>
        <article class="impact-metric"><strong>150+</strong><span>Certificates recieved for community development</span><small></article>
      </div>
    </section>
`