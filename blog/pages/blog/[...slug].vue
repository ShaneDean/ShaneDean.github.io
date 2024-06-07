<template>
  <div>
    <ContentDoc class="w-1">
      <template v-slot="{ doc }">
        <article>
          <ContentRenderer  :value="doc"  class="prose dark:prose-invert md:prose-xl lg:prose-2xl" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>
