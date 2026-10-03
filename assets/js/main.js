(function () {
  'use strict';

  // ローディング
  window.addEventListener('load', function () {
    var l = document.getElementById('loading');
    if (l) setTimeout(function () { l.classList.add('is-done'); }, 400);
  });
  // 念のため3秒で強制解除
  setTimeout(function () {
    var l = document.getElementById('loading');
    if (l) l.classList.add('is-done');
  }, 3000);

  // ヘッダー影
  var header = document.getElementById('header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // メガメニュー（ホバー＋クリック対応）
  var megas = document.querySelectorAll('.c-gmenu .-mega');
  var closeAll = function (except) {
    megas.forEach(function (m) {
      if (m !== except) {
        m.classList.remove('is-open');
        m.querySelector('.c-gmenu__trigger').setAttribute('aria-expanded', 'false');
      }
    });
  };
  megas.forEach(function (m) {
    var t = m.querySelector('.c-gmenu__trigger');
    var timer;
    var open = function () { clearTimeout(timer); closeAll(m); m.classList.add('is-open'); t.setAttribute('aria-expanded', 'true'); };
    var close = function () { timer = setTimeout(function () { m.classList.remove('is-open'); t.setAttribute('aria-expanded', 'false'); }, 150); };
    m.addEventListener('mouseenter', open);
    m.addEventListener('mouseleave', close);
    t.addEventListener('click', function () { m.classList.contains('is-open') ? (m.classList.remove('is-open'), t.setAttribute('aria-expanded', 'false')) : open(); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(); toggleSp(false); } });
  document.addEventListener('click', function (e) { if (!e.target.closest('.c-gmenu')) closeAll(); });

  // SPメニュー
  var burger = document.getElementById('hamburger');
  var spnav = document.getElementById('spnav');
  function toggleSp(force) {
    var open = typeof force === 'boolean' ? force : !spnav.classList.contains('is-open');
    spnav.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    spnav.setAttribute('aria-hidden', !open);
    document.body.classList.toggle('is-locked', open);
  }
  burger.addEventListener('click', function () { toggleSp(); });
  spnav.querySelectorAll('.c-spnav__toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var li = b.parentElement;
      var open = !li.classList.contains('is-open');
      li.classList.toggle('is-open', open);
      b.setAttribute('aria-expanded', open);
    });
  });
  window.addEventListener('resize', function () { if (window.innerWidth > 1240) toggleSp(false); });

  // 施工実績の絞り込み
  var filter = document.querySelector('.c-filter');
  if (filter) {
    var cards = document.querySelectorAll('.c-works-card');
    filter.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      filter.querySelectorAll('button').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      var f = btn.getAttribute('data-filter');
      cards.forEach(function (c) { c.hidden = !(f === 'all' || c.getAttribute('data-cat') === f); });
    });
  }

  // お問い合わせフォーム
  var form = document.getElementById('contactForm');
  if (form) {
    // ?type=recruit などで種別を自動選択
    var type = new URLSearchParams(location.search).get('type');
    if (type && form.type.querySelector('option[value="' + type + '"]')) form.type.value = type;

    var msg = document.getElementById('formMsg');
    form.addEventListener('submit', function (e) {
      var ok = true;
      form.querySelectorAll('[required]').forEach(function (el) {
        var bad = el.type === 'checkbox' ? !el.checked : !el.value.trim() || (el.type === 'email' && !el.checkValidity());
        el.classList.toggle('is-error', bad);
        if (bad) ok = false;
      });
      if (!ok) {
        e.preventDefault();
        msg.className = 'c-form__msg -error';
        msg.textContent = '未入力または正しくない項目があります。';
        return;
      }
      if (form.getAttribute('data-endpoint') !== 'ready') {
        e.preventDefault();
        msg.className = 'c-form__msg -error';
        msg.textContent = '現在フォームは準備中です。お手数ですがお電話でお問い合わせください。';
      }
    });
  }

  // ページトップ
  document.querySelectorAll('.c-pagetop').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
