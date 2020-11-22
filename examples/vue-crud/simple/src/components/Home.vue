<template>
  <h1>Hello {{ state.name }}</h1>
  <p>This is a home page view</p>
  <label for="name-input">
    pick one name:
    <input type="text" id="nameInput" v-model="state.name" />
  </label>
</template>

<script language="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    setup(){
        const state = inject('state')
        return {state}
    }
})
</script>