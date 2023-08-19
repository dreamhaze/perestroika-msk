<script lang="ts" setup> 
</script>

<template>
  <div class="menu">
    <div class="menu__wrap">
      <div class="menu__main">
        <div class="menu__block">
          <nav class="nav menu__nav">
            <ul class="nav__list">
              <li class="nav__item is--active">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-01"></use>
                  </svg>
                  <span>Пособия</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-02"></use>
                  </svg>
                  <span>Пенсия</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-03"></use>
                  </svg>
                  <span>Льготы</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-04"></use>
                  </svg>
                  <span>Семья</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-05"></use>
                  </svg>
                  <span>Долги</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-06"></use>
                  </svg>
                  <span>Договоры и сделки</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-07"></use>
                  </svg>
                  <span>Суды</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-08"></use>
                  </svg>
                  <span>Транспорт</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-09"></use>
                  </svg>
                  <span>Трудовое законодательство</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-10"></use>
                  </svg>
                  <span>Недвижимость</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-11"></use>
                  </svg>
                  <span>Уголовное законодательство</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-12"></use>
                  </svg>
                  <span>Наследственные споры</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-13"></use>
                  </svg>
                  <span>Защита прав потребителей</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-14"></use>
                  </svg>
                  <span>Административные правонарушения</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-15"></use>
                  </svg>
                  <span>Регистрация ЮЛ и ИП</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-16"></use>
                  </svg>
                  <span>Банкротство физ лица</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  <svg>
                    <use xlink:href="img/sprite.svg#icon-nav-17"></use>
                  </svg>
                  <span>Помощь иностранным гражданам</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="menu__block">
          <div class="menu__controls">
            <button class="ai-btn ai-btn--lg menu__ai">
              <span>Спросить у ИИ</span>
              <img src="img/ai-img.png" alt="AI" />
            </button>
            <button class="menu__btn">
              <span>Закладки</span>
              <svg>
                <use xlink:href="img/sprite.svg#icon-bookmarks"></use>
              </svg>
            </button>
            <button class="menu__btn menu__btn--mobile">
              <span>Уведомления</span>
              <svg>
                <use xlink:href="img/sprite.svg#icon-notifications"></use>
              </svg>
            </button>
            <button class="menu__btn menu__btn--mobile menu__close">
              <span>Закрыть</span>
              <svg>
                <use xlink:href="img/sprite.svg#icon-close"></use>
              </svg>
            </button>
          </div>
          <div class="c-account menu__account">
            <button class="c-account__inner">
              <span class="c-account__name">Александр Македонский</span>
              <span class="c-account__help">Аккаунт</span>
            </button>
          </div>
        </div>
      </div>
      <!-- footer -->
      <footer class="footer menu__footer" id="footer">
        <div class="footer-socmedia footer__socmedia">
          <div class="footer-socmedia__wrapper">
            <a href="#" class="footer-socmedia__btn">
              <svg class="footer-socmedia__icon">
                <use xlink:href="img/sprite.svg#icon-vcru"></use>
              </svg>
            </a>
            <a href="#" class="footer-socmedia__btn">
              <svg class="footer-socmedia__icon">
                <use xlink:href="img/sprite.svg#icon-telegram"></use>
              </svg>
            </a>
            <a href="#" class="footer-socmedia__btn">
              <svg class="footer-socmedia__icon">
                <use xlink:href="img/sprite.svg#icon-vk"></use>
              </svg>
            </a>
            <a href="#" class="footer-socmedia__btn">
              <svg class="footer-socmedia__icon">
                <use xlink:href="img/sprite.svg#icon-dzen"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-nav footer__nav">
          <div class="footer-nav__wrapper">
            <ul class="footer-nav__list">
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Заказать рекламу</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">О проекте</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Конфиденциальность</a>
              </li>
            </ul>
            <ul class="footer-nav__list">
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Правила</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Помощь</a>
              </li>
              <li class="footer-nav__item">
                <a href="#" class="footer-nav__link">Вакансии</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <!-- end of footer -->
    </div>
  </div>
</template>
