<!--<script setup lang="ts">-->
<!--import { RouterLink, RouterView } from 'vue-router'-->
<!--</script>-->

<!--<template>-->
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <RouterView />-->
<!--</template>-->

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--  max-height: 100vh;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--nav {-->
<!--  width: 100%;-->
<!--  font-size: 12px;-->
<!--  text-align: center;-->
<!--  margin-top: 2rem;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: var(&#45;&#45;color-text);-->
<!--}-->

<!--nav a.router-link-exact-active:hover {-->
<!--  background-color: transparent;-->
<!--}-->

<!--nav a {-->
<!--  display: inline-block;-->
<!--  padding: 0 1rem;-->
<!--  border-left: 1px solid var(&#45;&#45;color-border);-->
<!--}-->

<!--nav a:first-of-type {-->
<!--  border: 0;-->
<!--}-->

<!--/*@media (min-width: 1024px) {*/-->
<!--/*  header {*/-->
<!--/*    display: flex;*/-->
<!--/*    place-items: center;*/-->
<!--/*    padding-right: calc(var(&#45;&#45;section-gap) / 2);*/-->
<!--/*  }*/-->

<!--/*  .logo {*/-->
<!--/*    margin: 0 2rem 0 0;*/-->
<!--/*  }*/-->

<!--/*  header .wrapper {*/-->
<!--/*    display: flex;*/-->
<!--/*    place-items: flex-start;*/-->
<!--/*    flex-wrap: wrap;*/-->
<!--/*  }*/-->

<!--/*  nav {*/-->
<!--/*    text-align: left;*/-->
<!--/*    margin-left: -1rem;*/-->
<!--/*    font-size: 1rem;*/-->

<!--/*    padding: 1rem 0;*/-->
<!--/*    margin-top: 1rem;*/-->
<!--/*  }*/-->
<!--/*}*/-->
<!--</style>-->

<template>
  <div class="wrapper">
    <template v-if="$route.name && $route.name !== 'login'">
<!--      <div class="menu">-->
<!--        <div class="logo flex align-items-center">-->
<!--          <img-->
<!--            src="/public/logo.svg"-->
<!--            alt="Logo"-->
<!--            height="25"-->
<!--          >-->
<!--        </div>-->
<!--        <nav>-->
<!--          <RouterLink-->
<!--            to="/"-->
<!--            class="flex align-items-center menu__item"-->
<!--          >-->
<!--            <i class="material-symbols-rounded mi-cottage text-base" />-->
<!--            <span>Home</span>-->
<!--          </RouterLink>-->
<!--        </nav>-->
<!--      </div>-->
      <div class="wrapper--main">
        <header class="flex justify-content-between align-items-center">
          <nav>
            <RouterLink
              to="/"
              class="flex align-items-center menu__item"
            >
              <i class="pi pi-home text-base mr-2" />
              <span>Dashboard</span>
            </RouterLink>
          </nav>
          <Avatar
            label="DS"
            class="avatar mr-4 cursor-pointer"
            size="medium"
            shape="circle"
          />
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    </template>
    <template v-else>
      <div class="w-full">
        <RouterView />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Avatar from 'primevue/avatar'
</script>

<style lang="scss" scoped>
$headerHeight: 56px;
//$navWidth: 250px;
$navItemPadding: 0 0 0 24px;
$mainBorder: 1px solid var(--gray-200);

.wrapper {
  height: 100%;
  min-height: 100vh;

  //&--main {
  //  width: calc(100% - $navWidth);
  //}
}

header {
  height: $headerHeight;
  position: fixed;
  top: 0;
  //width: calc(100% - $navWidth);
  width: 100%;
  border-bottom: $mainBorder;
  background-color: var(--bluegray-50);
  z-index: 1;
}

.avatar {
  background-color: var(--primary-color);
  color: white;
}

.logo {
  height: $headerHeight;
  padding: $navItemPadding;
}

main {
  margin-top: $headerHeight;
  width: 100%;
  height: calc(100% - $headerHeight);
  padding: 0 24px;
  //background-color: var(--gray-50);
}

//.menu {
//  border-right: $mainBorder;
//  &__item {
//    i {
//      margin-right: 12px;
//    }
//  }
//}

nav {
  //width: $navWidth;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--primary-color);
}

nav a {
  color: var(--color-text);
  opacity: 0.9;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  height: 36px;
  padding: $navItemPadding;

  &:not(:first-child) {
    margin-top: 12px;
  }
}
</style>
