<script lang="ts" setup>
import type { UserWithoutPassword } from "~/types";

defineProps<{ user: UserWithoutPassword | null, userData: Object }>();
</script>
 
<template>
  <div class="lk__wrapper">
    <div class="lk__top">
      <div class="lk__controls">
        <a href="#" class="back-btn lk__back">
          <svg>
            <use xlink:href="img/sprite.svg#icon-back"></use>
          </svg>
        </a>
      </div>
      <div class="lk__controls">
        <a href="#" class="lk__exit">Выйти из аккаунта</a>
      </div>
    </div>
    <div class="lk__main">
      <div class="lk-edit lk__edit">
        <form action="#" class="lk-edit__wrapper">
          <div class="lk-edit__top">
            <div class="lk-edit__photo">
              <input
                type="file"
                id="upload-photo"
                class="lk-edit__photo-input"
              />
              <label for="upload-photo" class="lk-edit__photo-label">
                <picture class="lk-edit__img">
                  <img src="img/user.jpg" alt="Image" />
                </picture>
                <div class="lk-edit__icon-wrap">
                  <svg class="lk-edit__icon">
                    <use xlink:href="img/sprite.svg#icon-camera"></use>
                  </svg>
                </div>
              </label>
            </div>
          </div>
          <div class="lk-edit__main">
            <div class="lk-edit__inputs">
              <div class="input-field lk-edit__input is--error">
                <div class="input-field__top">
                  <label for="lk-edit-name" class="input-field__label"
                    >Имя</label
                  >
                </div>
                <div class="input-field__inner">
                  <input
                    type="text"
                    id="lk-edit-name"
                    class="input-field__input"
                    placeholder="Имя"
                    value="Александр"
                  />
                </div>
                <span class="input-field__error">Это обязательное поле</span>
              </div>
              <div class="input-field lk-edit__input">
                <div class="input-field__top">
                  <label for="lk-edit-name" class="input-field__label"
                    >Email</label
                  >
                </div>
                <div class="input-field__inner">
                  <input
                    type="text"
                    id="lk-edit-name"
                    class="input-field__input"
                    placeholder="example@gmail.com"
                    value="aleks@gmail.com"
                  />
                </div>
                <span class="input-field__error">Это обязательное поле</span>
              </div>
              <div class="input-field lk-edit__input">
                <div class="input-field__top">
                  <label for="lk-edit-name" class="input-field__label"
                    >Номер телефона</label
                  >
                </div>
                <div class="input-field__inner">
                  <input
                    type="text"
                    id="lk-edit-name"
                    class="input-field__input"
                    placeholder="+7 000 000 00 00"
                  />
                </div>
                <span class="input-field__error">Это обязательное поле</span>
              </div>
              <div class="input-field lk-edit__input">
                <div class="input-field__top">
                  <label for="lk-edit-name" class="input-field__label"
                    >Город</label
                  >
                </div>
                <div class="input-field__inner">
                  <input
                    type="text"
                    id="lk-edit-name"
                    class="input-field__input"
                    placeholder="Москва"
                  />
                </div>
                <span class="input-field__error">Это обязательное поле</span>
              </div>
            </div>
          </div>
          <div class="lk-edit__bottom">
            <button class="lk-edit__btn btn btn--md-bold btn--orange">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
