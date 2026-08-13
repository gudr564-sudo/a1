<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LY0HY7L01"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0LY0HY7L01');
  </script>
  <title>AURÉA — Fine Jewellery &amp; Watches</title>
  <meta name="description" content="AURÉA is a fine jewellery store: certified rings, necklaces, earrings and watches crafted to be handed down.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Cormorant:ital,wght@0,500;0,600;0,700;1,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body data-page="home">
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <div class="container header-inner">
      <button type="button" class="icon-btn menu-btn" data-drawer-open aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
      </button>
      <a class="brand" href="index.html">AURÉA<span>.</span></a>
      <nav class="main-nav" aria-label="Primary">
        <a href="index.html" aria-current="page">Home</a>
        <a href="products.html">Shop All</a>
        <a href="products.html?cat=rings">Rings</a>
        <a href="products.html?cat=necklaces">Necklaces</a>
        <a href="products.html?cat=bridal">Bridal</a>
      </nav>
      <div class="header-actions">
        <a class="icon-btn" href="cart.html" data-cart-link aria-label="Shopping bag">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="cart-badge" data-cart-badge hidden>0</span>
        </a>
      </div>
    </div>
  </header>

  <div class="drawer-scrim"></div>
  <nav class="drawer" id="mobile-nav" aria-label="Mobile">
    <div class="drawer-head">
      <span class="brand">AURÉA<span>.</span></span>
      <button type="button" class="icon-btn" data-drawer-close aria-label="Close menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
    <a href="index.html" aria-current="page">Home</a>
    <a href="products.html">Shop All</a>
    <a href="products.html?cat=rings">Rings</a>
    <a href="products.html?cat=necklaces">Necklaces</a>
    <a href="products.html?cat=earrings">Earrings</a>
    <a href="products.html?cat=bracelets">Bracelets</a>
    <a href="products.html?cat=watches">Watches</a>
    <a href="products.html?cat=bridal">Bridal</a>
    <a href="cart.html">Shopping Bag</a>
  </nav>

  <main id="main">
    <!-- Hero -->
    <section class="container hero">
      <div>
        <p class="hero-kicker">The Heirloom Collection</p>
        <h1>Made to be <em>handed down</em>.</h1>
        <p class="hero-sub">Certified stones, hallmarked golds, and watchmaking that keeps time for generations. Crafted slowly, worn forever.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="products.html">Shop the collection</a>
          <a class="btn btn-ghost" href="products.html?cat=rings">Explore rings</a>
        </div>
      </div>
      <div class="hero-visual" data-hero-art aria-hidden="true">
        <span class="hero-tag">Certified. Hallmarked. Yours.</span>
      </div>
    </section>

    <!-- Categories -->
    <section class="container section" aria-labelledby="cats-title">
      <div class="section-head">
        <div>
          <p class="section-kicker">The maison</p>
          <h2 id="cats-title">Shop by piece</h2>
        </div>
        <a class="link-more" href="products.html">View all
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
      <div class="cat-grid" data-cat-grid></div>
    </section>

    <!-- Featured products -->
    <section class="container section" aria-labelledby="featured-title">
      <div class="section-head">
        <div>
          <p class="section-kicker">Most treasured</p>
          <h2 id="featured-title">Signature pieces</h2>
        </div>
        <a class="link-more" href="products.html">Shop all
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
      <div class="product-grid" data-featured></div>
    </section>

    <!-- Value props -->
    <section class="container">
      <div class="props">
        <div class="prop">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"/><path d="M14 9h4l3 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M9 18h6"/></svg>
          <div>
            <h3>Free insured shipping over ₹4,999</h3>
            <p>Fully insured, signature-on-delivery across India.</p>
          </div>
        </div>
        <div class="prop">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
          <div>
            <h3>Certified &amp; hallmarked</h3>
            <p>IGI-certified stones and BIS-hallmarked golds, every time.</p>
          </div>
        </div>
        <div class="prop">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <div>
            <h3>Lifetime care</h3>
            <p>Free cleaning, polishing, and plating touch-ups for life.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Editorial banner -->
    <section class="container section">
      <div class="editorial reveal">
        <p class="section-kicker" style="color:#F9A8D4">The AURÉA promise</p>
        <h2>Jewellery with a lineage.</h2>
        <p>Every stone is traceable, every gram of gold responsibly sourced, every piece finished by hand in our atelier.</p>
        <a class="btn btn-ghost" href="products.html">Discover the maison</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html">AURÉA<span>.</span></a>
          <p>Fine jewellery and watches, made slowly and certified properly — for moments that deserve permanence.</p>
        </div>
        <div class="footer-col">
          <h3>Shop</h3>
          <ul>
            <li><a href="products.html">All products</a></li>
            <li><a href="products.html?cat=rings">Rings</a></li>
            <li><a href="products.html?cat=necklaces">Necklaces</a></li>
            <li><a href="products.html?cat=watches">Watches</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Help &amp; Legal</h3>
          <ul>
            <li><a href="cart.html">Shopping bag</a></li>
            <li><a href="privacy.html">Privacy policy</a></li>
            <li><a href="terms.html">Terms &amp; conditions</a></li>
            <li><a href="disclaimer.html">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 AURÉA. Demo store — for design showcase only.</span>
        <span><a href="privacy.html">Privacy</a> · <a href="terms.html">Terms</a> · <a href="disclaimer.html">Disclaimer</a></span>
      </div>
    </div>
  </footer>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
