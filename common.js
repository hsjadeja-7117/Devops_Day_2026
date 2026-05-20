const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/venue', label: 'Venue' },
  { href: '/volunteers', label: 'Volunteer' },
];

function renderHeader() {
  const cur = location.pathname.replace(/\/$/, '') || '/';
  const links = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="${cur === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');
  const mobileLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}" onclick="closeMobileNav()">${l.label}</a>`
  ).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="/" class="site-logo">
        <img src="/assets/logo-devops-edition.png" alt="AWS Community Day Ahmedabad 2026" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none;font-weight:800;color:#ea580c;font-size:1rem;">ACD Ahmedabad 2026</span>
      </a>
      <nav class="desktop-nav">${links}</nav>
      <a href="/tickets" class="btn-ticket-header">Get Tickets</a>
      <button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <a href="/tickets" class="btn-mobile-ticket" onclick="closeMobileNav()">Get Tickets</a>
    </nav>`;
}

function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <h3>AWS Community Day 2026</h3>
          <p>Connecting cloud professionals and students in Gujarat.</p>
        </div>
        <div>
          <h4>Event</h4>
          <ul>
            <li><a href="/venue">Venue &amp; Location</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/travel">Travel</a></li>
            <li><a href="/badge">Badge</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/volunteers">Volunteer</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/company/awsahmedabadcommunity" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="https://x.com/awsugahm" target="_blank" rel="noopener" aria-label="Twitter">𝕏</a>
            <a href="mailto:awsugahm@gmail.com" aria-label="Email">✉</a>
          </div>
          <a href="mailto:awsugahm@gmail.com" style="color:#9ca3af;font-size:.875rem;">awsugahm@gmail.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 AWS User Group Ahmedabad. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="/code-of-conduct">Code of Conduct</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/accessibility">Accessibility</a>
        </div>
      </div>
    </div>`;
}

/* ===== COUNTDOWN ===== */
function startCountdown(targetDate, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  function tick() {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) { el.innerHTML = '<p style="color:#ea580c;font-weight:700;">Event is Live!</p>'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = `
      <div class="countdown">
        <div class="countdown-box"><div class="num">${String(d).padStart(2,'0')}</div><div class="lbl">Days</div></div>
        <div class="countdown-box"><div class="num">${String(h).padStart(2,'0')}</div><div class="lbl">Hours</div></div>
        <div class="countdown-box"><div class="num">${String(m).padStart(2,'0')}</div><div class="lbl">Mins</div></div>
        <div class="countdown-box"><div class="num">${String(s).padStart(2,'0')}</div><div class="lbl">Secs</div></div>
      </div>`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ===== INITIALS HELPER ===== */
function getInitials(name) {
  return (name || '').trim().split(/\s+/).map(n => n[0]).join('').slice(0,2).toUpperCase();
}

/* ===== SLUG HELPER ===== */
function slugify(name) {
  return (name || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove special chars
    .replace(/\s+/g, '-')        // spaces → hyphens
    .replace(/-+/g, '-');        // collapse multiple hyphens
}

/* ===== SPEAKER URL HELPER ===== */
function speakerUrl(speaker) {
  const slug = speaker.slug || slugify(speaker.name);
  return `/speaker-detail/?speaker=${slug}`;
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('site-header')) renderHeader();
  if (document.getElementById('site-footer')) renderFooter();
});
