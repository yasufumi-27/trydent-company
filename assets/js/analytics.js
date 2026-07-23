/* =============================================================
   TRIDENT COMPANY — 計測タグ（Google Analytics 4 / Google Tag Manager）
   -------------------------------------------------------------
   ▼ 使い方（公開前に1行だけ書き換える）
     1. GA4 の測定ID（G-XXXXXXXXXX）を取得し、下の GA4_MEASUREMENT_ID に記入
     2. GTM を使う場合は GTM_CONTAINER_ID（GTM-XXXXXXX）に記入（GA4と併用可・通常はどちらか一方）
     3. 記入するまでタグは一切読み込まれない（＝空のままでも表示・動作に影響なし）
   ▼ localhost / 127.0.0.1 / file: では自動的に送信しない（開発時のノイズ防止）
   ============================================================= */
(function () {
  'use strict';

  var GA4_MEASUREMENT_ID = '';   // 例: 'G-XXXXXXXXXX'  ← 公開前に記入
  var GTM_CONTAINER_ID   = '';   // 例: 'GTM-XXXXXXX'   ← GTMを使う場合のみ記入

  // --- 計測対象外の環境を除外 ---
  var host = location.hostname;
  var isLocal = !host || host === 'localhost' || host === '127.0.0.1' ||
                host === '::1' || /\.local$/.test(host) || location.protocol === 'file:';
  if (isLocal) return;

  // --- Google Analytics 4 (gtag.js) ---
  if (/^G-[A-Z0-9]+$/i.test(GA4_MEASUREMENT_ID)) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });

    // --- コンバージョン計測：電話タップ / LINE / フォーム送信 ---
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';

      if (href.indexOf('tel:') === 0) {
        gtag('event', 'tel_tap', {
          event_category: 'contact',
          event_label: location.pathname,
          transport_type: 'beacon'
        });
      } else if (href.indexOf('line.me') > -1 || a.hasAttribute('data-line')) {
        gtag('event', 'line_tap', {
          event_category: 'contact',
          event_label: location.pathname,
          transport_type: 'beacon'
        });
      } else if (href.indexOf('instagram.com') > -1) {
        gtag('event', 'instagram_tap', {
          event_category: 'sns',
          event_label: location.pathname,
          transport_type: 'beacon'
        });
      }
    }, true);

    document.addEventListener('submit', function (e) {
      if (!e.target || e.target.tagName !== 'FORM') return;
      gtag('event', 'form_submit', {
        event_category: 'contact',
        event_label: location.pathname
      });
    }, true);
  }

  // --- Google Tag Manager ---
  if (/^GTM-[A-Z0-9]+$/i.test(GTM_CONTAINER_ID)) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_CONTAINER_ID;
    document.head.appendChild(g);
  }
})();
