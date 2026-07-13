(() => {
  const page = document.body.dataset.page || '';
  const botIcon = `<svg class="unexa-bot-icon" viewBox="0 0 64 64" role="img" aria-hidden="true" focusable="false">
    <g class="bot-float">
      <path class="bot-antenna" d="M32 13V8" />
      <circle class="bot-signal" cx="32" cy="6" r="3" />
      <rect class="bot-head" x="13" y="16" width="38" height="31" rx="12" />
      <path class="bot-ear" d="M13 27H9a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h4M51 27h4a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-4" />
      <circle class="bot-eye bot-eye-left" cx="25" cy="30" r="3" />
      <circle class="bot-eye bot-eye-right" cx="39" cy="30" r="3" />
      <path class="bot-smile" d="M24 39c4.7 3.4 11.3 3.4 16 0" />
      <path class="bot-neck" d="M25 48v4h14v-4" />
      <path class="bot-base" d="M20 57h24" />
    </g>
  </svg>`;
  const whatsappIcon = `<svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M16.04 3C9.42 3 4.05 8.25 4.05 14.74c0 2.3.68 4.54 1.96 6.45L4 28.5l7.55-1.97a12.2 12.2 0 0 0 4.48.84h.01c6.61 0 11.99-5.25 11.99-11.73C28.03 9.25 22.65 3 16.04 3Zm0 21.98h-.01a9.82 9.82 0 0 1-4.11-.9l-.3-.14-4.48 1.17 1.2-4.27-.2-.31a9.27 9.27 0 0 1-1.53-5.09c0-5.14 4.23-9.32 9.44-9.32 5.2 0 9.43 4.18 9.43 9.32 0 5.14-4.23 9.33-9.44 9.33Zm5.18-6.99c-.28-.14-1.67-.81-1.93-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.34.21-.62.07-.29-.14-1.2-.43-2.29-1.38a8.6 8.6 0 0 1-1.59-1.95c-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.18.05-.35-.02-.49-.07-.14-.64-1.52-.88-2.08-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.44s1.04 2.82 1.19 3.02c.14.18 2.06 3.08 4.99 4.32.7.3 1.24.47 1.67.6.7.22 1.33.19 1.83.12.56-.08 1.67-.67 1.91-1.32.24-.65.24-1.2.17-1.32-.07-.12-.26-.19-.55-.33Z"/>
  </svg>`;
  const header = `
  <div class="preloader" id="preloader"><div><img src="assets/images/un-campus-logo.png" alt=""><strong>UN CAMPUS</strong><div class="loadbar"><i></i></div></div></div>
  <div class="noise" aria-hidden="true"></div>
  <div class="topbar"><div class="container"><div class="topbar-left"><a href="tel:+94770000000">☎ +94 77 000 0000</a><a href="mailto:info@uncampus.edu.lk">✉ info@uncampus.edu.lk</a><span class="live-time" title="Live Sri Lanka time"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><small id="liveDate">Sri Lanka</small><b id="liveTime">--:--:--</b></span></div><div class="topbar-right"><span>Admissions open for the next intake</span><a href="contact.html#apply">Apply now →</a></div></div></div>
  <header class="site-header" id="siteHeader"><div class="container nav-wrap">
    <a class="brand" href="index.html"><img src="assets/images/un-campus-logo.png" alt="UN Campus logo"><span class="brand-text"><b>UN CAMPUS</b><small>LEARN • LEAD • TRANSFORM</small></span></a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a data-nav="home" href="index.html">Home</a><a data-nav="about" href="about.html">About</a><a data-nav="courses" href="courses.html">Courses</a><a data-nav="staff" href="staff.html">Staff</a><a data-nav="gallery" href="gallery.html">Gallery</a><a data-nav="contact" href="contact.html">Contact</a>
    </nav>
    <div class="nav-actions"><button class="icon-btn theme-btn" id="themeBtn" aria-label="Switch dark or light mode"><span class="sun">☀</span><span class="moon">☾</span></button><a class="btn btn-sm btn-primary nav-apply" href="contact.html#apply">Enroll now</a><button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button></div>
  </div></header>
  <div class="mobile-panel" id="mobilePanel" aria-hidden="true"><nav><a data-nav="home" href="index.html">Home <span>01</span></a><a data-nav="about" href="about.html">About <span>02</span></a><a data-nav="courses" href="courses.html">Courses <span>03</span></a><a data-nav="staff" href="staff.html">Staff <span>04</span></a><a data-nav="gallery" href="gallery.html">Gallery <span>05</span></a><a data-nav="contact" href="contact.html">Contact <span>06</span></a></nav><div class="mobile-foot"><a href="tel:+94770000000">+94 77 000 0000</a><span>Two branches • One community</span></div></div>`;

  const footer = `
  <footer class="site-footer"><div class="container footer-main">
    <div class="footer-brand"><a class="brand" href="index.html"><img src="assets/images/un-campus-logo.png" alt="UN Campus logo"><span class="brand-text"><b>UN CAMPUS</b><small>LEARN • LEAD • TRANSFORM</small></span></a><p>A modern learning community focused on academic excellence, practical skills and confident futures.</p><div class="social-row"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">▶</a></div></div>
    <div class="footer-links"><h3>Explore</h3><a href="about.html">About us</a><a href="courses.html">All courses</a><a href="staff.html">Academic staff</a><a href="gallery.html">Campus gallery</a><a href="contact.html#apply">Admissions</a></div>
    <div class="footer-links"><h3>Student support</h3><a href="contact.html">Contact support</a><a href="index.html#faqs">FAQs</a><a href="courses.html#pathways">Career pathways</a><a href="contact.html#branches">Branch information</a><a href="#" data-open-chat>Ask Unexa</a></div>
    <div class="footer-contact"><h3>Our locations</h3><div class="location"><span>01</span><div><b>UN Campus Trincomalee — Branch 1</b><p>Trincomalee, Sri Lanka</p><a target="_blank" rel="noopener" href="https://maps.app.goo.gl/4HrKDViiaZMZ9gvr9">View location ↗</a></div></div><div class="location"><span>02</span><div><b>UN Campus Trincomalee — Branch 2</b><p>Trincomalee, Sri Lanka</p><a target="_blank" rel="noopener" href="https://maps.app.goo.gl/XTnfux1ioNzwUqqc9">View location ↗</a></div></div></div>
  </div><div class="container footer-maps"><article class="map-card"><div class="map-head"><div><small>BRANCH 01</small><h3>UN Campus Trincomalee</h3></div><a target="_blank" rel="noopener" href="https://maps.app.goo.gl/4HrKDViiaZMZ9gvr9">Directions ↗</a></div><iframe title="UN Campus Trincomalee branch 1 map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=8.569068,81.2342194&z=18&output=embed"></iframe></article><article class="map-card"><div class="map-head"><div><small>BRANCH 02</small><h3>UN Campus Trincomalee — Branch 2</h3></div><a target="_blank" rel="noopener" href="https://maps.app.goo.gl/XTnfux1ioNzwUqqc9">Directions ↗</a></div><iframe title="UN Campus Trincomalee branch 2 map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=8.5676275,81.2380183&z=18&output=embed"></iframe></article></div><div class="container footer-bottom"><p>© <span data-year></span> UN Campus. All rights reserved.</p></div></footer>
  <div class="floating"><a class="float-btn wa" href="https://wa.me/94770000000?text=Hello%20UN%20Campus%2C%20I%20would%20like%20course%20information." target="_blank" rel="noopener" aria-label="Chat with UN Campus on WhatsApp"><span class="wa-glow" aria-hidden="true"></span>${whatsappIcon}</a><button class="float-btn to-top" id="toTop" aria-label="Back to top">↑</button></div>
  <button class="chat-launcher" id="chatLauncher" aria-label="Open Unexa assistant" aria-expanded="false" aria-controls="chatPanel"><span class="chat-pulse" aria-hidden="true"></span><span class="chat-icon">${botIcon}<span class="chat-status" aria-hidden="true"></span></span><span class="chat-label"><b>Unexa</b><small>Campus AI</small></span></button>
  <aside class="chat-panel" id="chatPanel" aria-hidden="true"><div class="chat-head"><div class="unexa-avatar">${botIcon}<span class="avatar-orbit" aria-hidden="true"></span></div><div><b>Unexa</b><small>Online campus assistant</small></div><button id="chatClose" aria-label="Close chat">×</button></div><div class="messages" id="messages"></div><div class="chips" id="chips"><button data-msg="What courses are available?">Courses</button><button data-msg="How can I apply?">Admissions</button><button data-msg="Where are your branches?">Branches</button></div><form class="chat-form" id="chatForm"><label class="sr-only" for="chatInput">Message Unexa</label><input id="chatInput" placeholder="Ask about courses, admissions…" autocomplete="off"><button aria-label="Send">➤</button></form><p class="chat-disclaimer">Instant demo assistant. Connect a secure AI API for live generative replies.</p></aside>`;

  const headerMount = document.getElementById('site-shell');
  const footerMount = document.getElementById('footer-shell');
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add('active'));
})();
