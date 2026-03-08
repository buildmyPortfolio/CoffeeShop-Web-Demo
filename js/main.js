/* ============================================================
   BREW HAVEN COFFEE — Main JavaScript
   - Menu data & dynamic rendering
   - Menu category tabs
   - Menu item modal popup
   - Navbar scroll behaviour
   - Mobile hamburger menu
   - IntersectionObserver fade-in animations
   - Newsletter form feedback
============================================================ */

'use strict';

/* ============================================================
   MENU DATA
============================================================ */
const menuData = {
  espresso: {
    priceRange: '₱120 – ₱180',
    items: [
      {
        name: 'Espresso',
        emoji: '☕',
        description:
          'A single or double shot of pure, rich espresso pulled to perfection. Intensely bold with a smooth golden crema on top — the foundation of all great coffee.',
        price: '₱120 – ₱140',
        tags: ['Hot', 'Classic', 'Bold', 'Strong'],
      },
      {
        name: 'Americano',
        emoji: '☕',
        description:
          'Smooth espresso diluted with hot water, creating a longer, lighter yet deeply flavorful coffee. Clean, crisp, and deeply satisfying for any time of day.',
        price: '₱130 – ₱150',
        tags: ['Hot', 'Classic', 'Mild'],
      },
      {
        name: 'Cappuccino',
        emoji: '☕',
        description:
          'A timeless classic — rich espresso meets velvety steamed milk and a generous, silky layer of thick microfoam. Perfectly balanced and utterly comforting.',
        price: '₱140 – ₱160',
        tags: ['Hot', 'Creamy', 'Frothy', 'Classic'],
      },
      {
        name: 'Latte',
        emoji: '☕',
        description:
          'Smooth, creamy espresso with a generous pour of steamed milk. Silky, comforting, and perfectly balanced — our most popular morning staple.',
        price: '₱145 – ₱165',
        tags: ['Hot', 'Creamy', 'Smooth', 'Popular'],
      },
      {
        name: 'Flat White',
        emoji: '☕',
        description:
          'Velvety espresso paired with precision microfoam milk. Stronger than a latte, smoother than a cappuccino — a barista favourite for those who know their coffee.',
        price: '₱150 – ₱170',
        tags: ['Hot', 'Velvety', 'Strong'],
      },
      {
        name: 'Mocha',
        emoji: '☕',
        description:
          'A delightful blend of rich espresso, premium dark chocolate, and steamed milk, crowned with a swirl of whipped cream. Indulgent, comforting, and absolutely irresistible.',
        price: '₱155 – ₱175',
        tags: ['Hot', 'Chocolate', 'Indulgent'],
      },
    ],
  },

  iced: {
    priceRange: '₱140 – ₱200',
    items: [
      {
        name: 'Iced Americano',
        emoji: '🧊',
        description:
          'Chilled espresso poured over a generous heap of ice. Clean, refreshing, and boldly flavoured — the perfect wake-up call on a warm day.',
        price: '₱140 – ₱160',
        tags: ['Iced', 'Classic', 'Refreshing', 'Bold'],
      },
      {
        name: 'Iced Latte',
        emoji: '🧊',
        description:
          'Rich espresso combined with cold milk over ice. Smooth, creamy, and beautifully refreshing — a daily essential for many of our regulars.',
        price: '₱150 – ₱170',
        tags: ['Iced', 'Creamy', 'Classic', 'Smooth'],
      },
      {
        name: 'Iced Vanilla Latte',
        emoji: '🧊',
        description:
          'A sweet, aromatic vanilla-flavoured iced latte with espresso and cold milk. Smooth and elegant with a delicate vanilla finish that lingers pleasantly.',
        price: '₱160 – ₱180',
        tags: ['Iced', 'Sweet', 'Vanilla'],
      },
      {
        name: 'Iced Caramel Macchiato',
        emoji: '🧊',
        description:
          'Beautiful layers of vanilla milk, bold espresso, and a generous drizzle of rich caramel. A stunning drink as delicious to look at as it is to sip.',
        price: '₱170 – ₱195',
        tags: ['Iced', 'Caramel', 'Layered', 'Sweet'],
      },
      {
        name: 'Iced Mocha',
        emoji: '🧊',
        description:
          'A refreshing iced chocolate espresso drink with cold milk poured over ice. The marriage of rich chocolate and bold coffee — cool, creamy, and deeply satisfying.',
        price: '₱165 – ₱185',
        tags: ['Iced', 'Chocolate', 'Indulgent'],
      },
    ],
  },

  signature: {
    priceRange: '₱160 – ₱220',
    items: [
      {
        name: 'Spanish Latte',
        emoji: '✨',
        description:
          'A beloved Filipino-Spanish classic — rich double espresso combined with sweetened condensed milk for a uniquely smooth, creamy, and deeply indulgent experience. Our best-seller.',
        price: '₱160 – ₱185',
        tags: ['Signature', 'Creamy', 'Sweet', 'Best-Seller'],
      },
      {
        name: 'Salted Caramel Latte',
        emoji: '✨',
        description:
          'The ultimate balance of sweet, rich caramel and a whisper of sea salt foam. Every sip is a perfectly orchestrated sweet-and-salty symphony that keeps you coming back.',
        price: '₱175 – ₱200',
        tags: ['Signature', 'Caramel', 'Sweet-Salty'],
      },
      {
        name: 'Hazelnut Latte',
        emoji: '✨',
        description:
          'Espresso infused with rich, aromatic hazelnut flavour paired with silky steamed milk. Warm, nutty, and utterly comforting — like a hug in a cup.',
        price: '₱165 – ₱190',
        tags: ['Signature', 'Hazelnut', 'Nutty', 'Warm'],
      },
      {
        name: 'Brown Sugar Oat Latte',
        emoji: '✨',
        description:
          'Creamy oat milk paired with caramelised brown sugar syrup and smooth espresso. Plant-based, naturally sweet, and absolutely delicious — our vegan-friendly star.',
        price: '₱175 – ₱205',
        tags: ['Signature', 'Oat Milk', 'Vegan-Friendly', 'Sweet'],
      },
    ],
  },

  noncoffee: {
    priceRange: '₱140 – ₱190',
    items: [
      {
        name: 'Matcha Latte',
        emoji: '🍵',
        description:
          'Premium ceremonial-grade Japanese matcha carefully whisked with velvety steamed milk. Earthy, creamy, and strikingly vibrant — a peaceful alternative to coffee.',
        price: '₱155 – ₱180',
        tags: ['Non-Coffee', 'Matcha', 'Earthy'],
      },
      {
        name: 'Hot Chocolate',
        emoji: '🍫',
        description:
          'Rich, velvety premium melted chocolate blended with steamed milk. The ultimate warm comfort drink for chocolate lovers — thick, indulgent, and deeply satisfying.',
        price: '₱145 – ₱165',
        tags: ['Non-Coffee', 'Chocolate', 'Comfort'],
      },
      {
        name: 'Chai Latte',
        emoji: '🍵',
        description:
          'Aromatic spiced black tea with warm cinnamon, cardamom, ginger, and cloves, beautifully blended with steamed milk for a warming, soul-comforting experience.',
        price: '₱155 – ₱175',
        tags: ['Non-Coffee', 'Spiced', 'Warming', 'Chai'],
      },
      {
        name: 'Strawberry Milk',
        emoji: '🍓',
        description:
          'Fresh, vibrant strawberry syrup blended with ice-cold creamy milk. Sweet, fruity, refreshing, and joyful — the perfect afternoon treat for all ages.',
        price: '₱150 – ₱170',
        tags: ['Non-Coffee', 'Fruity', 'Sweet', 'Cold'],
      },
    ],
  },

  frappe: {
    priceRange: '₱180 – ₱240',
    items: [
      {
        name: 'Caramel Frappe',
        emoji: '🥤',
        description:
          'A luscious blend of coffee, ice, and caramel syrup, topped with a generous cloud of whipped cream and an artful caramel drizzle. Pure, unapologetic indulgence.',
        price: '₱185 – ₱220',
        tags: ['Frappe', 'Caramel', 'Blended', 'Indulgent'],
      },
      {
        name: 'Mocha Frappe',
        emoji: '🥤',
        description:
          'Coffee and premium chocolate blended with ice to silky, creamy perfection, crowned with whipped cream. Rich, cold, and deeply decadent — a chocolate lover\'s dream.',
        price: '₱185 – ₱220',
        tags: ['Frappe', 'Chocolate', 'Blended'],
      },
      {
        name: 'Java Chip Frappe',
        emoji: '🥤',
        description:
          'Coffee frappe loaded generously with chocolate chips throughout, topped with whipped cream and a chocolate drizzle. Crunchy, creamy, and absolutely over-the-top satisfying.',
        price: '₱195 – ₱235',
        tags: ['Frappe', 'Chocolate Chips', 'Crunchy'],
      },
      {
        name: 'Matcha Frappe',
        emoji: '🥤',
        description:
          'Premium ceremonial matcha blended smooth with milk and crushed ice, topped with whipped cream. Earthy, creamy, refreshingly cool — matcha at its most delightful.',
        price: '₱190 – ₱230',
        tags: ['Frappe', 'Matcha', 'Blended', 'Green Tea'],
      },
    ],
  },

  pastries: {
    priceRange: '₱90 – ₱160',
    items: [
      {
        name: 'Butter Croissant',
        emoji: '🥐',
        description:
          'A beautifully golden, impossibly flaky French pastry made with the finest pure butter. Crispy and shattering on the outside, soft and airy within. Baked fresh every morning.',
        price: '₱95 – ₱115',
        tags: ['Pastry', 'Classic', 'Buttery', 'Baked Fresh'],
      },
      {
        name: 'Chocolate Croissant',
        emoji: '🥐',
        description:
          'A flaky, golden butter croissant generously filled with premium dark Belgian chocolate. Pure perfection for chocolate lovers — best enjoyed warm from the oven.',
        price: '₱105 – ₱125',
        tags: ['Pastry', 'Chocolate', 'Baked Fresh'],
      },
      {
        name: 'Blueberry Muffin',
        emoji: '🫐',
        description:
          'A soft, incredibly moist muffin bursting with plump, juicy fresh blueberries and crowned with a delicate golden sugar crust. Wholesome, fruity, and utterly satisfying.',
        price: '₱95 – ₱110',
        tags: ['Pastry', 'Fruity', 'Blueberry', 'Baked Fresh'],
      },
      {
        name: 'Banana Bread',
        emoji: '🍌',
        description:
          'A rich, moist banana loaf with deep caramelised banana flavour and a warming hint of cinnamon. Dense, satisfying, and incredibly comforting — a timeless classic.',
        price: '₱100 – ₱120',
        tags: ['Pastry', 'Banana', 'Moist', 'Baked Fresh'],
      },
      {
        name: 'Cheesecake Slice',
        emoji: '🍰',
        description:
          'A luxuriously rich, smooth baked New York-style cheesecake resting on a buttery graham cracker crust. Creamy, tangy, perfectly set — undeniably indulgent.',
        price: '₱140 – ₱160',
        tags: ['Pastry', 'Creamy', 'Baked', 'Premium'],
      },
    ],
  },

  addons: {
    priceRange: '₱25 – ₱40',
    items: [
      {
        name: 'Extra Espresso Shot',
        emoji: '☕',
        description: 'Boost any drink with an extra freshly pulled espresso shot for that extra caffeine kick.',
        price: '₱30',
        tags: ['Add-On', 'Espresso', 'Boost'],
      },
      {
        name: 'Oat Milk / Almond Milk',
        emoji: '🌿',
        description: 'Swap your regular dairy for creamy oat milk or subtly nutty almond milk in any drink.',
        price: '₱40',
        tags: ['Add-On', 'Dairy-Free', 'Vegan'],
      },
      {
        name: 'Flavored Syrup',
        emoji: '🍯',
        description: 'Choose from Vanilla, Caramel, or Hazelnut syrup to customise and elevate your drink.',
        price: '₱25',
        tags: ['Add-On', 'Vanilla', 'Caramel', 'Hazelnut'],
      },
      {
        name: 'Whipped Cream',
        emoji: '🍦',
        description: 'A generous, airy cloud of freshly piped whipped cream to top off any drink.',
        price: '₱30',
        tags: ['Add-On', 'Topping', 'Creamy'],
      },
    ],
  },
};

const categoryLabels = {
  espresso: 'Espresso Bar',
  iced:     'Iced Coffee',
  signature:'Signature Drinks',
  noncoffee:'Non-Coffee',
  frappe:   'Frappes / Blended',
  pastries: 'Pastries & Snacks',
  addons:   'Add-Ons',
};

/* ============================================================
   ITEM IMAGE MAP
   Maps each menu item name to its local asset file.
   Falls back to FALLBACK_IMAGE for items without a dedicated photo.
============================================================ */
const itemImages = {
  // Espresso Bar
  'Espresso':               'assets/Espresso.jpg',
  'Americano':              'assets/Americano.jpg',
  'Cappuccino':             'assets/Cappuccino.jpg',
  'Latte':                  'assets/Latte.jpg',
  'Flat White':             'assets/Coffee.jpg',
  'Mocha':                  'assets/Coffee.jpg',
  // Iced Coffee
  'Iced Americano':         'assets/Iced Americano.jpg',
  'Iced Latte':             'assets/Iced Latte.jpg',
  'Iced Vanilla Latte':     'assets/Iced Vanilla Latte.jpg',
  'Iced Caramel Macchiato': 'assets/Iced Caramel Macchiato.jpg',
  'Iced Mocha':             'assets/Coffee.jpg',
  // Signature
  'Spanish Latte':          'assets/Spanish Latte.jpg',
  'Salted Caramel Latte':   'assets/Salted Caramel Latte.jpg',
  'Hazelnut Latte':         'assets/Hazelnut Latte.jpg',
  'Brown Sugar Oat Latte':  'assets/Brown Sugar Oat Latte.jpg',
  // Non-Coffee
  'Matcha Latte':           'assets/Matcha Latte.jpg',
  'Hot Chocolate':          'assets/Hot Chocolate.jpg',
  'Chai Latte':             'assets/Chai Latte.jpg',
  'Strawberry Milk':        'assets/Strawberry Milk.jpg',
  // Frappes
  'Caramel Frappe':         'assets/Caramel Frappe.jpg',
  'Mocha Frappe':           'assets/Mocha Frappe.jpg',
  'Java Chip Frappe':       'assets/Java Chip Frappe.jpg',
  'Matcha Frappe':          'assets/Matcha Frappe.jpg',
  // Pastries
  'Butter Croissant':       'assets/Butter Croissant.jpg',
  'Chocolate Croissant':    'assets/Chocolate Croissan.jpg',
  'Blueberry Muffin':       'assets/Blueberry Muffin.jpg',
  'Banana Bread':           'assets/Banana Bread.jpg',
  'Cheesecake Slice':       'assets/Cheesecake Slic.jpg',
  // Add-Ons
  'Extra Espresso Shot':    'assets/Espresso.jpg',
  'Oat Milk / Almond Milk': 'assets/Coffee.jpg',
  'Flavored Syrup':         'assets/Coffee.jpg',
  'Whipped Cream':          'assets/Coffee.jpg',
};
const FALLBACK_IMAGE = 'assets/Coffee.jpg';

/* ============================================================
   RENDER MENU
============================================================ */
function renderMenu(category) {
  const grid        = document.getElementById('menuGrid');
  const banner      = document.getElementById('priceRangeBanner');
  const bannerText  = document.getElementById('priceRangeText');
  const data        = menuData[category];

  if (!data) return;

  // Update price banner
  bannerText.textContent = `Price Range: ${data.priceRange}`;

  // Clear grid
  grid.innerHTML = '';

  if (category === 'addons') {
    // Use a wider two-column layout for add-ons
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';

    data.items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'addon-card';
      card.style.animationDelay = `${i * 0.07}s`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View details for ${item.name}`);

      const addonImg = itemImages[item.name] || FALLBACK_IMAGE;
      card.innerHTML = `
        <div class="addon-card-left">
          <div class="addon-thumb">
            <img src="${addonImg}" alt="${item.name}" loading="lazy" />
          </div>
          <div>
            <div class="addon-name">${item.name}</div>
            <div class="addon-desc">${item.description}</div>
          </div>
        </div>
        <span class="addon-price">${item.price}</span>
      `;

      card.addEventListener('click',  () => openModal(item, category));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item, category); } });
      grid.appendChild(card);
    });

  } else {
    grid.style.gridTemplateColumns = '';

    data.items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${i * 0.07}s`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View details for ${item.name}`);

      const imgSrc = itemImages[item.name] || FALLBACK_IMAGE;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img class="card-img" src="${imgSrc}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-footer">
            <span class="card-price">${item.price}</span>
            <div class="card-btn" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      `;

      card.addEventListener('click',  () => openModal(item, category));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item, category); } });
      grid.appendChild(card);
    });
  }
}

/* ============================================================
   MODAL
============================================================ */
function openModal(item, category) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  const tagsHTML = item.tags
    .map(t => `<span class="modal-tag">${t}</span>`)
    .join('');

  const modalImg = itemImages[item.name] || FALLBACK_IMAGE;
  content.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${modalImg}" alt="${item.name}" loading="eager" />
    </div>
    <div class="modal-header">
      <span class="modal-category">${categoryLabels[category]}</span>
      <h2 class="modal-item-title" id="modalItemTitle">${item.name}</h2>
    </div>
    <div class="modal-body">
      <p class="modal-description">${item.description}</p>
      <div class="modal-price-tag">
        <i class="fa-solid fa-tag" aria-hidden="true"></i>
        ${item.price}
      </div>
      <div class="modal-tags" aria-label="Tags">${tagsHTML}</div>
      <div class="modal-actions">
        <button class="btn-modal-primary" onclick="handleAddToOrder('${item.name}')">
          <i class="fa-solid fa-plus" aria-hidden="true"></i> Add to Order
        </button>
        <button class="btn-modal-secondary" onclick="closeModal()">Close</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus the modal for accessibility
  setTimeout(() => {
    const firstFocusable = overlay.querySelector('button, [tabindex]');
    if (firstFocusable) firstFocusable.focus();
  }, 50);
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function handleAddToOrder(itemName) {
  const btn = document.querySelector('.btn-modal-primary');
  if (!btn) return;

  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
  btn.style.background = '#27ae60';

  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    closeModal();
  }, 1600);
}

/* ============================================================
   MENU TABS
============================================================ */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderMenu(btn.dataset.category);
  });
});

/* ============================================================
   NAVBAR SCROLL EFFECT
============================================================ */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 70) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

/* ============================================================
   MOBILE HAMBURGER MENU
============================================================ */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMobileNav() {
  hamburger.classList.add('active');
  navLinks.classList.add('active');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('active') ? closeMobileNav() : openMobileNav();
});

navOverlay.addEventListener('click', closeMobileNav);

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

/* ============================================================
   MODAL CLOSE HANDLERS
============================================================ */
document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeMobileNav();
  }
});

/* ============================================================
   SCROLL ANIMATIONS — IntersectionObserver
============================================================ */
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ============================================================
   SMOOTH ACTIVE NAV LINK ON SCROLL
============================================================ */
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.remove('active-link');
          if (a.getAttribute('href') === `#${id}`) {
            a.classList.add('active-link');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => navObserver.observe(s));

/* ============================================================
   NEWSLETTER FORM
============================================================ */
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const btn   = newsletterForm.querySelector('button');
    const original = btn.innerHTML;

    if (!input.value.trim()) return;

    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.style.background = '#27ae60';
    input.value = '';
    input.placeholder = 'Thank you for subscribing!';

    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      input.placeholder = 'Enter your email';
    }, 3000);
  });
}

/* ============================================================
   GALLERY LIGHTBOX (simple zoom effect)
============================================================ */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;

    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
      position:fixed; inset:0; z-index:9999;
      background:rgba(0,0,0,0.92);
      display:flex; align-items:center; justify-content:center;
      padding:20px; cursor:zoom-out;
      animation: fadeIn 0.25s ease;
    `;

    const style = document.createElement('style');
    style.textContent = '@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }';
    document.head.appendChild(style);

    const imgClone = document.createElement('img');
    imgClone.src = img.src.replace(/w=\d+/, 'w=1200');
    imgClone.alt = img.alt;
    imgClone.style.cssText = `
      max-width:100%; max-height:90vh;
      border-radius:12px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6);
      object-fit:contain;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeBtn.style.cssText = `
      position:absolute; top:20px; right:20px;
      width:44px; height:44px; border-radius:50%;
      background:rgba(255,255,255,0.15); color:#fff;
      border:none; cursor:pointer; font-size:1.1rem;
      display:flex; align-items:center; justify-content:center;
      transition:background 0.2s;
    `;
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = 'rgba(255,255,255,0.25)');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = 'rgba(255,255,255,0.15)');

    const closeLightbox = () => {
      document.body.removeChild(lightbox);
      document.head.removeChild(style);
      document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    closeBtn.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { closeLightbox(); document.removeEventListener('keydown', esc); }
    });

    lightbox.appendChild(imgClone);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
  });
});

/* ============================================================
   DARK MODE TOGGLE
============================================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const htmlEl      = document.documentElement;

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark'
    ? 'fa-solid fa-sun'
    : 'fa-solid fa-moon';
}

// Load saved preference; default to 'light'
const savedTheme = localStorage.getItem('brew-haven-theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('brew-haven-theme', next);
  updateThemeIcon(next);
});

/* ============================================================
   INITIALISE
============================================================ */
renderMenu('espresso');
handleNavbarScroll();
