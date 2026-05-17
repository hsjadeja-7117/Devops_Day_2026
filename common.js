/* ===== NAVIGATION ===== */
const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'Who We Are' },
  { href: 'schedule.html', label: 'Schedule' },
  { href: 'speakers.html', label: 'Speakers' },
  { href: 'sponsors.html', label: 'Sponsors' },
  { href: 'tickets.html', label: 'Tickets' },
  { href: 'venue.html', label: 'Venue' },
  { href: 'volunteers.html', label: 'Volunteer' },
];

function renderHeader() {
  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="${cur === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');
  const mobileLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}" onclick="closeMobileNav()">${l.label}</a>`
  ).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="site-logo">
        <img src="assets/logo.png" alt="AWS Community Day Ahmedabad 2026" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none;font-weight:800;color:#ea580c;font-size:1rem;">ACD Ahmedabad 2026</span>
      </a>
      <nav class="desktop-nav">${links}</nav>
      <a href="tickets.html" class="btn-ticket-header">Get Tickets</a>
      <button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <a href="tickets.html" class="btn-mobile-ticket" onclick="closeMobileNav()">Get Tickets</a>
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
            <li><a href="venue.html">Venue &amp; Location</a></li>
            <li><a href="speakers.html">Speakers</a></li>
            <li><a href="schedule.html">Schedule</a></li>
            <li><a href="travel.html">Travel</a></li>
            <li><a href="badge.html">Badge</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="sponsors.html">Sponsors</a></li>
            <li><a href="volunteers.html">Volunteer</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
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
          <a href="code-of-conduct.html">Code of Conduct</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="accessibility.html">Accessibility</a>
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

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('site-header')) renderHeader();
  if (document.getElementById('site-footer')) renderFooter();
});
