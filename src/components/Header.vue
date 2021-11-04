<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo">Business <span>&</span> Digits</div>
        <div class="mobile-menu">
          <svg
            @click="toogleMenu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
          <ul v-if="showMenu" class="menu-naviagation mobile">
            <li @click="changeActiveMenu('home')" :class="activeMenuItem == 'home' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#home">
                Главная
              </a>
            </li>
            <li @click="changeActiveMenu('advantages')" :class="activeMenuItem == 'advantages' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#advantages">
                Свойства и выгоды
              </a>
            </li>
            <li @click="changeActiveMenu('steps')" :class="activeMenuItem == 'steps' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#steps">
                Этапы работ
              </a>
            </li>
            <li  @click="changeActiveMenu('cases')" :class="activeMenuItem == 'cases' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#cases">Кейсы</a>
            </li>
          </ul>
        </div>
        <ul class="menu-naviagation">
            <li @click="changeActiveMenu('home')" :class="activeMenuItem == 'home' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#home">
                Главная
              </a>
            </li>
            <li @click="changeActiveMenu('advantages')" :class="activeMenuItem == 'advantages' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#advantages">
                Свойства и выгоды
              </a>
            </li>
            <li @click="changeActiveMenu('steps')" :class="activeMenuItem == 'steps' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#steps">
                Этапы работ
              </a>
            </li>
            <li  @click="changeActiveMenu('cases')" :class="activeMenuItem == 'cases' ? 'menu-naviagtion__item active' : 'menu-naviagtion__item'">
              <a href="#cases">Кейсы</a>
            </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      activeMenuItem: "home",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.hideMenu);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.hideMenu);
  },
  methods: {
    changeActiveMenu(value) {
      this.activeMenuItem = value;
    },
    toogleMenu() {
      this.showMenu = !this.showMenu;
    },
    hideMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  display: none;
}
header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  height: 90px;
  z-index: 1;
  box-shadow: 10px 40px 50px rgb(229 233 246 / 50%);
  border-radius: 0 0 20px 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.logo {
  font-weight: bold;
  font-size: 24px;
}

.logo > span {
  color: #458ff6;
}

.menu-naviagation {
  display: flex;
  max-width: 460px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 18px;
}

.menu-naviagtion__item,
.menu-naviagtion__item > a {
  color: rgba(31, 21, 52, 0.5);
  text-decoration: none;
}

.menu-naviagtion__item:hover {
  color: #1f1534;
  cursor: pointer;
}

.menu-naviagtion__item:not(:first-child) {
  margin-left: 14px;
}

.menu-naviagtion__item.active,
.menu-naviagtion__item.active > a {
  font-weight: bold;
  color: #1f1534;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .menu-naviagation.mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
    margin: 0;
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    padding: 10px;
  }
  .mobile-menu {
    display: flex;
    cursor: pointer;
  }
  .menu-naviagation {
    display: none;
  }
}
</style>
