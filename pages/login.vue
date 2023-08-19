<script lang="ts" setup>
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
    <div>
        <FormLogin @success="onLoginSuccess" />

        <PageUser :user="currentUser" />
    </div>
</template>
