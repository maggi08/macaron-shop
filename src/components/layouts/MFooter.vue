<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-first">
        <div class="footer-about">
          <div class="footer-about-item">
            <img src="./icons/footer-icon1.svg" alt="" />
            <p>Готовим вручную и с любовью</p>
          </div>
          <div class="footer-about-item">
            <img src="./icons/footer-icon2.svg" alt="" />
            <p>Доставим в день заказа</p>
          </div>
          <div class="footer-about-item">
            <img src="./icons/footer-icon3.svg" alt="" />
            <p>100% миндальная мука и натуральные ингредиенты</p>
          </div>
        </div>
        <div class="footer-copyright">
          © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22
        </div>
      </div>
      <div class="footer-second">
        <div class="">
          <ul>
            <li>Информация</li>
            <li>
              <a href="/"> О компании </a>
            </li>
            <li>
              <a href="/"> Гарантии вкуса и свежести </a>
            </li>
            <li>
              <a href="/"> Доставка и оплата </a>
            </li>
            <li>
              <a href="/"> Контакты </a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul>
            <li>Каталог</li>
            <li>
              <a href="/"> Каталог десертов </a>
            </li>
            <li>
              <a href="/"> Готовые наборы </a>
            </li>
            <li>
              <a href="/"> Собрать свой набор </a>
            </li>
            <li>
              <a href="/"> Акции </a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul>
            <li>ДЛЯ БИЗНЕСА</li>
            <li>
              <a href="/"> Корпоративные подарки </a>
            </li>
            <li>
              <a href="/"> Для юридических лиц </a>
            </li>
            <li>
              <a href="/"> Оповикам </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-third">
        <div class="footer-contacts">
          <p>+7 (812) 309 82 88</p>
          <p>с 9:00 до 21:00</p>
        </div>
        <div class="footer-socials">
          <img src="./icons/footer-social-inst.svg" alt="" />
          <img src="./icons/footer-social-fb.svg" alt="" />
          <img src="./icons/footer-social-vk.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  background: #ebedee;
  padding-top: 56px;
  padding-bottom: 64px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.footer-first {
  max-width: 370px;
  width: 100%;
  font-size: 12px;
}
.footer-about {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
}
.footer-about-item {
  text-align: center;
  width: 100px;
}
.footer-about-item img {
  margin-bottom: 14px;
}
.footer-copyright {
  margin-top: 28px;
  opacity: 0.7;
}

.footer-second {
  display: flex;
}

.footer-second ul {
  width: 172px;
  margin-right: 24px;
  list-style: none;
}
.footer-second ul:last-child {
  margin-right: 0;
}
.footer-second ul li {
  font-size: 14px;
  margin-top: 12px;
}
.footer-second ul li:first-child {
  margin-top: 0;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.footer-third {
  display: flex;
  flex-direction: column;
}
.footer-contacts p:first-child {
  font-weight: 600;
  font-size: 18px;
}
.footer-contacts p:last-child {
  margin-top: 4px;
  font-size: 14px;
}
.footer-socials {
  margin-top: auto;
}
.footer-socials img {
  margin: 0 4px;
}
</style>
