<script lang="ts" setup>
const config = useRuntimeConfig();
const userData = await useFetch(`${config.public.apiURL}users`);
const currentUser = useAuthUser(); 
</script>

<template lang="">
  <div class="layout__main-wrapper">
    <div class="layout__center">
      <div class="lk">
        <div class="lk__wrap">  
          <PagePersonalHeader :user="currentUser" :userData="userData" />
          <PagePersonalIndex v-if="currentUser" />
          <!-- <PagePersonalUser :user="currentUser" /> -->
        </div>
      </div>
    </div>
    <div class="layout__right">
      <span class="layout__info layout__sticky layout__sticky--bottom">На проекте с 12 янв 2023</span>
    </div>
  </div>
</template>
