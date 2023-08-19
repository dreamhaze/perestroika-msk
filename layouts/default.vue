<script lang="ts" setup> 
const currentUser = useAuthUser();
</script> 

<template>
  <SectionHeader :user="currentUser" />
  <MobileMenu />
  <main class="layout">
    <div class="container">
      <div class="layout__wrap">
        <div class="layout__left">
          <SectionFooter />
        </div>
        <div class="layout__main">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
