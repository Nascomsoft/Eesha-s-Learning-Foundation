import './style.css'
import logo from '../logos/ELF logo.jpeg'
import atapLogo from '../logos/ATAP logo.webp'
import atbuLogo from '../logos/atbu logo.jpg'
import bwsaLogo from '../logos/BWSA logo.webp'
import fpbLogo from '../logos/FPB logo.jpg'
import ithacLogo from '../logos/ITHAC logo.webp'
import wakfLogo from '../logos/WAKF logo.webp'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Eesha's Learning Foundation home">
      <span class="brand-mark" aria-hidden="true"><img src="${logo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#core-areas">Our work</a>
      <a href="#programmes">Programmes</a>
      <a href="#approach">Our approach</a>
      <a href="#impact">Impact</a>
      <a class="nav-contact" href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow"><span></span> Bauchi, Nigeria</p>
        <h1 id="hero-title">Eesha's Learning Foundation</h1>
        <p class="hero-tagline">Empowering minds. Inspiring voices. Building futures.</p>
        <p class="hero-copy">Creating room for children, young people and women to learn, find their voice and shape what comes next.</p>
        <div class="hero-actions">
          <a class="button button-gold" href="#core-areas">Explore our work <span aria-hidden="true">&#8594;</span></a>
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

    <section class="core-section" id="core-areas">
      <div class="section-wrap">
        <div class="section-label section-label-light"><span>02</span> Where we focus</div>
        <div class="section-heading-row">
          <h2>Our core areas</h2>
          <p>We create practical ways for people to learn, express themselves and contribute to their communities.</p>
        </div>
        <div class="core-grid">
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="Books arranged in a library" loading="lazy" /><div class="image-tile-copy"><span>01</span><h3>Literacy &amp; reading culture</h3><p>Book clubs, reading sessions, read-alouds and storytelling help children build a lasting relationship with books and knowledge.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="Students learning together in a classroom" loading="lazy" /><div class="image-tile-copy"><span>02</span><h3>Children's mentorship</h3><p>Structured mentorship nurtures confidence, communication, creativity and self-expression.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="Students taking part in a learning activity" loading="lazy" /><div class="image-tile-copy"><span>03</span><h3>Public speaking &amp; communication</h3><p>Safe opportunities to practise speaking, performance and clear expression help young voices be heard.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="Creative materials arranged for an art activity" loading="lazy" /><div class="image-tile-copy"><span>04</span><h3>Talent discovery &amp; development</h3><p>Platforms for poetry, storytelling, reading, creative arts, leadership, performance and problem-solving.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="A young learner reading a book" loading="lazy" /><div class="image-tile-copy"><span>05</span><h3>Girls' &amp; women's empowerment</h3><p>Education, mentorship, innovation and leadership opportunities help women and girls shape their futures.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="A student learning with a laptop" loading="lazy" /><div class="image-tile-copy"><span>06</span><h3>Innovation &amp; skills development</h3><p>Programs expose young people to technology, entrepreneurship, critical thinking and practical skills.</p></div></article>
          <article class="image-tile core-item"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&amp;fit=crop&amp;w=800&amp;q=85" alt="Volunteers working together in their community" loading="lazy" /><div class="image-tile-copy"><span>07</span><h3>Community development &amp; social impact</h3><p>Educational outreach, mentorship, charitable initiatives and community partnerships extend learning beyond the classroom.</p></div></article>
        </div>
      </div>
    </section>

    <section class="programmes section-wrap" id="programmes">
      <div class="section-label"><span>03</span> In action</div>
      <div class="programmes-grid">
        <div class="programmes-photo" role="img" aria-label="Students learning together in a classroom"><span>Curiosity grows when it has room.</span></div>
        <div class="programmes-content">
          <p class="eyebrow">Our programmes &amp; activities</p>
          <h2>Learning that finds its way into everyday life.</h2>
          <p>From reading together to trying something new, our activities give young people space to build skills, confidence and connection.</p>
          <ul class="programme-list">
            <li>Eesha's Book Club Society</li><li>Children's mentorship sessions</li>
            <li>Public speaking mentorship</li><li>Read-aloud sessions</li>
            <li>Poetry and storytelling programmes</li><li>Talent discovery initiatives</li>
            <li>Creative and educational workshops</li><li>Book and literacy events</li>
            <li>Girls' and women's empowerment</li><li>Innovation and entrepreneurship</li>
            <li>SDG-focused programmes</li><li>Community and educational outreach</li>
            <li>Educational partnerships</li><li>Medical and humanitarian outreach</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="approach-section" id="approach">
      <div class="section-wrap">
        <div class="section-label"><span>04</span> How we work</div>
        <div class="section-heading-row">
          <h2>Our approach</h2>
          <p>We believe lasting impact is built through consistency, collaboration and community.</p>
        </div>
        <div class="approach-grid">
          <article class="image-tile approach-step">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="Students learning together in a classroom" loading="lazy" />
            <div class="image-tile-copy"><span>01</span><h3>Learn</h3><p>Open access to knowledge and learning opportunities.</p></div>
          </article>
          <article class="image-tile approach-step">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="A student discovering a new book" loading="lazy" />
            <div class="image-tile-copy"><span>02</span><h3>Discover</h3><p>Help people identify their talents, interests and potential.</p></div>
          </article>
          <article class="image-tile approach-step">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="Students taking part in a learning activity" loading="lazy" />
            <div class="image-tile-copy"><span>03</span><h3>Develop</h3><p>Offer mentorship, skills and platforms for growth.</p></div>
          </article>
          <article class="image-tile approach-step">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="Young people working together" loading="lazy" />
            <div class="image-tile-copy"><span>04</span><h3>Lead</h3><p>Encourage people to use what they know to create positive change.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="partnerships-section" id="partnerships">
      <div class="section-wrap">
        <div class="partnerships-intro">
          <div class="section-label"><span>05</span> Working together</div>
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
        <div class="section-label"><span>06</span> What impact means</div>
        <h2>We measure change in the moments that move people forward.</h2>
        <p>Not only by the number of programmes delivered, but by the child who finds their voice, the girl who discovers she can lead, the woman who turns an idea into action, and the community that grows stronger because people choose to show up.</p>
        <p>We believe that transformation begins with opportunity.</p>
      </div>
      <blockquote class="impact-quote">
        <span class="quote-mark" aria-hidden="true">“</span>
        <p>Sometimes, it is a book.<br>Sometimes, it is a microphone.<br>Sometimes, it is a mentor.<br>Sometimes, it is simply someone saying:</p>
        <strong>“I believe you can.”</strong>
      </blockquote>
    </section>

    <section class="values-section" id="values">
      <div class="section-wrap">
        <div class="section-label"><span>07</span> What guides us</div>
        <div class="section-heading-row">
          <h2>Our core values</h2>
          <p>The principles behind how we learn, work and serve.</p>
        </div>
        <div class="values-grid">
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="Books arranged in a library" loading="lazy" /><div class="image-tile-copy"><h3>Learning</h3><p>Knowledge is a lifelong journey.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="A child reading a book" loading="lazy" /><div class="image-tile-copy"><h3>Empowerment</h3><p>People should be able to recognize and use their potential.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="People collaborating around a table" loading="lazy" /><div class="image-tile-copy"><h3>Inclusivity</h3><p>Everyone deserves an opportunity to learn, participate and grow.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="Open books ready for a learning session" loading="lazy" /><div class="image-tile-copy"><h3>Consistency</h3><p>Meaningful transformation requires sustained effort.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="A team sharing ideas" loading="lazy" /><div class="image-tile-copy"><h3>Collaboration</h3><p>Communities achieve more when people work together.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="A young person learning with a laptop" loading="lazy" /><div class="image-tile-copy"><h3>Integrity</h3><p>We value honesty, responsibility and accountability.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="Volunteers working together in their community" loading="lazy" /><div class="image-tile-copy"><h3>Innovation</h3><p>We encourage creative thinking and practical solutions.</p></div></article>
          <article class="image-tile value-tile"><img src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&amp;fit=crop&amp;w=700&amp;q=85" alt="People connecting in a community" loading="lazy" /><div class="image-tile-copy"><h3>Service</h3><p>We believe leadership is ultimately about serving others.</p></div></article>
        </div>
      </div>
    </section>

    <section class="future-section" id="future">
      <div class="section-wrap future-grid">
        <div>
          <div class="section-label section-label-light"><span>08</span> Looking ahead</div>
          <h2>Our vision is to build people.</h2>
        </div>
        <div class="future-copy">
          <p>We are working toward a future where more children have access to books and mentorship, more young people are equipped with confidence and skills, and more women and girls have platforms to learn, innovate and lead.</p>
          <p>ELF seeks to expand its educational programmes, strengthen partnerships, reach more communities and develop sustainable initiatives that create measurable, lasting impact.</p>
          <p class="future-manifesto">People who read.<br>People who think.<br>People who speak.<br>People who lead.<br>People who serve.</p>
          <p>And ultimately, people who change their communities.</p>
        </div>
      </div>
    </section>

    <section class="contact-section section-wrap" id="contact">
      <div>
        <div class="section-label"><span>09</span> Find us</div>
        <h2>Let's build a future where learning belongs to everyone.</h2>
      </div>
      <div class="contact-details">
        <p class="eyebrow">Eesha's Learning Foundation</p>
        <address>No 89 Kafin Galadima Street<br>New GRA, Bauchi, Nigeria</address>
        <a class="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=No+89+Kafin+Galadima+Street+New+GRA+Bauchi+Nigeria" target="_blank" rel="noreferrer">Find us in Bauchi <span aria-hidden="true">&#8599;</span></a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <a class="brand footer-brand" href="#home">
      <span class="brand-mark" aria-hidden="true"><img src="${logo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <p>Empowering Minds. Inspiring Voices. Building Futures.</p>
    <a href="#home" class="back-top">Back to top <span aria-hidden="true">&#8593;</span></a>
    <small>&copy; <span id="current-year"></span> Eesha's Learning Foundation</small>
  </footer>
`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!
const siteNav = document.querySelector<HTMLElement>('.site-nav')!

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isExpanded))
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation')
  siteNav.classList.toggle('is-open', !isExpanded)
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    siteNav.classList.remove('is-open')
  })
})

document.querySelector('#current-year')!.textContent = String(new Date().getFullYear())
