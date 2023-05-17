<template lang="">
  <v-app-bar title="" height="47">
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="help-links">
          <v-list nav dense class="d-flex">
            <router-link
              class="mr-5"
              v-for="(item, index) in helpLinks"
              to="/"
              :title="item.title"
              >{{ item.title }}</router-link
            >
          </v-list>
        </v-col>
        <v-col cols="6" class="account-info d-flex align-top justify-end">
          <v-card
            class="account-info__card mx-auto d-flex"
            :class="show ? 'opened' : 'closed  '"
            :elevation="0"
          >
            <v-col>
              <v-row class="justify-end" @click="show = !show" :ripple="false">
                <div
                  class="account-info__wallet ml-10 d-flex align-center justify-end"
                >
                  <span class="wallet-summ mr-5">150 000.00 RUB</span>
                </div>
                <div
                  class="account-info__wallet-owner mx-3 d-flex align-center justify-end"
                >
                  <span class="wallet-owner">
                    ИП Хмель Марина Валерьевна
                  </span>
                </div>
                <v-divider vertical></v-divider>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'">
                </v-btn>
              </v-row>
              <v-row>
                <v-expand-transition>
                  <div v-show="show">
                    <v-card-text>
                      Многие думают, что Lorem Ipsum - взятый с потолка
                      псевдо-латинский набор слов, но это не совсем так. Его
                      корни уходят в один фрагмент классической латыни 45 года
                      н.э., то есть более двух тысячелетий назад. Ричард
                      МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                      штат Вирджиния, взял одно из самых странных слов в Lorem
                      Ipsum, "consectetur", и занялся его поисками в
                      классической латинской литературе. В результате он нашёл
                      неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и
                      1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах
                      добра и зла"), написанной Цицероном в 45 году н.э. Этот
                      трактат по теории этики был очень популярен в эпоху
                      Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor
                      sit amet..", происходит от одной из строк в разделе
                      1.10.32
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn
                        color="red-accent-4"
                        variant="text"
                        @click="show = !show"
                        >Закрыть
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-expand-transition>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
// import PanelApp from "@/components/panels/PanelAppAccount2.vue";
export default {
  // components: {
  //   PanelApp,
  // },
  data: () => ({
    helpLinks: [
      {
        title: "Инструкции",
        value: 1,
      },
      {
        title: "Хелпдеск",
        value: 2,
      },
    ],
    show: false,
  }),
};
</script>
<style lang=""></style>
