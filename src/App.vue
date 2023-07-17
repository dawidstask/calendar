<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Avatar from 'primevue/avatar'
</script>

<template>
  <div class="wrapper">
    <template v-if="$route.name && $route.name !== 'login'">
      <header class="flex justify-content-between align-items-center">
        <nav>
          <RouterLink
            to="/"
            class="flex align-items-center menu__item"
          >
            <i class="pi pi-home text-base mr-2" />
            <span>Pulpit</span>
          </RouterLink>
        </nav>
        <Avatar
          label="DS"
          class="avatar mr-4 cursor-pointer"
          size="normal"
          shape="circle"
        />
      </header>
      <div class="wrapper--main">
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

<style lang="scss" scoped>
$headerHeight: 56px;
$navItemPadding: 0 0 0 24px;
$mainBorder: 1px solid var(--gray-200);

.wrapper {
  height: 100%;
  min-height: 100vh;

  &--main {
    top: calc($headerHeight + 10px);
    height: calc(100vh - ($headerHeight + 10px));
  }
}

header {
  height: $headerHeight;
  position: fixed;
  top: 0;
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
  width: 100%;
  height: calc(100% - $headerHeight);
  padding: 0 24px;
}

nav {
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
