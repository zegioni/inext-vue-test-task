export default defineNuxtConfig({
    devtools: { enabled: false },
    components: true,
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});