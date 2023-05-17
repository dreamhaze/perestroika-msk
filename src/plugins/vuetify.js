// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'

const pscStyles = {
  dark: false,
  colors: {
    background:               '#fcfdfe',
    surface:                  '#fcfdfe',
    primary:                  '#FFFFFF', // ищем 
    'primary-dark':           '#5B5B5B',
    'secondary-darken-1':     '#d4d2d2',
    'grey-darken-1':          '#7B7B7B',
    secondary:                '#DE2226', // red
    // secondary: '#03DAC6', 
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  }
}


export default createVuetify({
  components: {
    VDataTable,
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found',
    },
  },
  theme: {
    defaultTheme: 'pscStyles',
    themes: {
      pscStyles,
    }
  }
})


