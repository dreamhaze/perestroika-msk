<script lang="ts" setup> 
</script>
 
<template>
  <div class="lk-tabs lk__tabs">
    <ul class="lk-tabs__list">
      <li class="lk-tabs__item">
        <button class="lk-tabs__tab">Публикации</button>
      </li>
      <li class="lk-tabs__item">
        <button class="lk-tabs__tab">Закладки</button>
      </li>
      <li class="lk-tabs__item">
        <button class="lk-tabs__tab">Конструктор документов</button>
      </li>
      <li class="lk-tabs__item is--active">
        <button class="lk-tabs__tab">Подписка PRO</button>
      </li>
      <li class="lk-tabs__item">
        <button class="lk-tabs__tab">Заказать рекламу</button>
      </li>
    </ul>
    <div class="lk-tabs__wrapper"></div>
    <div class="lk-tabs__wrapper"></div>
    <div class="lk-tabs__wrapper"></div>
    <div class="lk-tabs__wrapper is--active">
      <div class="pro-subscription">
        <div class="pro-subscription__wrapper">
          <h3 class="pro-subscription__heading">1 месяц</h3>
          <div class="pro-subscription__list">
            <div class="pro-subscription__item">
              <div class="pro-subscription__icon">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-sort"></use>
                </svg>
              </div>
              <div class="pro-subscription__body">
                <h4 class="pro-subscription__title">Быстрая модерация</h4>
                <p class="pro-subscription__description">
                  С подпиской PRO ваши предложенные публикации быстрее будут
                  проходить модерацию
                </p>
              </div>
            </div>
            <div class="pro-subscription__item">
              <div class="pro-subscription__icon">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-spa"></use>
                </svg>
              </div>
              <div class="pro-subscription__body">
                <h4 class="pro-subscription__title">Без рекламы</h4>
                <p class="pro-subscription__description">
                  Отключение рекламных баннеров
                </p>
              </div>
            </div>
            <div class="pro-subscription__item">
              <div class="pro-subscription__icon">
                <svg>
                  <use xlink:href="/img/sprite.svg#icon-spa"></use>
                </svg>
              </div>
              <div class="pro-subscription__body">
                <h4 class="pro-subscription__title">Без рекламы</h4>
                <p class="pro-subscription__description">
                  Отключение рекламных баннеров
                </p>
              </div>
            </div>
          </div>
          <a href="#" class="pro-subscription__btn btn btn--md btn--violet"
            >Купить за 100 ₽ в месяц</a
          >
        </div>
      </div>
    </div>
    <div class="lk-tabs__wrapper"></div>
  </div>
</template>
