<template>
  <ul>
    <li v-for="(vehicle, idx) in store.state.vehicles.vehicles" :key="idx">
      {{ vehicle.title }} 
      <v-btn @click="removeVehicle(vehicle.title)">Usuń</v-btn>      
    </li>
  </ul>
  <v-btn @click="addVehicle">Dodaj pojazd</v-btn>
</template>
<script lang="ts" >
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
      addVehicle: () =>
        store.dispatch("vehicles/addVehicle", { title: "Pzykładowy pojazd 2" }),
      removeVehicle: (title: string) =>
        store.dispatch("vehicles/removeVehicle", title)      
    };
  },
});
</script>
