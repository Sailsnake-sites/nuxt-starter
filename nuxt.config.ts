// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "nl"
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Camper Profi",
			meta: [{ name: "Sailsnake__nuxt-starter--dev", content: "noindex, nofollow" }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' }
	},
	runtimeConfig: {
		public: {
			apiUrl: process.env.BACKEND_URL,
		}
	},
	modules: ["@nuxt/content"],
	css: [
		"@/assets/scss/fonts.scss",
		"@/assets/scss/main.scss",
		"@/assets/scss/type.scss",
		"@/assets/scss/forms.scss"
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";',
				},
			},
		},
	},
});
