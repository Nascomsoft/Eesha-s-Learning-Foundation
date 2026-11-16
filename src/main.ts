import './style.css'
import { aboutPage, foundationLogo } from './about.ts'
import { coreValuesSection } from './coreValues.ts'
import { contactPage } from './contact.ts'
import { donatePage } from './donate.ts'
import { leadershipPage } from './leadership.ts'
import { ourWorkSection } from './ourWork.ts'
import { programmesSection } from './programmes.ts'

const workPage = `${ourWorkSection}${coreValuesSection}`
const onePageContent = `${aboutPage}${workPage}${programmesSection}${leadershipPage}`
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const currentPage = currentPath === '/donate'
  ? donatePage
  : currentPath === '/contact'
  ? contactPage
  : onePageContent
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="/#home" aria-label="Eesha's Learning Foundation home">
      <span class="brand-mark" aria-hidden="true"><img src="${foundationLogo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="/#home">Home</a>
      <a href="/#about">About</a>
      <a href="/#core-areas">Our Work</a>
      <a href="/#programmes">Programmes</a>
      <a href="/#leadership">Our Leadership</a>
      <a class="nav-donate" href="/donate">Donate</a>
      <a class="nav-contact" href="/contact">Contact</a>
    </nav>
  </header>

  <main>
    ${currentPage}
  </main>

  <footer class="site-footer">
    <a class="brand footer-brand" href="/#home">
      <span class="brand-mark" aria-hidden="true"><img src="${foundationLogo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <p>Empowering Minds. Inspiring Voices. Building Futures.</p>
    <nav class="footer-socials" aria-label="Social media">
      <a href="https://www.linkedin.com/in/eesha-s-learning-foundation-716711406/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.02h2.97v9.32ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.59h-2.97v-4.53c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.61H9.15V9.02h2.85v1.27h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.03Z"/></svg>
      </a>
      <a href="https://www.instagram.com/eeshas_learning_foundation/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer" aria-label="Instagram (opens in a new tab)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61581812994342" target="_blank" rel="noreferrer" aria-label="Facebook (opens in a new tab)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.5 3.05 15.43 3 14.19 3 11.6 3 9.83 4.58 9.83 7.48V9.6H7v3.2h2.83V21h3.67Z"/></svg>
      </a>
    </nav>
    <a href="/#home" class="back-top">Back to top <span aria-hidden="true">&#8593;</span></a>
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

const donationTypeButtons = document.querySelectorAll<HTMLButtonElement>('.donation-type-button')
const donationTypeMessage = document.querySelector<HTMLElement>('#donation-type-message')

donationTypeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const donationType = button.dataset.donationType
    if (donationType !== 'one-time' && donationType !== 'recurring') {
      throw new Error(`Unknown donation type: ${donationType}`)
    }

    donationTypeButtons.forEach((option) => {
      option.setAttribute('aria-pressed', String(option === button))
    })
    donationTypeMessage!.textContent = `You selected ${donationType === 'one-time' ? 'one-time' : 'recurring'} donations. Use the Foundation account details below to contribute.`
  })
})

const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
const contactFormStatus = document.querySelector<HTMLElement>('#contact-form-status')

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  contactFormStatus!.textContent = 'Your message was not sent because this form is not connected yet. Please email us directly.'
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    siteNav.classList.remove('is-open')
  })
})

document.querySelector('#current-year')!.textContent = String(new Date().getFullYear())
