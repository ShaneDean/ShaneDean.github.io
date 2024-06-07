<template>
  <div class="text-3xl">
    <div>
      <div>
        Notion的分享功能导出的内容
        <a href="https://shanedean.notion.site/0fe88b1c404841b186a1f7c95b3a41ca">笔记工具使用情况</a>
      </div>
      <br/>
      <h1>文章列表</h1>
      <div >
        <!-- content md 访问路径的 table -->
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Path</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="item in navigation" :key="item._path">
            <template v-if="item.children">
              <tr v-for="child in flattenChildren(item.children)" :key="child._path" >
                <template v-if="!child.children">
                  <td>{{ child.title }} </td>
                  <td><a :href="child._path">{{ child._path }}</a></td>
                </template>
              </tr>
            </template>
          </template>
          </tbody>
        </table>
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
