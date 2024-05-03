<template>
  <header class="header">
    <div class="header-upper">
      <div class="container">
        <div class="header-upper-content">
          <nav class="header-upper-nav">
            <ul class="header-upper-nav-list">
              <li class="header-upper-nav-link">
                <a href="/">Гарантия свежести</a>
              </li>
              <li class="header-upper-nav-link">
                <a href="/">Доставка и оплата</a>
              </li>
              <li class="header-upper-nav-link">
                <a href="/">Оптовые поставки</a>
              </li>
              <li class="header-upper-nav-link">
                <a href="/">Контакты</a>
              </li>
            </ul>
          </nav>

          <div class="header-upper-info">
            <div class="header-upper-info-item __cities">
              <img src="./icons/location.svg" alt="" />
              <p>Санкт-Петербург</p>
            </div>

            <a class="header-upper-info-item __contacts" href="tel:88123098288">
              <img src="./icons/phone.svg" alt="" />

              <p>8 812 309-82-88</p>
            </a>

            <div class="header-upper-info-item __cart">
              <img src="./icons/cart.svg" alt="" />
              <p>В корзине (4 товара)</p>
            </div>

            <div class="header-upper-socials">
              <a href="https://web.telegram.org" target="_blank">
                <img src="./icons/social-tg.svg" alt="" />
              </a>
              <a href="https://vk.com" target="_blank">
                <img src="./icons/social-vk.svg" alt="" />
              </a>
              <a href="https://odnoklasniki.com" target="_blank">
                <img src="./icons/social-od.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-lower">
      <nav class="header-lower-nav">
        <ul class="header-lower-nav-list">
          <li>
            <a class="header-lower-nav-link" href="/"> СЛАДКИЕ ДНИ % </a>
          </li>
          <li>
            <a class="header-lower-nav-link" href="/"> подарочные наборы </a>
          </li>
          <li>
            <a class="header-lower-nav-link" href="/"> Собрать набор </a>
          </li>
          <li>
            <a class="header-lower-nav-logo" href="/"> Logo </a>
          </li>
          <li>
            <a class="header-lower-nav-link" href="/"> Создать дизайн </a>
          </li>
          <li>
            <a class="header-lower-nav-link" href="/"> КОМПАНИЯМ </a>
          </li>
          <li>
            <a class="header-lower-nav-link" href="/"> ВЕСЬ КАТАЛОГ </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header-upper {
  background: var(--pink);
  padding: 12px 0;
}
.header-upper-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-upper-nav-list {
  display: flex;
  list-style: none;
}

.header-upper-nav-link {
  text-decoration: none;
  font-size: 14px;
  margin-right: 14px;
}
.header-upper-nav-link:last-child {
  margin-right: 0;
}
.header-upper-nav-link a:hover {
  text-decoration: underline;
}

.header-upper-info {
  display: flex;
  align-items: center;
}
.header-upper-info-item {
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-size: 14px;
}
.header-upper-info-item img {
  margin-right: 4px;
}
.header-upper-socials {
  display: flex;
}

.header-upper-socials a {
  margin-right: 8px;
}
.header-upper-socials a:last-child {
  margin-right: 0;
}
</style>
