<template>
  <v-app>
    <v-app-bar app density="compact" color="primary">
      <v-app-bar-nav-icon @click="expanded = !expanded"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ t("shell.title") }} </v-app-bar-title>
      <v-spacer></v-spacer>
      <a @click="changeLocale('pl')">pl</a>|
      <a @click="changeLocale('en')">en</a>
    </v-app-bar>
    <v-navigation-drawer app v-model="expanded">
      <v-list density="compact">
        <v-list-item
          v-for="(menuItem, idx) in menu"
          :key="idx"
          :to="menuItem.route"
        >
          {{ t(menuItem.title) }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="margin: 10px"> 
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouteRecordRaw } from "vue-router";
import { shellRoutes } from ".";

interface MenuLink {
  title: string;
  route: RouteRecordRaw;
}

export default defineComponent({
  setup() {
    const menu = ref<MenuLink[]>(
      shellRoutes
        .filter((r) => r.meta && r.meta.menu)
        .map((r) => ({
          title: r.meta?.menu?.title || "",
          route: r,
        }))
    );

    const { t, locale } = useI18n();

    return {
      t,
      changeLocale: (newLocale: string) => {
        locale.value = newLocale;
      },
      menu,      
      expanded: ref(true),
    };
  },
});
</script>

<style >
</style>
