<script lang="ts" setup> 
</script>
 
<template>
  <div class="lk__wrapper">
    <div class="lk__top">
      <div class="lk__controls">
        <PageLink to="/" class="back-btn lk__back">
          <svg>
            <use xlink:href="/img/sprite.svg#icon-back"></use>
          </svg>
        </PageLink>
      </div>
      <div class="lk__controls">
        <PageLink to="/account" class="lk__settings">
          <svg>
            <use xlink:href="/img/sprite.svg#icon-settings"></use>
          </svg>
        </PageLink>
      </div>
    </div>
    <div class="lk__main">
      <div class="lk-user lk__user">
        <div class="lk-user__wrapper">
          <picture class="lk-user__img">
            <img src="/img/user.jpg" alt="Image" />
          </picture>
          <div class="lk-user__body">
            <span class="lk-user__name">Александр Македонский</span>
            <span class="lk-user__help">aleks@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
