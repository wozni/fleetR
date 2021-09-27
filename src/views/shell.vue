<template>
  <v-app>
    <v-app-bar app density="compact" color="primary">
      <v-app-bar-nav-icon @click="expanded = !expanded"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ t("title") }} </v-app-bar-title>
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
          <v-list-item-avatar>
              <v-icon v-if="menuItem.icon">{{menuItem.icon}}</v-icon>
              </v-list-item-avatar>        
          <v-list-item-title>{{ t(menuItem.title) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="margin: 10px"> 
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { useAppContext } from "@/core";
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { RouteRecordRaw } from "vue-router";

interface MenuLink {
  title: string;
  icon: string;
  route: RouteRecordRaw;
}

export default defineComponent({
  setup() {    
    const context = useAppContext();
    const menu = ref<MenuLink[]>(
      context && context.modules
        .flatMap(m => m.routes ?? [])
        .filter((r) => r.meta && r.meta.menu)
        .map((r) => ({
          title: r.meta?.menu?.title || "",
          icon: r.meta?.menu?.icon || "",
          route: r,          
        }))
    );
    const { t, locale } = useI18n();
    locale.value = localStorage.getItem("locale") || "pl";

    return {
      t,
      changeLocale: (newLocale: string) => {
        locale.value = newLocale;
        localStorage.setItem("locale", newLocale);
      },
      menu,      
      expanded: ref(true),
    };
  },
});
</script>

<i18n >
{
    pl: {
        title: "Zarządzanie flotą"
    },
    en: {
        title: "Fleet management"
    }
}
</i18n>
