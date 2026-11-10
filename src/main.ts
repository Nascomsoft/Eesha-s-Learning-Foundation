import './style.css'
import { aboutPage, foundationLogo } from './about.ts'
import { coreValuesSection } from './coreValues.ts'
import { donatePage } from './donate.ts'
import { mediaSection } from './media.ts'
import { ourWorkSection } from './ourWork.ts'
import { programmesSection } from './programmes.ts'

const isOurWorkPage = window.location.pathname.replace(/\/+$/, '') === '/our-work'
const isDonatePage = window.location.pathname.replace(/\/+$/, '') === '/donate'
const isProgrammesPage = window.location.pathname.replace(/\/+$/, '') === '/programmes'
const isMediaPage = window.location.pathname.replace(/\/+$/, '') === '/media'
const isHomePage = window.location.pathname === '/'
const workPage = `${ourWorkSection}${coreValuesSection}`
const currentPage = isDonatePage
  ? donatePage
  : isProgrammesPage
  ? `<div class="work-page-heading section-wrap"><h1>Programmes</h1></div>${programmesSection}`
  : isMediaPage
  ? `<div class="work-page-heading section-wrap"><h1>Media</h1></div>${mediaSection}`
  : isOurWorkPage
  ? `<div class="work-page-heading section-wrap"><h1>Our Work</h1></div>${workPage}`
  : aboutPage
const contactSection = `
    <section class="contact-section section-wrap" id="contact">
      <div>
        <div class="section-label"><span>+</span> Get in touch</div>
        <h2>Let's build a future where learning belongs to everyone.</h2>
      </div>
      <div class="contact-details">
        <p class="eyebrow">Eesha's Learning Foundation</p>
        <address>No 89 Kafin Galadima Street<br>New GRA, Bauchi, Nigeria</address>
        <a class="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=No+89+Kafin+Galadima+Street+New+GRA+Bauchi+Nigeria" target="_blank" rel="noreferrer">Find us in Bauchi <span aria-hidden="true">&#8599;</span></a>
      </div>
    </section>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Eesha's Learning Foundation home">
      <span class="brand-mark" aria-hidden="true"><img src="${foundationLogo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-dropdown">
        <a href="/#about">About</a>
        <button class="nav-menu-toggle" type="button" aria-label="Show About submenu" aria-expanded="false" aria-controls="about-submenu"><span aria-hidden="true">&#9662;</span></button>
        <div class="nav-submenu" id="about-submenu" hidden>
          <a href="/#about">Our Leadership</a>
        </div>
      </div>
      <a href="/our-work#core-areas">Our Work</a>
      <a href="/programmes">Programmes</a>
      <div class="nav-dropdown">
        <a href="/media">Media</a>
        <button class="nav-menu-toggle" type="button" aria-label="Show Media submenu" aria-expanded="false" aria-controls="media-submenu"><span aria-hidden="true">&#9662;</span></button>
        <div class="nav-submenu" id="media-submenu" hidden>
          <a href="/media#blog">Blog</a>
        </div>
      </div>
      <a class="nav-donate" href="/donate">Donate</a>
      <a class="nav-contact" href="/#contact">Contact</a>
    </nav>
  </header>

  <main>
    ${currentPage}
    ${isHomePage ? contactSection : ''}
  </main>

  <footer class="site-footer">
    <a class="brand footer-brand" href="/">
      <span class="brand-mark" aria-hidden="true"><img src="${foundationLogo}" alt="" /></span>
      <span class="brand-name">Eesha's Learning <strong>Foundation</strong></span>
    </a>
    <p>Empowering Minds. Inspiring Voices. Building Futures.</p>
    <a href="#home" class="back-top">Back to top <span aria-hidden="true">&#8593;</span></a>
    <small>&copy; <span id="current-year"></span> Eesha's Learning Foundation</small>
  </footer>
`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!
const siteNav = document.querySelector<HTMLElement>('.site-nav')!
const aboutMenuToggle = document.querySelector<HTMLButtonElement>('[aria-controls="about-submenu"]')!
const aboutSubmenu = document.querySelector<HTMLElement>('#about-submenu')!
const mediaMenuToggle = document.querySelector<HTMLButtonElement>('[aria-controls="media-submenu"]')!
const mediaSubmenu = document.querySelector<HTMLElement>('#media-submenu')!

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isExpanded))
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation')
  siteNav.classList.toggle('is-open', !isExpanded)
})

const bindSubmenuToggle = (
  toggle: HTMLButtonElement,
  submenu: HTMLElement,
  label: string,
) => {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!isExpanded))
    toggle.setAttribute('aria-label', `${isExpanded ? 'Show' : 'Hide'} ${label} submenu`)
    submenu.hidden = isExpanded
  })
}

bindSubmenuToggle(aboutMenuToggle, aboutSubmenu, 'About')
bindSubmenuToggle(mediaMenuToggle, mediaSubmenu, 'Media')

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    siteNav.classList.remove('is-open')
    aboutMenuToggle.setAttribute('aria-expanded', 'false')
    aboutMenuToggle.setAttribute('aria-label', 'Show About submenu')
    aboutSubmenu.hidden = true
    mediaMenuToggle.setAttribute('aria-expanded', 'false')
    mediaMenuToggle.setAttribute('aria-label', 'Show Media submenu')
    mediaSubmenu.hidden = true
  })
})

document.querySelector('#current-year')!.textContent = String(new Date().getFullYear())
