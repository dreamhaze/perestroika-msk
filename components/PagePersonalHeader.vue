<script lang="ts" setup>
import type { UserWithoutPassword } from "~/types";

defineProps<{ user: UserWithoutPassword | null, userData: Object }>();
definePageMeta({
    middleware: ["guest-only"],
}); 

const currentUser = useAuthUser();
const isAdmin = useAdmin();

async function onLoginSuccess() {
    // const redirect = isAdmin.value ? "/admin" : "/private";
    const redirect = "/";
    await navigateTo(redirect);
}
</script> 
<template>
  <div v-if="user" class="lk__wrapper">
    <div class="lk__top">
      <LKcontrols />
    </div>
    <div class="lk__main">
      <div class="lk-user lk__user">
        <div class="lk-user__wrapper">
          <picture class="lk-user__img">
            <img src="img/user.jpg" alt="Image" />
          </picture>
          <div class="lk-user__body">
            <span class="lk-user__name">Александр Македонский</span>
            <span class="lk-user__help">aleks@gmail.com</span>
          </div>
          <!-- <pre>current user: {{ JSON.stringify(user, null, 2) }}</pre>
          <pre>userData: {{ JSON.stringify(userData.data, null, 2) }}</pre> -->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <FormLogin @success="onLoginSuccess" />
  </div>
</template>
