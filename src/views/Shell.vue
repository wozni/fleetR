<template>
    <v-app>
        <v-app-bar app density="compact">
            <v-app-bar-nav-icon @click="expanded = !expanded"></v-app-bar-nav-icon>
            <v-app-bar-title>Zarzadzanie flotą</v-app-bar-title>
        </v-app-bar>
        <v-navigation-drawer app v-model="expanded">
            <v-list density="compact">                
                <v-list-item v-for="(menuItem, idx) in menu" :key="idx" :to="menuItem.route">
                    {{menuItem.title}}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { shellRoutes } from '.';

export default defineComponent({
    setup() {
        const menu = ref(shellRoutes
            .filter( r => r.meta?.menu)
            .map(r => ({ ...r.meta?.menu as any,
                route: {
                    name: r.name
                }
            })))
            
        return {
            menu,
            expanded: ref(true),            
        }
    },
})
</script>
