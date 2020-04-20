import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import i18n from '../i18n'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.purple,
				secondary: colors.grey.darken1,
				accent: colors.shades.black,
				error: colors.red.accent3,
			},
			dark: {
				primary: colors.blue.lighten3,
			},
		},
	},
	icons: {
		iconfont: 'mdi'
	},
	lang: {
		t: (key, ...params) => i18n.t(key, params)
	}
})
