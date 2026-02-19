/* ═══════════════════════════════════════════════
   ARIA RAHAYU — PORTFOLIO JAVASCRIPT
═══════════════════════════════════════════════ */

/* ── PROJECT DATA ── */
const projects = [
  {
    num: '01', cat: 'Residential', year: '2024',
    name: 'Rumah Tropis Bogor',
    loc: 'Bogor, Jawa Barat',
    area: '450 m²', type: 'Private Residence',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    desc:    `Rumah Tropis Bogor adalah proyek hunian privat yang menggabungkan prinsip arsitektur tropis dengan estetika kontemporer minimalis. Dirancang untuk keluarga muda yang menginginkan hunian yang nyaman, efisien energi, dan selaras dengan iklim hujan Bogor.`,
    concept: `Konsep utama adalah "Breathing House" — rumah yang bernapas. Setiap elemen arsitektur dirancang untuk memaksimalkan ventilasi alami dan meminimalkan penggunaan AC. Atap ganda dengan rongga udara, jendela cross-ventilation, dan taman dalam menjadi kunci desain.`,
    site:    `Tapak seluas 600 m² berada di kawasan perumahan premium Bogor Timur dengan topografi berkontur ringan. Orientasi bangunan dimiringkan 15° dari utara untuk memaksimalkan pencahayaan alami sambil menghindari paparan langsung sinar barat.`,
    zoning:  `Zona publik (tamu, garasi) ditempatkan di depan, zona semi-privat (ruang keluarga, dapur) di tengah dengan akses ke taman dalam, dan zona privat (kamar tidur) di belakang dan lantai atas.`,
    conclusion: `Proyek ini berhasil mencapai pengurangan konsumsi energi 40% dibanding rumah konvensional setara. Penghuni melaporkan kepuasan tinggi terhadap kenyamanan termal dan kualitas udara dalam ruang.`
  },
  {
    num: '02', cat: 'Cultural', year: '2023',
    name: 'Pusat Kebudayaan Nusantara',
    loc: 'Jakarta Selatan',
    area: '8.500 m²', type: 'Cultural Center',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    ],
    desc:    `Pusat Kebudayaan Nusantara adalah proyek kompetisi yang mengusulkan wadah baru bagi ekspresi dan pelestarian kebudayaan Indonesia. Bangunan ini menjadi titik temu antara tradisi dan modernitas, antara lokal dan global.`,
    concept: `Konsep "Archipelago Canopy" terinspirasi dari pola sebaran kepulauan Indonesia. Atap yang bergelombang dan berlapis-lapis menciptakan naungan yang luas — seperti gugusan pulau yang membentuk identitas nasional.`,
    site:    `Tapak di kawasan SCBD Jakarta Selatan dikelilingi gedung-gedung komersial modern. Bangunan dirancang sebagai "oasis budaya" di tengah kepadatan kota, dengan taman publik yang mengundang semua lapisan masyarakat.`,
    zoning:  `Program dibagi menjadi: Zona Pertunjukan (auditorium, panggung terbuka), Zona Edukasi (workshop, kelas), Zona Pameran (galeri tetap dan temporer), dan Zona Komersial (toko kerajinan, kafe).`,
    conclusion: `Desain mendapatkan penilaian tertinggi dari juri kompetisi IAI untuk kategori "Integrasi Budaya dan Arsitektur Kontemporer". Proyek ini menjadi referensi dalam diskusi arsitektur nasional.`
  },
  {
    num: '03', cat: 'Commercial', year: '2023',
    name: 'Green Tower BSD',
    loc: 'Tangerang, Banten',
    area: '35.000 m²', type: 'Mixed-Use Tower',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
      'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&q=80',
    ],
    desc:    `Green Tower BSD adalah bangunan mixed-use 28 lantai yang menggabungkan kantor, hunian, dan komersial dalam satu megastruktur yang dirancang dengan prinsip keberlanjutan tinggi. Proyek magang di studio Andramatin.`,
    concept: `"Vertical Forest" menjadi tema utama. Setiap 4 lantai terdapat taman gantung yang berfungsi sebagai ruang publik vertikal dan sistem manajemen panas pasif. Fasad barat-timur dilindungi sirip-sirip aluminium.`,
    site:    `Berlokasi di kawasan bisnis BSD City yang tengah berkembang pesat. Bangunan dirancang sebagai landmark kawasan sekaligus penanda visual axis utama BSD City.`,
    zoning:  `Basement – Parkir & MEP; Lt. 1-3 Retail & Lobby; Lt. 4-12 Perkantoran; Lt. 13-14 Sky Garden; Lt. 15-27 Apartemen; Lt. 28 Rooftop Amenities.`,
    conclusion: `Proyek mendapat sertifikasi Green Building Indonesia (GBI) Platinum. Estimasi penghematan energi 45% dibandingkan bangunan konvensional setara.`
  },
  {
    num: '04', cat: 'Urban', year: '2022',
    name: 'Vertical Village Kemang',
    loc: 'Jakarta Selatan',
    area: '12.000 m²', type: 'Urban Housing',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
    ],
    desc:    `Vertical Village adalah eksplorasi model hunian vertikal yang mempertahankan kualitas "kampung" — komunitas yang erat, ruang bersama yang hidup, dan identitas yang kuat — dalam kepadatan urban Jakarta.`,
    concept: `Cluster 3 tower dihubungkan oleh sky bridges dan taman komunal vertikal di setiap 5 lantai. Unit-unit dirancang dengan variasi tipologi untuk mengakomodasi berbagai komposisi keluarga.`,
    site:    `Kawasan Kemang yang padat dengan karakter arty dan komunitas ekspatriat. Bangunan merespons skala street level dengan retail aktif dan setback yang lapang.`,
    zoning:  `Unit hunian terdiri dari: Studio (30%), 1BR (40%), 2BR (25%), 3BR (5%). Fasilitas komunal: co-working, urban farming, playground, gym, dan kolam renang rooftop.`,
    conclusion: `Thesis project yang memenangkan Best Thesis Award 2024. Diakui sebagai model inovatif untuk perumahan terjangkau urban di kawasan premium Jakarta.`
  },
  {
    num: '05', cat: 'Residential', year: '2022',
    name: 'Villa Bambu Ubud',
    loc: 'Ubud, Bali',
    area: '280 m²', type: 'Luxury Villa',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    desc:    `Villa Bambu Ubud adalah retreat mewah yang mengeksplorasi potensi estetika dan struktural bambu sebagai material utama bangunan kontemporer. Berlokasi di lembah sawah Ubud yang ikonik.`,
    concept: `"Earth and Sky" — villa dirancang sebagai jembatan antara bumi (material alam, koneksi tanah) dan langit (keterbukaan, cahaya). Seluruh struktur menggunakan bambu petung lokal yang ditreatment dengan borax-boric.`,
    site:    `Tapak di tepi sawah Ubud dengan pemandangan 270° ke lembah. Drop 4 meter ke arah selatan dimanfaatkan untuk menciptakan infinity pool yang terasa menyatu dengan sawah.`,
    zoning:  `Zona tidur (2 suite + 1 master) di area privat dengan view terbaik. Zona makan dan dapur sebagai pusat sosial. Kolam renang, spa, dan yoga pavilion sebagai amenitas pendukung.`,
    conclusion: `Villa mendapat liputan di Architectural Digest Indonesia dan Wallpaper*. Menjadi proyek referensi penggunaan bambu dalam arsitektur mewah kontemporer.`
  },
  {
    num: '06', cat: 'Cultural', year: '2021',
    name: 'Museum Wayang Digital',
    loc: 'Kota Tua, Jakarta',
    area: '4.200 m²', type: 'Museum',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    ],
    desc:    `Museum Wayang Digital adalah revitalisasi gedung heritage Kota Tua menjadi museum interaktif wayang berbasis teknologi digital. Proyek menggabungkan preservasi heritage dengan inovasi presentasi museum modern.`,
    concept: `"Shadow Play Space" — terinspirasi pertunjukan wayang kulit, museum menggunakan permainan cahaya dan bayangan sebagai elemen arsitektural utama. Dinding translucent, proyeksi digital, dan ruang gelap interaktif menciptakan pengalaman immersive.`,
    site:    `Gedung VOC era 1700an di Kota Tua Jakarta. Intervensi minimal pada fasad untuk mempertahankan karakter heritage, dengan penambahan struktur baja transparan di dalam atrium.`,
    zoning:  `Lt.1: Lobby, toko, kafe; Lt.2: Galeri sejarah wayang; Lt.3: Galeri wayang digital interaktif; Atrium: Pertunjukan wayang langsung; Roof: Terrace cafe dengan view Kota Tua.`,
    conclusion: `Proyek studi yang menjadi basis proposal resmi kepada Pemprov DKI Jakarta. Mendapat perhatian dari komunitas pelestarian budaya dan telah dipresentasikan dalam forum UNESCO Heritage.`
  }
];

/* ══════════════════════════════════════
   DARK MODE
══════════════════════════════════════ */
const themeBtn = document.getElementById('themeBtn');
const root     = document.documentElement;

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
}

themeBtn.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Initialize theme
const savedTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

/* ══════════════════════════════════════
   NAVBAR — SCROLL & ACTIVE LINK
══════════════════════════════════════ */
const navbar  = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const backTop  = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Sticky style
  navbar.classList.toggle('scrolled', y > 50);

  // Back-to-top visibility
  backTop.classList.toggle('visible', y > 400);

  // Active nav link
  let current = '';
  sections.forEach(section => {
    if (y >= section.offsetTop - 130) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ══════════════════════════════════════
   MOBILE NAVIGATION
══════════════════════════════════════ */
function openMobileNav() {
  document.getElementById("mobileNav").classList.add("open");
  document.getElementById("hamburger").style.display = "none";
}

function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open");
  document.getElementById("hamburger").style.display = "flex";
}


/* ══════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════
   SKILL BARS — ANIMATED ON SCROLL
══════════════════════════════════════ */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillGrid = document.querySelector('.skills-grid');
if (skillGrid) skillObserver.observe(skillGrid);

/* ══════════════════════════════════════
   PORTFOLIO FILTER
══════════════════════════════════════ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.opacity        = show ? '1' : '0.2';
      card.style.pointerEvents  = show ? 'all' : 'none';
      card.style.transform      = show ? '' : 'scale(0.97)';
      card.style.transition     = 'opacity .4s ease, transform .4s ease';
    });
  });
});

/* ══════════════════════════════════════
   PROJECT MODAL
══════════════════════════════════════ */
function openProject(idx) {
  const p    = projects[idx];
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <img class="modal-hero-img" src="${p.img}" alt="${p.name}" loading="lazy"/>

    <div class="modal-meta">
      <div class="meta-item">
        <span class="meta-label">Proyek</span>
        <span class="meta-val">${p.num}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Kategori</span>
        <span class="meta-val">${p.cat}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Tahun</span>
        <span class="meta-val">${p.year}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Lokasi</span>
        <span class="meta-val">${p.loc}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Luas</span>
        <span class="meta-val">${p.area}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Tipe</span>
        <span class="meta-val">${p.type}</span>
      </div>
    </div>

    <h2 class="display display-md" style="margin-bottom:2rem">${p.name}</h2>

    <div class="modal-section">
      <div class="modal-section-title">Deskripsi Proyek</div>
      <p class="modal-text">${p.desc}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Konsep Desain</div>
      <p class="modal-text">${p.concept}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Site Analysis</div>
      <p class="modal-text">${p.site}</p>
      <div class="modal-diagram">[ Site Analysis Diagram — ${p.loc} ]</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Zoning & Program</div>
      <p class="modal-text">${p.zoning}</p>
      <div class="modal-diagram">[ Zoning Diagram ]</div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Denah, Tampak & Potongan</div>
      <div class="modal-diagram" style="margin-bottom:1px">[ Denah Lantai 1 ]</div>
      <div class="modal-img-grid">
        <div class="modal-diagram">[ Tampak Depan ]</div>
        <div class="modal-diagram">[ Potongan A-A' ]</div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Render Eksterior & Interior</div>
      <div class="modal-img-grid">
        ${p.imgs.map(src => `<img src="${src}&fit=crop&w=600" alt="Render" loading="lazy"/>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Kesimpulan</div>
      <p class="modal-text">${p.conclusion}</p>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════ */
function openLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}

/* ══════════════════════════════════════
   DOWNLOAD CV
══════════════════════════════════════ */
function downloadCV(e) {
  e.preventDefault();
  // Replace with real PDF URL: window.open('cv-aria-rahayu.pdf', '_blank');
  alert('📄 Download CV akan dimulai.\n\nGanti URL di script.js → fungsi downloadCV() dengan path file PDF Anda.');
}

/* ══════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProject();
    closeLightbox();
    closeMobileNav();
  }
});
