<script setup>
const links = [
  [
    { label: 'Home', icon: 'i-heroicons-home', to: '/' },
      // todo  等待整理
    { label: 'Blog', icon: 'i-heroicons-book-open', to: '/blog' },
    { label: 'Note', icon: 'i-heroicons-document-text', to: 'https://nieshansi.com/note/' },
      // todo 等待整理
    // { label: 'Project', icon: 'i-heroicons-squares-plus', to: '/project' },
  ],
]
</script>
<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between max-w-8xl mx-auto px-4 text-4xl ">
      <h1 class="flex flex-row items-center mr-2">
        <a href="https://github.com/ShaneDean" target="_blank">
          <span class="text-primary font-semibold text-lg">Shane Dean</span>
        </a>
      </h1>
      <div>
        <UHorizontalNavigation :links="links"  />
      </div>
    </div>
  </div>

  <div id="main" class="p-4 box-border overflow-auto mx-auto w-3/4" style="height: calc(100% - 61px)">
    <slot />
  </div>
  <UNotifications />
</template>
