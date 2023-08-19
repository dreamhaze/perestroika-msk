
<script lang="ts" setup>
const currentUser = useAuthUser();
const isAdmin = useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;
    await logout(); 
    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>
<template lang="">
<header class="header" id="header">
      <div class="container">
        <div class="header__wrapper header__wrapper--inner">
          <div class="header__left">
            <PageLink to="/" class="header__logotype header__logotype--small">
              <picture>
                <source srcset="/img/logotype.svg" media="(min-width: 768px)" />
                <img src="/img/logotype-small.svg" alt="SCROLL" />
              </picture>
            </PageLink>
          </div>
          <div class="header__center">
            <h3 class="header__heading">Личный кабинет</h3>
          </div>
          <div class="header__right">
            <div class="header__controls header__controls--first">
              <a href="#" class="header__btn header__btn--search">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-search"></use>
                </svg>
              </a>
              <a href="#" class="header__btn header__btn--tablet-hidden">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-bookmarks"></use>
                </svg>
              </a>
              <a href="#" class="header__btn">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-notifications"></use>
                </svg>
              </a>
            </div>
            <div class="header__controls header__controls--second">
              <NuxtLink to="/login" class="header__btn">
                <span>Войти</span>
              </NuxtLink>
               <button :disabled="form.pending"  @click="onLogoutClick" >
                  Выйти
                </button>

              <!-- <button
            mb-3
            ml-auto
            py-1
            px-2
            rounded
            bg-light-100
            hover="bg-light-700"
            transition-colors
            :disabled="form.pending"
            @click="onLogoutClick"
          >
            Logout
          </button>
           -->
              <!-- <hamburger
                class="hamburger"
                id="hamburger-toggle"
                aria-label="Меню"
              >
                <span class="hamburger__inner"></span>
                <span class="hamburger__inner"></span>
                <span class="hamburger__inner"></span>
              </hamburger> -->
            </div>
          </div>
        </div>
      </div>
    </header>
</template>
<style lang=""></style>
