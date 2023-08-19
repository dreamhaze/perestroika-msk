<script lang="ts" setup>
const emit = defineEmits(["success"]);

const { login } = useAuth();

const form = reactive({
    data: {
        email: "user@mail.ru",
        password: "password",
        rememberMe: false,
    },
    error: "",
    pending: false,
});

async function onLoginClick() {
    try {
        form.error = "";
        form.pending = true;

        await login(form.data.email, form.data.password, form.data.rememberMe);

        emit("success");
    } catch (error: any) {
        console.error(error);

        if (error.data.message) form.error = error.data.message;
    } finally {
        form.pending = false;
    }
}
</script>

<template>
  <p v-if="form.error" mb-3 text-red-500>
    {{ form.error }}
  </p>
  <form mb-3 flex flex-wrap gap-3 @submit.prevent="onLoginClick">
    <div w-full>
      <input id="remember-me" v-model="form.data.rememberMe" type="checkbox" />

      <label for="remember-me" ml-1 text-light-100>Запомнить</label>
    </div>
    <input
      v-model="form.data.email"
      type="email"
      placeholder="Email"
      required
    />
    <input
      v-model="form.data.password"
      type="password"
      placeholder="Password"
      required
    />
    <button type="submit" :disabled="form.pending">Войти</button>
  </form>
</template>
