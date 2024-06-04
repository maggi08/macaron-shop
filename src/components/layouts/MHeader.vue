<template>
  <HeaderBanners v-if="$route.name === 'home'" />
  <header class="header">
    <div class="header-upper">
      <div class="container">
        <div class="header-upper-content">
          <nav class="header-upper-nav">
            <ul class="header-upper-nav-list">
              <li class="header-upper-nav-link">
                <router-link to="/">Гарантия свежести</router-link>
              </li>
              <li class="header-upper-nav-link">
                <router-link to="/">Доставка и оплата</router-link>
              </li>
              <li class="header-upper-nav-link">
                <router-link to="/">Оптовые поставки</router-link>
              </li>
              <li class="header-upper-nav-link">
                <router-link to="/">Контакты</router-link>
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
            <router-link to="/sweet-days"> СЛАДКИЕ ДНИ % </router-link>
          </li>
          <li class="header-lower-nav-link">
            <router-link to="/gift-box"> подарочные наборы </router-link>
          </li>
          <li class="header-lower-nav-link">
            <router-link to="/create-box"> Собрать набор </router-link>
          </li>
        </ul>
        <router-link class="header-lower-nav-link logo" to="/">
          <img src="./icons/logo.svg" alt="" />
        </router-link>
        <ul class="header-lower-nav-list">
          <li class="header-lower-nav-link">
            <router-link to="/creat-design"> Создать дизайн </router-link>
          </li>
          <li class="header-lower-nav-link">
            <router-link to="/to-company"> КОМПАНИЯМ </router-link>
          </li>
          <li class="header-lower-nav-link">
            <router-link to="/catalog"> ВЕСЬ КАТАЛОГ </router-link>
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
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
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
.header-lower-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-lower-nav-list {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
.header-lower-nav-list:last-child {
  justify-content: flex-start;
}
.header-lower-nav-link {
  white-space: nowrap;
  margin: 0 15px;
}
.header-lower-nav-link.logo {
  margin: 0 30px;
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
