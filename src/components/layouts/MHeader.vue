<template>
  <header class="header">
    <HeaderBanners />
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

    <div class="header-lower container">
      <nav class="header-lower-nav">
        <ul class="header-lower-nav-list">
          <li class="header-lower-nav-link">
            <a href="/"> СЛАДКИЕ ДНИ % </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> подарочные наборы </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> Собрать набор </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> <img src="./icons/logo.svg" alt="" /> </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> Создать дизайн </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> КОМПАНИЯМ </a>
          </li>
          <li class="header-lower-nav-link">
            <a href="/"> ВЕСЬ КАТАЛОГ </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderBanners from './HeaderBanners.vue'

export default {
  components: {
    HeaderBanners
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
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
  color: var(--blue-main);
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

.header-lower {
  padding-top: 16px;
  padding-bottom: 16px;
  background: white;
}
.header-lower-nav-list {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-lower-nav-link {
  margin: 0 15px;
}
.header-lower-nav-link:first-child {
  margin-left: 0;
}
.header-lower-nav-link:last-child {
  margin-right: 0;
}

.header-lower-nav-link a {
  text-transform: uppercase;
}
.header-lower-nav-link a:hover {
  color: var(--blue-main);
}
</style>
