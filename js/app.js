/* AURÉA — shared app logic: icons, cart, rendering, page controllers */
(function () {
  "use strict";

  /* ---------- SVG icon system (skill rule: no-emoji-icons, vector-only) ---------- */
  var ICON_PATHS = {
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
    hanger: '<path d="M14.5 5.5A2.5 2.5 0 1 0 12 8v1"/><path d="m12 9-8.6 6.1a1.2 1.2 0 0 0 .7 2.2h15.8a1.2 1.2 0 0 0 .7-2.2L12 9z"/>',
    jacket: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/><path d="M12 4v18"/>',
    pants: '<path d="M7 3h10l2 18h-5.5L12 12l-1.5 9H5L7 3z"/><path d="M7.4 7h9.2"/>',
    shoe: '<path d="M2 18h20v2H2z"/><path d="M2 18v-3c0-1.2 1-2 2.2-2H7l3-4 2 2c1.4 1.2 3.2 2 5 2 2.8 0 5 2.2 5 5"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="none"/>',
    truck: '<path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"/><path d="M14 9h4l3 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M9 18h6"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    ring: '<circle cx="12" cy="14" r="7"/><path d="M9.5 7.2 11 4h2l1.5 3.2"/><path d="M9.5 7.2h5"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    watch: '<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1.5 1.5"/><path d="m16.1 7.7-.8-4.1a2 2 0 0 0-2-1.6h-2.7a2 2 0 0 0-2 1.6l-.7 4.1"/><path d="m7.9 16.4.8 4a2 2 0 0 0 2 1.6h2.7a2 2 0 0 0 2-1.6l.8-4"/>',
    necklace: '<path d="M4 4c2 5 5 7.5 8 7.5S18 9 20 4"/><path d="M12 11.5V14"/><path d="m12 14-2 3 2 3.5L14 17l-2-3z"/>',
    earrings: '<circle cx="8" cy="5" r="1.5"/><path d="M8 6.5v2.5"/><path d="m8 9-1.8 3.2L8 16l1.8-3.8L8 9z"/><circle cx="16" cy="5" r="1.5"/><path d="M16 6.5v2.5"/><path d="m16 9-1.8 3.2L16 16l1.8-3.8L16 9z"/>',
    bracelet: '<circle cx="12" cy="13" r="7"/><path d="M12 6V4"/><circle cx="12" cy="3" r="1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>'
  };

  function icon(name, size) {
    size = size || 20;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON_PATHS[name] || "") + "</svg>";
  }

  /* ---------- Data helpers ---------- */
  var PRODUCTS = window.ELAN_PRODUCTS || [];
  var CATEGORIES = window.ELAN_CATEGORIES || [];

  function byId(id) {
    for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
    return null;
  }
  function catById(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return null;
  }
  function catLabel(id) { var c = catById(id); return c ? c.label : id; }
  function catIcon(id) { var c = catById(id); return c ? c.icon : "shirt"; }

  /* Locale-aware price formatting (skill rule: number-formatting) */
  var inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  function money(n) { return inr.format(n); }

  function offPct(p) {
    return p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
  }

  /* Product artwork: free stock photo over gradient fallback (no CLS — aspect-ratio reserved).
     If the image fails to load (offline / broken URL), onerror removes it and the
     gradient + silhouette placeholder stays visible. */
  function photoTag(url, w, eager) {
    var h = Math.round((w * 4) / 3);
    return '<img class="ph-img" src="' + url + "?auto=format&fit=crop&q=80&w=" + w + "&h=" + h + '" alt="" ' + (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' onerror="this.remove()">';
  }
  function art(p, iconSize, extraClass, imgW) {
    var isPdp = extraClass === "pdp-img";
    var img = p.img ? photoTag(p.img, imgW || 600, isPdp) : "";
    return '<div class="' + (extraClass || "p-img") + '" style="background:linear-gradient(160deg,' + p.tones[0] + " 0%," + p.tones[1] + ' 100%)" role="img" aria-label="' + p.name + '">' + icon(catIcon(p.category), iconSize || 96) + img + "</div>";
  }

  /* ---------- Cart (localStorage) ---------- */
  var CART_KEY = "aurea_cart_v1";

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateBadge();
  }
  function cartCount() {
    return getCart().reduce(function (n, it) { return n + it.qty; }, 0);
  }
  function addToCart(id, size, qty) {
    var p = byId(id);
    if (!p) return;
    size = size || p.sizes[Math.min(2, p.sizes.length - 1)];
    qty = qty || 1;
    var cart = getCart();
    var found = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id && cart[i].size === size) { found = cart[i]; break; }
    }
    if (found) found.qty = Math.min(found.qty + qty, 10);
    else cart.push({ id: id, size: size, qty: qty });
    saveCart(cart);
    toast(p.name + " added to bag");
  }
  function setQty(id, size, qty) {
    var cart = getCart().map(function (it) {
      if (it.id === id && it.size === size) it.qty = Math.max(1, Math.min(10, qty));
      return it;
    });
    saveCart(cart);
  }
  function removeItem(id, size) {
    var cart = getCart().filter(function (it) { return !(it.id === id && it.size === size); });
    saveCart(cart);
  }

  function updateBadge() {
    var badge = document.querySelector("[data-cart-badge]");
    if (!badge) return;
    var n = cartCount();
    badge.textContent = n > 99 ? "99+" : String(n);
    if (n > 0) badge.removeAttribute("hidden");
    else badge.setAttribute("hidden", "");
    var link = document.querySelector("[data-cart-link]");
    if (link) link.setAttribute("aria-label", "Shopping bag, " + n + " item" + (n === 1 ? "" : "s"));
  }

  /* ---------- Toast (aria-live polite, auto-dismiss 3.5s) ---------- */
  function toastRegion() {
    var r = document.querySelector(".toast-region");
    if (!r) {
      r = document.createElement("div");
      r.className = "toast-region";
      r.setAttribute("aria-live", "polite");
      document.body.appendChild(r);
    }
    return r;
  }
  function toast(msg) {
    var r = toastRegion();
    var t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = icon("check", 18) + "<span></span>";
    t.querySelector("span").textContent = msg;
    r.appendChild(t);
    setTimeout(function () {
      t.classList.add("leaving");
      setTimeout(function () { t.remove(); }, 200);
    }, 3500);
  }

  /* ---------- Product card ---------- */
  function productCard(p) {
    var badge = p.badge
      ? '<span class="p-badge' + (p.badge === "Sale" ? " sale" : "") + '">' + p.badge + "</span>"
      : "";
    var was = p.mrp
      ? ' <span class="was">' + money(p.mrp) + '</span> <span class="off">' + offPct(p) + "% off</span>"
      : "";
    return (
      '<article class="product-card">' +
        art(p, 88) +
        badge +
        '<button type="button" class="quick-add" data-quick-add="' + p.id + '" aria-label="Add ' + p.name + ' to bag">' + icon("plus", 20) + "</button>" +
        '<p class="p-cat">' + catLabel(p.category) + "</p>" +
        '<h3 class="p-name"><a href="product.html?id=' + p.id + '">' + p.name + "</a></h3>" +
        '<p class="p-price"><span class="now">' + money(p.price) + "</span>" + was + "</p>" +
      "</article>"
    );
  }

  function renderGrid(el, items) {
    if (!items.length) {
      el.innerHTML =
        '<div class="empty-state" style="grid-column:1/-1">' +
          icon("bag", 40) +
          "<h2>Nothing here yet</h2>" +
          "<p>Try a different category or browse the full collection.</p>" +
          '<a class="btn btn-ghost" href="products.html">View all products</a>' +
        "</div>";
      return;
    }
    el.innerHTML = items.map(productCard).join("");
  }

  /* Delegated quick-add clicks */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-quick-add]") : null;
    if (btn) addToCart(btn.getAttribute("data-quick-add"));
  });

  /* ---------- Mobile drawer ---------- */
  function initDrawer() {
    var open = document.querySelector("[data-drawer-open]");
    var close = document.querySelector("[data-drawer-close]");
    var scrim = document.querySelector(".drawer-scrim");
    if (!open) return;
    function show() {
      document.body.classList.add("drawer-open");
      open.setAttribute("aria-expanded", "true");
      if (close) close.focus();
    }
    function hide() {
      document.body.classList.remove("drawer-open");
      open.setAttribute("aria-expanded", "false");
      open.focus();
    }
    open.addEventListener("click", show);
    if (close) close.addEventListener("click", hide);
    if (scrim) scrim.addEventListener("click", hide);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("drawer-open")) hide();
    });
  }

  /* ---------- Scroll reveal (respects reduced motion via CSS) ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Page: home ---------- */
  function initHome() {
    var catGrid = document.querySelector("[data-cat-grid]");
    if (catGrid) {
      catGrid.innerHTML = CATEGORIES.slice(0, 3).map(function (c) {
        return (
          '<a class="cat-tile reveal" href="products.html?cat=' + c.id + '" style="background:linear-gradient(160deg,' + c.tones[0] + " 0%," + c.tones[1] + ' 100%)">' +
            '<span class="tile-art">' + icon(c.icon, 110) + "</span>" +
            (c.img ? photoTag(c.img, 700) : "") +
            '<span class="tile-label"><span>' + c.label + "</span>" + icon("arrowRight", 22) + "</span>" +
          "</a>"
        );
      }).join("");
    }
    var featured = document.querySelector("[data-featured]");
    if (featured) {
      var picks = PRODUCTS.filter(function (p) { return p.badge; }).slice(0, 4);
      renderGrid(featured, picks.length ? picks : PRODUCTS.slice(0, 4));
    }
    var heroArt = document.querySelector("[data-hero-art]");
    if (heroArt) {
      heroArt.insertAdjacentHTML(
        "afterbegin",
        icon("gem", 180) + (window.ELAN_HERO_IMG ? photoTag(window.ELAN_HERO_IMG, 900, true) : "")
      );
    }
  }

  /* ---------- Page: products ---------- */
  function initProducts() {
    var grid = document.querySelector("[data-grid]");
    var chips = document.querySelector("[data-chips]");
    var sort = document.querySelector("[data-sort]");
    var count = document.querySelector("[data-count]");
    if (!grid) return;

    var params = new URLSearchParams(location.search);
    var state = { cat: params.get("cat") || "all", sort: "featured" };

    function chipHtml(id, label) {
      return '<button type="button" class="chip" data-cat="' + id + '" aria-pressed="' + (state.cat === id) + '">' + label + "</button>";
    }

    function drawChips() {
      chips.innerHTML =
        chipHtml("all", "All") +
        CATEGORIES.map(function (c) { return chipHtml(c.id, c.label); }).join("");
    }

    function apply() {
      var items = state.cat === "all"
        ? PRODUCTS.slice()
        : PRODUCTS.filter(function (p) { return p.category === state.cat; });
      if (state.sort === "price-asc") items.sort(function (a, b) { return a.price - b.price; });
      if (state.sort === "price-desc") items.sort(function (a, b) { return b.price - a.price; });
      if (state.sort === "rating") items.sort(function (a, b) { return b.rating - a.rating; });
      count.textContent = items.length + " product" + (items.length === 1 ? "" : "s") +
        (state.cat !== "all" ? " in " + catLabel(state.cat) : "");
      renderGrid(grid, items);
    }

    chips.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-cat]");
      if (!chip) return;
      state.cat = chip.getAttribute("data-cat");
      /* keep URL shareable (deep-linking); file:// may disallow replaceState */
      try {
        var url = state.cat === "all" ? "products.html" : "products.html?cat=" + state.cat;
        history.replaceState(null, "", url);
      } catch (err) { /* no-op on file:// */ }
      drawChips();
      apply();
    });

    if (sort) sort.addEventListener("change", function () { state.sort = sort.value; apply(); });

    drawChips();
    apply();
  }

  /* ---------- Page: product detail ---------- */
  function initProduct() {
    var root = document.querySelector("[data-pdp]");
    if (!root) return;
    var params = new URLSearchParams(location.search);
    var p = byId(params.get("id")) || PRODUCTS[0];
    var state = { size: p.sizes[Math.min(2, p.sizes.length - 1)], qty: 1 };

    document.title = p.name + " — AURÉA";

    var was = p.mrp
      ? '<span class="was">' + money(p.mrp) + '</span><span class="off">' + offPct(p) + "% off</span>"
      : "";

    root.innerHTML =
      '<nav class="breadcrumb" aria-label="Breadcrumb">' +
        '<a href="index.html">Home</a><span class="sep">/</span>' +
        '<a href="products.html?cat=' + p.category + '">' + catLabel(p.category) + "</a>" +
        '<span class="sep">/</span><span aria-current="page">' + p.name + "</span>" +
      "</nav>" +
      '<div class="pdp">' +
        art(p, 170, "pdp-img", 900) +
        '<div class="pdp-info">' +
          (p.badge ? '<span class="p-badge' + (p.badge === "Sale" ? " sale" : "") + '" style="position:static;display:inline-block;margin-bottom:12px">' + p.badge + "</span>" : "") +
          "<h1>" + p.name + "</h1>" +
          '<p class="rating">' + icon("star", 16) + '<strong>' + p.rating.toFixed(1) + "</strong>&nbsp;(" + p.reviews + " reviews)</p>" +
          '<p class="pdp-price"><span class="now">' + money(p.price) + "</span>" + was + "</p>" +
          '<p class="pdp-desc">' + p.desc + "</p>" +
          '<div class="opt-label"><span>Size</span><span class="hint">Size / length</span></div>' +
          '<div class="size-row" role="group" aria-label="Select size" data-sizes></div>' +
          '<div class="opt-label"><span>Quantity</span></div>' +
          '<div class="qty-stepper">' +
            '<button type="button" data-qty="-1" aria-label="Decrease quantity">' + icon("minus", 18) + "</button>" +
            '<span class="qty-val" data-qty-val aria-live="polite">1</span>' +
            '<button type="button" data-qty="1" aria-label="Increase quantity">' + icon("plus", 18) + "</button>" +
          "</div>" +
          '<div class="pdp-actions">' +
            '<button type="button" class="btn btn-primary" data-add>' + icon("bag", 18) + "Add to bag</button>" +
          "</div>" +
          '<div class="pdp-perks">' +
            '<p class="perk">' + icon("truck", 20) + "Free insured delivery on orders over ₹4,999</p>" +
            '<p class="perk">' + icon("rotate", 20) + "Certified &amp; BIS-hallmarked metals</p>" +
            '<p class="perk">' + icon("shield", 20) + "Secure checkout &amp; buyer protection</p>" +
          "</div>" +
        "</div>" +
      "</div>";

    var sizeRow = root.querySelector("[data-sizes]");
    function drawSizes() {
      sizeRow.innerHTML = p.sizes.map(function (s) {
        return '<button type="button" class="size-btn" data-size="' + s + '" aria-pressed="' + (s === state.size) + '">' + s + "</button>";
      }).join("");
    }
    sizeRow.addEventListener("click", function (e) {
      var b = e.target.closest("[data-size]");
      if (!b) return;
      state.size = b.getAttribute("data-size");
      drawSizes();
    });
    drawSizes();

    var qtyVal = root.querySelector("[data-qty-val]");
    root.addEventListener("click", function (e) {
      var q = e.target.closest("[data-qty]");
      if (q) {
        state.qty = Math.max(1, Math.min(10, state.qty + parseInt(q.getAttribute("data-qty"), 10)));
        qtyVal.textContent = state.qty;
      }
    });

    var addBtn = root.querySelector("[data-add]");
    addBtn.addEventListener("click", function () {
      /* loading feedback (skill rule: loading-buttons / submit-feedback) */
      addBtn.disabled = true;
      var original = addBtn.innerHTML;
      addBtn.innerHTML = icon("check", 18) + "Added";
      addToCart(p.id, state.size, state.qty);
      setTimeout(function () {
        addBtn.disabled = false;
        addBtn.innerHTML = original;
      }, 1200);
    });

    /* Related products */
    var rel = document.querySelector("[data-related]");
    if (rel) {
      var others = PRODUCTS.filter(function (x) { return x.category === p.category && x.id !== p.id; });
      if (others.length < 4) {
        PRODUCTS.forEach(function (x) {
          if (others.length < 4 && x.id !== p.id && others.indexOf(x) === -1) others.push(x);
        });
      }
      renderGrid(rel, others.slice(0, 4));
    }
  }

  /* ---------- Page: cart ---------- */
  function initCart() {
    var listEl = document.querySelector("[data-cart-list]");
    var sumEl = document.querySelector("[data-cart-summary]");
    if (!listEl) return;

    var FREE_SHIP = 4999;
    var SHIP_FEE = 99;

    function draw() {
      var cart = getCart();

      if (!cart.length) {
        listEl.innerHTML =
          '<div class="empty-state">' +
            icon("bag", 44) +
            "<h2>Your bag is empty</h2>" +
            "<p>Looks like you haven’t added anything yet. Explore the collection to find something you love.</p>" +
            '<a class="btn btn-primary" href="products.html">Start shopping</a>' +
          "</div>";
        sumEl.innerHTML = "";
        return;
      }

      listEl.innerHTML = cart.map(function (it) {
        var p = byId(it.id);
        if (!p) return "";
        return (
          '<div class="cart-row">' +
            '<a class="cart-thumb" href="product.html?id=' + p.id + '" style="background:linear-gradient(160deg,' + p.tones[0] + " 0%," + p.tones[1] + ' 100%)" aria-label="' + p.name + '">' + icon(catIcon(p.category), 36) + (p.img ? photoTag(p.img, 200) : "") + "</a>" +
            '<div class="cart-info">' +
              '<p class="name"><a href="product.html?id=' + p.id + '">' + p.name + "</a></p>" +
              '<p class="meta">' + catLabel(p.category) + " &middot; Size " + it.size + " &middot; " + money(p.price) + " each</p>" +
              '<div class="controls">' +
                '<div class="qty-stepper">' +
                  '<button type="button" data-step="-1" data-id="' + p.id + '" data-size="' + it.size + '" aria-label="Decrease quantity of ' + p.name + '">' + icon("minus", 16) + "</button>" +
                  '<span class="qty-val">' + it.qty + "</span>" +
                  '<button type="button" data-step="1" data-id="' + p.id + '" data-size="' + it.size + '" aria-label="Increase quantity of ' + p.name + '">' + icon("plus", 16) + "</button>" +
                "</div>" +
                '<button type="button" class="remove-btn" data-remove data-id="' + p.id + '" data-size="' + it.size + '">' + icon("trash", 16) + "Remove</button>" +
              "</div>" +
            "</div>" +
            '<p class="cart-line-price">' + money(p.price * it.qty) + "</p>" +
          "</div>"
        );
      }).join("");

      var subtotal = cart.reduce(function (n, it) {
        var p = byId(it.id);
        return p ? n + p.price * it.qty : n;
      }, 0);
      var shipping = subtotal >= FREE_SHIP ? 0 : SHIP_FEE;

      sumEl.innerHTML =
        '<div class="summary-card">' +
          "<h2>Order summary</h2>" +
          '<p class="sum-row"><span>Subtotal</span><span>' + money(subtotal) + "</span></p>" +
          '<p class="sum-row"><span>Shipping</span>' +
            (shipping === 0 ? '<span class="free">Free</span>' : "<span>" + money(shipping) + "</span>") +
          "</p>" +
          (shipping !== 0
            ? '<p class="sum-row"><span style="color:var(--accent-deep)">Add ' + money(FREE_SHIP - subtotal) + " more for free shipping</span></p>"
            : "") +
          '<p class="sum-row total"><span>Total</span><span>' + money(subtotal + shipping) + "</span></p>" +
          '<button type="button" class="btn btn-primary btn-block" data-checkout style="margin-top:16px">Proceed to checkout</button>' +
          '<p class="summary-note">Taxes included. This is a demo store — no real payment.</p>' +
        "</div>";
    }

    document.addEventListener("click", function (e) {
      var step = e.target.closest("[data-step]");
      if (step) {
        var cart = getCart();
        var id = step.getAttribute("data-id");
        var size = step.getAttribute("data-size");
        var item = cart.filter(function (it) { return it.id === id && it.size === size; })[0];
        if (item) {
          var next = item.qty + parseInt(step.getAttribute("data-step"), 10);
          if (next < 1) next = 1;
          setQty(id, size, next);
          draw();
        }
        return;
      }
      var rm = e.target.closest("[data-remove]");
      if (rm) {
        var p = byId(rm.getAttribute("data-id"));
        removeItem(rm.getAttribute("data-id"), rm.getAttribute("data-size"));
        toast((p ? p.name : "Item") + " removed from bag");
        draw();
        return;
      }
      var co = e.target.closest("[data-checkout]");
      if (co) {
        co.disabled = true;
        co.textContent = "Processing…";
        setTimeout(function () {
          saveCart([]);
          draw();
          toast("Order placed! Thank you for shopping with AURÉA");
        }, 900);
      }
    });

    draw();
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initDrawer();
    updateBadge();
    var page = document.body.getAttribute("data-page");
    if (page === "home") initHome();
    if (page === "products") initProducts();
    if (page === "product") initProduct();
    if (page === "cart") initCart();
    initReveal();
  });
})();
