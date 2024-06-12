// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  target: 'static',
  router:{
    base: '/'
  },
  app:{
    head:{
      title:"Shane Dean"
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/color-mode', "@nuxt/content"],
  plugins:[
    {src:'~/plugins/pixi.client.js',mode:'client'},
  ],
  colorMode: {
    preference: 'dark',
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: [
        'javascript',
        'typescript',
        'vue',
        'vue-html']
    },
    ignores: [
      '\\.bak$',       // any file with the extension ".bak"
      '\\.hidden$',       // any file with the extension ".bak"
    ]
  },
  css: [
    '/assets/css/fonts.css'
  ],
  vite:{
    server: {
      hmr: {
        overlay: false
      }
    },
    build: {
      target: "esnext"
    },
    esbuild: {
      target: "esnext"
    },
    optimizeDeps:{
      esbuildOptions: {
        target: "esnext",
      }
    }
  }
})
