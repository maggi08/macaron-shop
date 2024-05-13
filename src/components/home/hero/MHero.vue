<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-name">
          <h3 class="mont">Macaronshop</h3>
          <div class="mont">
            <img src="./img/line.svg" alt="" />
            <p>since 2013</p>
            <img src="./img/line.svg" alt="" />
          </div>
        </div>

        <h1 class="hero-title mont">Настоящая любовь</h1>
        <h2 class="hero-description">
          Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью
        </h2>
      </div>
    </div>

    <img class="hero-img" src="./img/hero.png" alt="" />
    <img class="hero-img-right" src="./img/hero-right-gradient.svg" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hero {
  position: relative;
  margin-top: -278px;
  padding-top: 278px;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
}
.hero-img {
  position: absolute;

  height: 100%;
  max-height: 480px;
  width: 100%;
  max-width: 868px;
  object-fit: contain;
  margin-top: 40px;
}
.hero-img-right {
  position: absolute;
  right: 0;
  top: 70%;
  transform: translateY(-50%);
}
.hero-content {
  max-width: 500px;

  text-align: center;
  z-index: 5;
  margin-left: auto;
  margin-right: 86px;
}
.hero-name h3 {
  font-weight: 600;
  font-size: 22px;
}
.hero-name div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-name p {
  font-weight: 600;
  margin: 0 12px;
}
.hero-title {
  margin-top: 24px;
  font-weight: 600;
  font-size: 42px;
}
.hero-description {
  font-weight: 400;
  margin-top: 12px;
  font-size: 18px;
}
</style>
