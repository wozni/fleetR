<i18n>
{
  "test": "Dupa!"
}
</i18n>
<template>
<p>
  test: {{ t('test') }}
</p>
  <ul>
    <li v-for="(vehicle, idx) in store.state.vehicles.vehicles" :key="idx">
      {{ vehicle.title }} 
      <v-btn @click="removeVehicle(vehicle.title)">{{ t('vehicles.removeVehicle') }}</v-btn>      
    </li>
  </ul>
  <v-btn @click="addVehicle">{{ t('vehicles.addVehicle')}}</v-btn>
</template>
<script lang="ts" >
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const { t } = useI18n();

    return {
      t,
      store,
      addVehicle: () =>
        store.dispatch("vehicles/addVehicle", { title: "Pzykładowy pojazd 2" }),
      removeVehicle: (title: string) =>
        store.dispatch("vehicles/removeVehicle", title)      
    };
  },
});
</script>
