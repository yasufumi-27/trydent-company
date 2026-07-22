/* =============================================================
   TRIDENT COMPANY — 共通スクリプト
   ハンバーガー / スムーズスクロール(#contact) / FAQ / フェードイン
   ============================================================= */
(function () {
  'use strict';

  /* ---------- ハンバーガー ドロワー ---------- */
  var drawer = document.getElementById('drawer');
  var openBtn = document.querySelector('[data-drawer-open]');
  var closeEls = document.querySelectorAll('[data-drawer-close]');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }
  if (openBtn) openBtn.addEventListener('click', openDrawer);
  closeEls.forEach(function (el) { el.addEventListener('click', closeDrawer); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

  /* ---------- スムーズスクロール（同一ページ内アンカー / #contact） ----------
     レッカーCTAの確定挙動：#contact へスムーズスクロール（別ページ遷移・電話直行はしない） */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    a.addEventListener('click', function (e) {
      var target = document.querySelector(id);
      if (!target) return; // 対象が無ければ通常遷移に任せる
      e.preventDefault();
      closeDrawer();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---------- FAQ アコーディオン ---------- */
  document.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq__item');
      var ans = item.querySelector('.faq__a');
      var open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : 0;
    });
  });

  /* ---------- スクロールでフェードイン ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Instagram 表示（施工・入庫の様子） ----------
     assets/data/instagram-posts.js の window.IG_POSTS を「登録順」に表示する。
     各画像をクリックすると該当投稿の permalink へ遷移する。
     データが無い場合は HTML に書かれた静的グリッドをそのまま残す */
  var igGrid = document.querySelector('.ig-grid');
  var igPosts = window.IG_POSTS;
  if (igGrid && Array.isArray(igPosts) && igPosts.length) {
    igGrid.textContent = '';
    igPosts.forEach(function (post) {
      var a = document.createElement('a');
      a.href = post.url;
      a.target = '_blank';
      a.rel = 'noopener';
      var img = document.createElement('img');
      img.src = post.image;
      img.alt = post.alt || 'Instagram投稿';
      img.loading = 'lazy';
      a.appendChild(img);
      igGrid.appendChild(a);
    });
  }

  /* ---------- 現在年（フッター） ---------- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
