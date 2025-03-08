import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    app: {
        head: {
          title: 'Gwc', 
          htmlAttrs: {
            lang: 'en',
          },
          meta: [
            // Standard Meta Description
            { name: 'description', content: 'This is for Signup site.' },
            { name: 'keywords', content: 'web development, Nuxt 3, Vuetify, JavaScript' }
            // Open Graph (Facebook, LinkedIn, etc.)
            { property: 'og:title', content: 'Pricing - My Website' },
            { property: 'og:description', content: 'Check out our affordable pricing plans!' },
            { property: 'og:image', content: 'https://example.com/og-image.jpg' }, 
            { property: 'og:url', content: 'https://example.com/pricing' },
            { property: 'og:type', content: 'website' },
        
            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Pricing - My Website' },
            { name: 'twitter:description', content: 'Check out our affordable pricing plans!' },
            { name: 'twitter:image', content: 'https://example.com/twitter-image.jpg' },
            { name: 'twitter:site', content: '@yourtwitterhandle' }
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: 'https://cdn-icons-png.flaticon.com/128/439/439842.png' },
          ]
        }
      },
    css: [
      "~/assets/css/vendors/bootstrap.min.css",
      "~/assets/css/vendors/flaticon.css",
      "~/assets/css/vendors/menu.css",
      "~/assets/css/vendors/fade-down.css",
      "~/assets/css/vendors/magnific-popup.css",
      "~/assets/css/vendors/animate.css",
      "~/assets/css/main.scss",
      "~/assets/css/responsive.scss",
      "~/assets/css/color-scheme/blue.scss",
      "~/assets/css/color-scheme/crocus.scss",
      "~/assets/css/color-scheme/green.scss",
      "~/assets/css/color-scheme/magenta.scss",
      "~/assets/css/color-scheme/pink.scss",
      "~/assets/css/color-scheme/skyblue.scss",
      "~/assets/css/color-scheme/violet.scss",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Rubik: {
                        wght: [300, 400, 500, 600, 700]
                    },
                    "Plus+Jakarta+Sans": {
                        wght: [400, 500, 600, 700]
                    },
                    Inter: {
                        wght: [400, 500, 600, 700, 800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
        "nuxt-swiper"
    ],
});
