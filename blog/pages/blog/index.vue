<template>
  <div class="text-3xl">
    <div>
      <br/>
      <h1>文章列表</h1>
      <div>
        <!-- content md 访问路径的 list -->
        <ul>
          <li v-for="item in navigation" :key="item._path">
            <template v-if="item.children">
              <li v-for="child in flattenChildren(item.children)" :key="child._path">
                <template v-if="!child.children">
                  <a :href="child._path">{{ child.title }}</a>
                </template>
              </li>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {NavItem} from "@nuxt/content/types";

const navigation = ref<NavItem[]>([]);
useAsyncData('navigation', async () => {
  const data = await fetchContentNavigation();
  // todo 排序
  navigation.value = data;
});
const flattenChildren = (children: NavItem[]): NavItem[] => {
  return children.reduce((flat: NavItem[], child: NavItem) => {
    return flat.concat(child, flattenChildren(child.children || []))
  }, [])
}

</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>
