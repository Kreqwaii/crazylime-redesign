const PRODUCTS = [
  {
    sku: '2100571',
    title: 'Нарядное платье для девочки Эстель',
    price: 2590,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Розовый',
    composition: '65% вискоза, 30% полиэстер, 5% эластан',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/',
    image: 'assets/products/2100571.jpg',
    fabricTag: 'viscose'
  },
  {
    sku: '7700186',
    title: 'Нарядное платье Даниэла',
    price: 4190,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Красный',
    composition: '50% хлопок, 50% акрил',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/naryadnoe-plate-daniela_1/',
    image: 'assets/products/7700186.jpg',
    fabricTag: 'cotton-lining'
  },
  {
    sku: '2100287',
    title: 'Нарядное платье для девочки Романтика',
    price: 3300,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Желтый',
    composition: '100% полиэстер',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/naryadnoe_plate_dlya_devochki_romantika_2/',
    image: 'assets/products/2100287.jpg',
    fabricTag: 'other'
  },
  {
    sku: '2100239',
    title: 'Нарядное платье для девочки Кэтти',
    price: 3950,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Ярко-розовый',
    composition: '100% полиэстер',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/naryadnoe_plate_dlya_devochki_ketti_2100239/',
    image: 'assets/products/2100239.jpg',
    fabricTag: 'other'
  },
  {
    sku: '2100315',
    title: 'Нарядное платье для девочки Стиляги',
    price: 4950,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Розовый',
    composition: '100% полиэстер',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/naryadnoe_plate_dlya_devochki_stilyagi_2_9800051/',
    image: 'assets/products/2100315.jpg',
    fabricTag: 'other'
  },
  {
    sku: '2100194',
    title: 'Нарядное каскадное платье для девочки Клео',
    price: 3950,
    category: 'Детские платья',
    subcategory: 'Нарядные',
    color: 'Красный',
    composition: '100% полиэстер',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/detskie-platya/naryadnyie/naryadnoe_kaskadnoe_plate_dlya_devochki_kleo_2100194/',
    image: 'assets/products/2100194.jpg',
    fabricTag: 'other'
  },
  {
    sku: '5200306',
    title: 'Джинсы для девочки',
    price: 1000,
    category: 'Для девочек',
    subcategory: 'Брюки и джинсы',
    color: 'Синий',
    composition: '100% полиэстер',
    origin: 'Киргизия',
    url: 'https://crazylime.ru/catalog/dlya-devochek/bryuki-dzhinsyi/dzhinsy/',
    image: 'assets/products/5200306.jpg',
    fabricTag: 'other'
  },
  {
    sku: 'KZD001',
    title: 'Куртка зимняя для девочки',
    price: 3700,
    category: 'Верхняя одежда',
    subcategory: 'Зима',
    color: 'Черный',
    composition: '100% полиэстер, утеплитель',
    origin: 'Китай',
    url: 'https://crazylime.ru/catalog/verxnyaya-odezhda/',
    image: 'assets/products/KZD001.jpg',
    fabricTag: 'other'
  }
];

const SIZES = ['122', '128', '134', '140', '146', '152'];

const SIZE_CHART = [
  { height: '122', chest: '60-62', waist: '55-57', age: '6-7 лет' },
  { height: '128', chest: '63-65', waist: '57-59', age: '7-8 лет' },
  { height: '134', chest: '66-68', waist: '59-61', age: '8-9 лет' },
  { height: '140', chest: '69-72', waist: '61-63', age: '9-10 лет' },
  { height: '146', chest: '73-76', waist: '63-65', age: '10-11 лет' },
  { height: '152', chest: '77-80', waist: '65-67', age: '11-12 лет' }
];

const state = {
  view: 'catalog',
  selectedProductSku: '2100571',
  category: 'Все модели',
  fabric: 'all',
  sort: 'default',
  search: '',
  selectedSizes: Object.fromEntries(PRODUCTS.map((p) => [p.sku, '134'])),
  favorites: new Set(),
  cart: [{ sku: '2100571', size: '134', qty: 1 }],
  cartOpen: false,
  sizeModalOpen: false,
  deliveryRegion: 'msk',
  orderSubmitted: false
};

const icons = {
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  heart: (filled) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  bag: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  truck: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  trash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
};

function formatPrice(value) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`;
}

function getFilteredProducts() {
  let list = PRODUCTS.filter((item) => {
    if (state.category === 'Избранное') {
      if (!state.favorites.has(item.sku)) return false;
    } else if (state.category !== 'Все модели' && item.category !== state.category) {
      return false;
    }

    if (state.fabric === 'viscose' && item.fabricTag !== 'viscose') return false;
    if (state.fabric === 'cotton-lining' && item.fabricTag !== 'cotton-lining') return false;

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      const hay = `${item.title} ${item.sku} ${item.color} ${item.subcategory}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (state.sort === 'asc') {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (state.sort === 'desc') {
    list = [...list].sort((a, b) => b.price - a.price);
  }
  return list;
}

function getCartTotals() {
  let count = 0;
  let sum = 0;
  for (const row of state.cart) {
    const product = PRODUCTS.find((p) => p.sku === row.sku);
    if (product) {
      count += row.qty;
      sum += product.price * row.qty;
    }
  }
  return { count, sum };
}

function addToCart(sku, size) {
  const existing = state.cart.find((item) => item.sku === sku && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ sku, size, qty: 1 });
  }
  state.orderSubmitted = false;
  state.cartOpen = true;
  render();
}

function updateCartQty(sku, size, delta) {
  const idx = state.cart.findIndex((item) => item.sku === sku && item.size === size);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  render();
}

function removeCartItem(sku, size) {
  state.cart = state.cart.filter((item) => !(item.sku === sku && item.size === size));
  render();
}

function toggleFavorite(sku) {
  if (state.favorites.has(sku)) {
    state.favorites.delete(sku);
  } else {
    state.favorites.add(sku);
  }
  render();
}

function openProduct(sku) {
  state.selectedProductSku = sku;
  state.view = 'product';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function renderHeader() {
  const { count } = getCartTotals();
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="#" class="brand" data-action="go-catalog">
          <span class="brand-mark">CL</span>
          <span class="brand-text">
            <span class="brand-name">CrazyLime</span>
            <span class="brand-sub">Детская одежда с 2009 года</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="Разделы сайта">
          <button type="button" class="nav-btn ${state.view === 'catalog' ? 'is-active' : ''}" data-nav="catalog">Каталог</button>
          <button type="button" class="nav-btn ${state.view === 'product' ? 'is-active' : ''}" data-nav="product">Карточка товара</button>
          <button type="button" class="nav-btn ${state.view === 'compare' ? 'is-active' : ''}" data-nav="compare">Что изменено</button>
        </nav>
        <div class="header-actions">
          <button type="button" class="icon-btn" data-action="open-cart" aria-label="Открыть корзину">
            ${icons.bag}
            <span>Корзина</span>
            <span class="cart-badge">${count}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderCatalogView() {
  const categories = ['Все модели', 'Детские платья', 'Для девочек', 'Верхняя одежда', 'Избранное'];
  const items = getFilteredProducts();

  return `
    <section class="intro-strip">
      <div class="container intro-grid">
        <div>
          <h1 class="intro-title">Детские платья и школьная форма</h1>
          <p class="intro-desc">Натуральная хлопковая подкладка, точная размерная сетка по росту и быстрая отгрузка за 1-3 рабочих дня</p>
        </div>
        <div class="intro-meta">
          <span class="meta-item">${icons.truck} СДЭК от <span class="tabular">150 ₽</span></span>
          <span class="meta-item">${icons.phone} <span class="tabular">8 (800) 350-11-07</span></span>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="toolbar">
        <div class="toolbar-row">
          <div class="category-tabs">
            ${categories.map((cat) => `
              <button type="button" class="tab-pill ${state.category === cat ? 'is-active' : ''}" data-cat="${cat}">
                ${cat}${cat === 'Избранное' && state.favorites.size > 0 ? ` (${state.favorites.size})` : ''}
              </button>
            `).join('')}
          </div>
          <div class="controls-group">
            <div class="search-box">
              ${icons.search}
              <input type="search" class="search-input" id="searchInput" placeholder="Поиск по названию или артикулу" value="${state.search.replace(/"/g, '&quot;')}">
            </div>
            <select class="select-input" id="fabricSelect" aria-label="Фильтр по ткани">
              <option value="all" ${state.fabric === 'all' ? 'selected' : ''}>Все ткани</option>
              <option value="viscose" ${state.fabric === 'viscose' ? 'selected' : ''}>Вискоза</option>
              <option value="cotton-lining" ${state.fabric === 'cotton-lining' ? 'selected' : ''}>Подкладка 100% хлопок</option>
            </select>
            <select class="select-input" id="sortSelect" aria-label="Сортировка по цене">
              <option value="default" ${state.sort === 'default' ? 'selected' : ''}>По умолчанию</option>
              <option value="asc" ${state.sort === 'asc' ? 'selected' : ''}>Сначала дешевле</option>
              <option value="desc" ${state.sort === 'desc' ? 'selected' : ''}>Сначала дороже</option>
            </select>
          </div>
        </div>
      </div>

      ${items.length === 0 ? `
        <div class="empty-state">
          <h3>Модели не найдены</h3>
          <p>Попробуйте изменить параметры фильтрации или очистить поисковый запрос</p>
          <button type="button" class="btn-secondary" data-action="reset-filters">Сбросить фильтры</button>
        </div>
      ` : `
        <div class="product-grid">
          ${items.map((item) => {
            const activeSize = state.selectedSizes[item.sku];
            const isFav = state.favorites.has(item.sku);
            return `
              <article class="product-card">
                <div class="card-media" data-open-product="${item.sku}">
                  <img src="${item.image}" alt="${item.title}" loading="lazy">
                  <button type="button" class="fav-btn ${isFav ? 'is-active' : ''}" data-fav="${item.sku}" aria-label="Добавить в избранное">
                    ${icons.heart(isFav)}
                  </button>
                </div>
                <div class="card-body">
                  <div class="card-meta-row">
                    <span>${item.subcategory}</span>
                    <span class="mono">${item.sku}</span>
                  </div>
                  <h2 class="card-title" data-open-product="${item.sku}">${item.title}</h2>
                  <div class="card-price tabular">${formatPrice(item.price)}</div>
                  <div class="size-pills" role="group" aria-label="Выбор размера">
                    ${SIZES.map((sz) => `
                      <button type="button" class="size-pill ${activeSize === sz ? 'is-active' : ''}" data-card-size="${item.sku}:${sz}">${sz}</button>
                    `).join('')}
                  </div>
                  <button type="button" class="btn-primary card-add-btn" data-add-cart="${item.sku}">В корзину</button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `}
    </section>
  `;
}

function renderProductDetailView() {
  const item = PRODUCTS.find((p) => p.sku === state.selectedProductSku) || PRODUCTS[0];
  const activeSize = state.selectedSizes[item.sku];
  const isFav = state.favorites.has(item.sku);

  return `
    <section class="container detail-view">
      <button type="button" class="back-link" data-action="go-catalog">
        ${icons.arrowLeft}
        <span>Назад в каталог</span>
      </button>

      <div class="detail-grid">
        <div class="detail-media">
          <img src="${item.image}" alt="${item.title}">
        </div>

        <div class="detail-panel">
          <div class="detail-top-meta">
            <span>${item.category} / ${item.subcategory}</span>
            <span class="mono">Артикул ${item.sku}</span>
          </div>

          <h1 class="detail-title">${item.title}</h1>
          <div class="detail-price tabular">${formatPrice(item.price)}</div>

          <div>
            <div class="detail-section-label">
              <span>Рост ребенка, см</span>
              <button type="button" class="text-link-btn" data-action="open-size-modal">Таблица размеров</button>
            </div>
            <div class="detail-sizes">
              ${SIZES.map((sz) => `
                <button type="button" class="detail-size-btn ${activeSize === sz ? 'is-active' : ''}" data-card-size="${item.sku}:${sz}">${sz}</button>
              `).join('')}
            </div>
          </div>

          <div class="detail-actions">
            <button type="button" class="btn-primary" data-add-cart="${item.sku}">Добавить в корзину</button>
            <button type="button" class="btn-secondary" data-fav="${item.sku}" aria-label="В избранное">
              ${icons.heart(isFav)}
            </button>
          </div>

          <div class="spec-list">
            <span class="spec-key">Цвет</span>
            <span class="spec-val">${item.color}</span>
            <span class="spec-key">Состав</span>
            <span class="spec-val">${item.composition}</span>
            <span class="spec-key">Производство</span>
            <span class="spec-val">${item.origin}</span>
            <span class="spec-key">Отгрузка</span>
            <span class="spec-val">1-3 рабочих дня со склада в Москве</span>
          </div>

          <div class="delivery-box">
            <div class="delivery-tabs">
              <button type="button" class="delivery-tab ${state.deliveryRegion === 'msk' ? 'is-active' : ''}" data-region="msk">Москва и СПб</button>
              <button type="button" class="delivery-tab ${state.deliveryRegion === 'rf' ? 'is-active' : ''}" data-region="rf">Регионы РФ</button>
            </div>
            <div class="delivery-rows tabular">
              ${state.deliveryRegion === 'msk' ? `
                <div class="delivery-row"><span>СДЭК до пункта выдачи</span><span>1-2 дня, от 150 ₽</span></div>
                <div class="delivery-row"><span>Почта России</span><span>от 290 ₽ (бесплатно от 7 000 ₽)</span></div>
              ` : `
                <div class="delivery-row"><span>СДЭК по России</span><span>3-12 дней, от 170 ₽</span></div>
                <div class="delivery-row"><span>Почта России</span><span>от 290 ₽ (бесплатно от 7 000 ₽)</span></div>
              `}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCompareView() {
  const changes = [
    {
      title: 'Доступность на мобильных устройствах',
      desc: 'Убран запрет масштабирования (user-scalable=no), добавлена адаптивная сетка от 2 до 4 колонок и удобные зоны нажатия.'
    },
    {
      title: 'Чистая архитектура без табличной верстки',
      desc: 'Устаревшая табличная верстка и тяжелые скрипты заменены на легкий семантический интерфейс с быстрой фильтрацией.'
    },
    {
      title: 'Выбор размера прямо в карточке',
      desc: 'Покупатель сразу видит доступные ростовки 122-152 см и может открыть таблицу мерок по росту, обхвату груди и талии.'
    },
    {
      title: 'Прозрачные условия доставки и минимального заказа',
      desc: 'В корзине автоматически проверяется минимальный порог 1 000 ₽ и отображается остаток до бесплатной доставки Почтой России от 7 000 ₽.'
    }
  ];

  return `
    <section class="container compare-view">
      <div class="compare-header">
        <h1>Что изменено в новом интерфейсе</h1>
        <p>Ключевые улучшения структуры и пользовательского опыта по сравнению с текущей версией crazylime.ru</p>
      </div>
      <div class="compare-grid">
        ${changes.map((c) => `
          <div class="compare-card">
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderCartDrawer() {
  if (!state.cartOpen) return '';
  const { sum } = getCartTotals();
  const minOrder = 1000;
  const freePostThreshold = 7000;
  const remainingForFree = Math.max(0, freePostThreshold - sum);
  const progressPct = Math.min(100, Math.round((sum / freePostThreshold) * 100));

  return `
    <div class="overlay" data-action="close-cart">
      <aside class="drawer" role="dialog" aria-label="Корзина" onclick="event.stopPropagation()">
        <div class="drawer-header">
          <h2>Корзина</h2>
          <button type="button" class="close-btn" data-action="close-cart" aria-label="Закрыть">${icons.close}</button>
        </div>

        <div class="drawer-body">
          ${state.orderSubmitted ? `
            <div class="empty-state">
              <h3>Заказ оформлен</h3>
              <p>Менеджер CrazyLime свяжется с вами для подтверждения деталей доставки</p>
              <button type="button" class="btn-secondary" data-action="close-cart">Вернуться к покупкам</button>
            </div>
          ` : state.cart.length === 0 ? `
            <div class="empty-state">
              <h3>Корзина пуста</h3>
              <p>Добавьте модели из каталога, минимальная сумма заказа 1 000 ₽</p>
            </div>
          ` : state.cart.map((row) => {
            const product = PRODUCTS.find((p) => p.sku === row.sku);
            if (!product) return '';
            return `
              <div class="cart-item">
                <img src="${product.image}" alt="${product.title}" class="cart-item-img">
                <div class="cart-item-info">
                  <div class="cart-item-title">${product.title}</div>
                  <div class="cart-item-meta tabular">Размер ${row.size} · Арт. ${product.sku}</div>
                  <div class="cart-item-bottom">
                    <div class="qty-control">
                      <button type="button" class="qty-btn" data-qty="${row.sku}:${row.size}:-1" aria-label="Уменьшить">-</button>
                      <span class="qty-val">${row.qty}</span>
                      <button type="button" class="qty-btn" data-qty="${row.sku}:${row.size}:1" aria-label="Увеличить">+</button>
                    </div>
                    <span class="tabular" style="font-weight:600">${formatPrice(product.price * row.qty)}</span>
                    <button type="button" class="close-btn" data-remove="${row.sku}:${row.size}" aria-label="Удалить">${icons.trash}</button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${state.cart.length > 0 && !state.orderSubmitted ? `
          <div class="drawer-footer">
            <div class="progress-box tabular">
              ${remainingForFree > 0
                ? `До бесплатной доставки Почтой России не хватает ${formatPrice(remainingForFree)}`
                : 'Доступна бесплатная доставка Почтой России'}
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width:${progressPct}%"></div>
              </div>
            </div>
            <div class="summary-row tabular">
              <span>Итого</span>
              <span>${formatPrice(sum)}</span>
            </div>
            ${sum < minOrder ? `
              <div style="font-size:13px;color:var(--danger)" class="tabular">Минимальная сумма заказа ${formatPrice(minOrder)}</div>
            ` : ''}
            <button type="button" class="btn-primary" data-action="submit-order" ${sum < minOrder ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>
              Оформить заказ
            </button>
          </div>
        ` : ''}
      </aside>
    </div>
  `;
}

function renderSizeModal() {
  if (!state.sizeModalOpen) return '';
  return `
    <div class="overlay is-modal" data-action="close-size-modal">
      <div class="modal" role="dialog" aria-label="Таблица размеров" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h2>Таблица размеров</h2>
          <button type="button" class="close-btn" data-action="close-size-modal" aria-label="Закрыть">${icons.close}</button>
        </div>
        <table class="size-table">
          <thead>
            <tr>
              <th>Рост, см</th>
              <th>Обхват груди, см</th>
              <th>Обхват талии, см</th>
              <th>Возраст</th>
            </tr>
          </thead>
          <tbody>
            ${SIZE_CHART.map((row) => `
              <tr>
                <td>${row.height}</td>
                <td>${row.chest}</td>
                <td>${row.waist}</td>
                <td>${row.age}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <span class="footer-title">CrazyLime</span>
          <span>Детская одежда и школьная форма с 2009 года</span>
          <span>г. Москва, Ленинский проспект, д. 139</span>
        </div>
        <div class="footer-col tabular">
          <span class="footer-title">Контакты</span>
          <span>Пн-Пт 9:00-18:00</span>
          <span>8 (800) 350-11-07 · +7 (499) 350-11-07</span>
          <span>info@crazylime.ru · <a href="https://vk.com/crazylime.shop" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">vk.com/crazylime.shop</a></span>
        </div>
      </div>
    </footer>
  `;
}

function render() {
  const app = document.getElementById('app');
  let mainContent = '';
  if (state.view === 'catalog') mainContent = renderCatalogView();
  else if (state.view === 'product') mainContent = renderProductDetailView();
  else if (state.view === 'compare') mainContent = renderCompareView();

  app.innerHTML = `
    ${renderHeader()}
    <main>${mainContent}</main>
    ${renderFooter()}
    ${renderCartDrawer()}
    ${renderSizeModal()}
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => {
      state.view = el.getAttribute('data-nav');
      render();
    });
  });

  document.querySelectorAll('[data-action="go-catalog"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      state.view = 'catalog';
      render();
    });
  });

  document.querySelectorAll('[data-cat]').forEach((el) => {
    el.addEventListener('click', () => {
      state.category = el.getAttribute('data-cat');
      render();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      render();
      const nextInput = document.getElementById('searchInput');
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
      }
    });
  }

  const fabricSelect = document.getElementById('fabricSelect');
  if (fabricSelect) {
    fabricSelect.addEventListener('change', (e) => {
      state.fabric = e.target.value;
      render();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });
  }

  document.querySelectorAll('[data-action="reset-filters"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.category = 'Все модели';
      state.fabric = 'all';
      state.sort = 'default';
      state.search = '';
      render();
    });
  });

  document.querySelectorAll('[data-open-product]').forEach((el) => {
    el.addEventListener('click', () => {
      openProduct(el.getAttribute('data-open-product'));
    });
  });

  document.querySelectorAll('[data-fav]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(el.getAttribute('data-fav'));
    });
  });

  document.querySelectorAll('[data-card-size]').forEach((el) => {
    el.addEventListener('click', () => {
      const [sku, size] = el.getAttribute('data-card-size').split(':');
      state.selectedSizes[sku] = size;
      render();
    });
  });

  document.querySelectorAll('[data-add-cart]').forEach((el) => {
    el.addEventListener('click', () => {
      const sku = el.getAttribute('data-add-cart');
      addToCart(sku, state.selectedSizes[sku]);
    });
  });

  document.querySelectorAll('[data-region]').forEach((el) => {
    el.addEventListener('click', () => {
      state.deliveryRegion = el.getAttribute('data-region');
      render();
    });
  });

  document.querySelectorAll('[data-action="open-cart"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.cartOpen = true;
      render();
    });
  });

  document.querySelectorAll('[data-action="close-cart"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.cartOpen = false;
      render();
    });
  });

  document.querySelectorAll('[data-qty]').forEach((el) => {
    el.addEventListener('click', () => {
      const [sku, size, delta] = el.getAttribute('data-qty').split(':');
      updateCartQty(sku, size, Number(delta));
    });
  });

  document.querySelectorAll('[data-remove]').forEach((el) => {
    el.addEventListener('click', () => {
      const [sku, size] = el.getAttribute('data-remove').split(':');
      removeCartItem(sku, size);
    });
  });

  document.querySelectorAll('[data-action="submit-order"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.cart = [];
      state.orderSubmitted = true;
      render();
    });
  });

  document.querySelectorAll('[data-action="open-size-modal"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.sizeModalOpen = true;
      render();
    });
  });

  document.querySelectorAll('[data-action="close-size-modal"]').forEach((el) => {
    el.addEventListener('click', () => {
      state.sizeModalOpen = false;
      render();
    });
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && (state.sizeModalOpen || state.cartOpen)) {
    state.sizeModalOpen = false;
    state.cartOpen = false;
    render();
  }
});

render();
